import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDish, getDishes } from "../../../lib/dishes";

export function generateStaticParams() {
  return getDishes().map((dish) => ({ id: dish.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = getDish(id);

  if (!dish) {
    return {
      title: "Dish not found",
      description: "The requested Addis Eats dish could not be found.",
      robots: { index: false, follow: false }
    };
  }

  return {
    title: dish.name,
    description: `${dish.name} costs ETB ${dish.price}. ${dish.summary}`,
    alternates: {
      canonical: `/menu/${dish.id}`
    },
    openGraph: {
      title: `${dish.name} | Addis Eats`,
      description: dish.summary,
      type: "website",
      images: [
        {
          url: `/menu/${dish.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${dish.name} from Addis Eats`
        }
      ]
    }
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = getDish(id);

  if (!dish) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.summary,
    image: dish.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "ETB",
      price: String(dish.price)
    }
  };

  return (
    <main className="container">
      <div className="page-header">
        <Link href="/menu">← Back to menu</Link>
      </div>

      <article className="detail">
        <Image
          src={dish.image}
          alt={dish.alt}
          width={1000}
          height={750}
          sizes="(max-width: 800px) 100vw, 60vw"
        />

        <div>
          <h1>{dish.name}</h1>
          <p className="price">ETB {dish.price}</p>
          <p>{dish.summary}</p>
          <p>{dish.description}</p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
