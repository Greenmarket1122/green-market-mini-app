import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import BottomNav from "../components/BottomNav";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background pb-52">

      <h1 className="text-2xl font-bold p-4">
        🛒 Savatcha
      </h1>

      <div className="px-4">

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            Savatchangiz bo'sh
          </div>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))
        )}

      </div>

      {cart.length > 0 && (
        <CartSummary total={total} />
      )}

      <BottomNav />

    </div>
  );
}
