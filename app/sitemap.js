import { getDishes } from "../lib/dishes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.example";

export default function sitemap() {
  const dishes = getDishes();
  const publicRoutes = [
    { path: "/", priority: 1 },
    { path: "/menu", priority: 0.9 },
    ...dishes.map((dish) => ({ path: `/menu/${dish.id}`, priority: 0.8 }))
  ];

  return publicRoutes.map(({ path, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority
  }));
}
