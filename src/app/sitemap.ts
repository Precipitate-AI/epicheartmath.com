import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://epicheartmath.com";
const LAST_MODIFIED = "2026-09-18";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
