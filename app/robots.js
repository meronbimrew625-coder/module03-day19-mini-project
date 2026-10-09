const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.example";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/cart", "/checkout"]
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString()
  };
}
