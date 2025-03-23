import { siteConfig } from "@/lib/config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/blog"];
  return [
    ...routes.map((tag) => ({
      url: siteConfig.url + tag,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  ];
}
