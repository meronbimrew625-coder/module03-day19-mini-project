export const metadata = {
  title: "Cart",
  description: "Review the Ethiopian dishes you selected before continuing to checkout.",
  alternates: {
    canonical: "/cart"
  }
};

export default function CartPage() {
  return (
    <main className="container simple-page">
      <h1>Your Cart</h1>
      <p>Review your selected Addis Eats items before checkout.</p>
    </main>
  );
}
