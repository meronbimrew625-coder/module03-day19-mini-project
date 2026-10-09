import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://your-production-domain.example";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Addis Eats",
    template: "%s | Addis Eats"
  },

  description:
    "Discover Ethiopian dishes, traditional coffee and prices from Addis Eats.",

  openGraph: {
    title: "Addis Eats",
    description:
      "Discover Ethiopian dishes, traditional coffee and prices from Addis Eats.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Addis Eats Ethiopian food"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}