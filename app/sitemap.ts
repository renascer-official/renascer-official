import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://renascer.jp";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      priority: 0.9,
    },
  ];
}
