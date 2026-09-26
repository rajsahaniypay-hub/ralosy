import type { MetadataRoute } from "next";
import { founders } from "@/data/founders";
import { siteUrl } from "@/lib/site";

/** Stable date so the sitemap does not change on every build. */
const updated = new Date("2026-09-26T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...founders.map((founder) => ({
      url: `${siteUrl}/founders/${founder.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
