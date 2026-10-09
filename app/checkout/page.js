export const metadata = {
  title: "Checkout",
  description: "Complete your Addis Eats order and provide the details needed for checkout.",
  alternates: {
    canonical: "/checkout"
  }
};

export default function CheckoutPage() {
  return (
    <main className="container simple-page">
      <h1>Checkout</h1>
      <p>Complete your order details to finish your Addis Eats order.</p>
    </main>
  );
}
