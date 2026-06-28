import net from "node:net";
import tls from "node:tls";

type MailOptions = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

type SmtpSocket = net.Socket | tls.TLSSocket;

const CRLF = "\r\n";

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

function dotStuff(value: string) {
  return value.replace(/\r?\n/g, CRLF).replace(/^\./gm, "..");
}

function readResponse(socket: SmtpSocket) {
  return new Promise<string>((resolve, reject) => {
    let buffer = "";

    function cleanup() {
      socket.off("data", onData);
      socket.off("error", onError);
    }

    function onError(error: Error) {
      cleanup();
      reject(error);
    }

    function onData(chunk: Buffer) {
      buffer += chunk.toString("utf8");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines.at(-1);

      if (lastLine && /^\d{3} /.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    }

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function command(socket: SmtpSocket, line: string, expected: number[]) {
  socket.write(`${line}${CRLF}`);
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));

  if (!expected.includes(code)) {
    throw new Error(`SMTP command failed: ${line} / ${response}`);
  }

  return response;
}

function connect(host: string, port: number, secure: boolean) {
  return new Promise<SmtpSocket>((resolve, reject) => {
    const socket = secure ? tls.connect(port, host) : net.connect(port, host);
    socket.setTimeout(15000);
    if (secure) {
      socket.once("secureConnect", () => resolve(socket));
    } else {
      socket.once("connect", () => resolve(socket));
    }
    socket.once("timeout", () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out"));
    });
    socket.once("error", reject);
  });
}

async function upgradeToTls(socket: net.Socket, host: string) {
  await command(socket, "STARTTLS", [220]);

  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const secureSocket = tls.connect({ socket, servername: host });
    secureSocket.once("secureConnect", () => resolve(secureSocket));
    secureSocket.once("error", reject);
  });
}

export async function sendSmtpMail({ to, replyTo, subject, text }: MailOptions) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!user || !pass || !from) {
    throw new Error("SMTP environment variables are missing");
  }

  let socket = await connect(host, port, port === 465);

  try {
    await readResponse(socket);
    await command(socket, `EHLO ${process.env.SMTP_HELO || "renascer.jp"}`, [250]);

    if (port !== 465) {
      socket = await upgradeToTls(socket as net.Socket, host);
      await command(socket, `EHLO ${process.env.SMTP_HELO || "renascer.jp"}`, [250]);
    }

    await command(socket, "AUTH LOGIN", [334]);
    await command(socket, Buffer.from(user).toString("base64"), [334]);
    await command(socket, Buffer.from(pass).toString("base64"), [235]);
    await command(socket, `MAIL FROM:<${sanitizeHeader(from)}>`, [250]);
    await command(socket, `RCPT TO:<${sanitizeHeader(to)}>`, [250, 251]);
    await command(socket, "DATA", [354]);

    const message = [
      `From: RENASCER <${sanitizeHeader(from)}>`,
      `To: ${sanitizeHeader(to)}`,
      `Reply-To: ${sanitizeHeader(replyTo)}`,
      `Subject: ${encodeHeader(subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      dotStuff(text),
      ".",
    ].join(CRLF);

    socket.write(`${message}${CRLF}`);
    const response = await readResponse(socket);
    const code = Number(response.slice(0, 3));

    if (code !== 250) {
      throw new Error(`SMTP DATA failed: ${response}`);
    }

    await command(socket, "QUIT", [221]);
  } finally {
    socket.destroy();
  }
}
