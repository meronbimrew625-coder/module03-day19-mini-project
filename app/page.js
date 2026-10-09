import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Discover Ethiopian favorites and traditional coffee from Addis Eats.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">ADDIS EATS</p>

          <h1>Ethiopian food, made easy.</h1>

          <p>
            Discover classic Ethiopian dishes and coffee from Addis Eats.
          </p>

          <Link className="button" href="/menu">
            View the menu
          </Link>
        </div>

        <div className="hero-image">
          <Image
            src="/images/addis-eats.jfif"
            alt="Ethiopian food served by Addis Eats"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
      </section>
    </main>
  );
}