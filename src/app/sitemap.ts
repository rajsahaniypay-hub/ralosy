import type { MetadataRoute } from "next";
import { founders } from "@/data/founders";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ralosy.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...founders.map((f) => ({
      url: `${base}/founders/${f.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
