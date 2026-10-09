import Image from "next/image";
import Link from "next/link";
import { getDishes } from "../../lib/dishes";

export const metadata = {
  title: "Menu",
  description: "Browse Addis Eats dishes, Ethiopian coffee and prices before choosing what to order.",
  alternates: {
    canonical: "/menu"
  }
};

export default function MenuPage() {
  const dishes = getDishes();

  return (
    <main className="container">
      <header className="page-header">
        <Link href="/">← Home</Link>
        <h1>Menu</h1>
        <p>Explore Addis Eats favorites.</p>
      </header>

      <section className="grid">
        {dishes.map((dish) => (
          <article className="card" key={dish.id}>
            <Image
              src={dish.image}
              alt={dish.alt}
              width={800}
              height={600}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
            <div className="card-content">
              <h2>{dish.name}</h2>
              <p>{dish.summary}</p>
              <p className="price">ETB {dish.price}</p>
              <Link href={`/menu/${dish.id}`}>View details</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
