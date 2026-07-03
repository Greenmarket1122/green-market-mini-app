import { useCart } from "../context/CartContext";

export default function BottomNav() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="grid grid-cols-4 py-3">

        <button className="flex flex-col items-center text-primary">
          <span className="text-2xl">🏠</span>
          <span className="text-xs mt-1">Bosh sahifa</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <span className="text-2xl">❤️</span>
          <span className="text-xs mt-1">Saralangan</span>
        </button>

        <button className="relative flex flex-col items-center text-gray-500">
          <span className="text-2xl">🛒</span>

          {totalItems > 0 && (
            <span className="absolute top-0 right-5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}

          <span className="text-xs mt-1">Savat</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <span className="text-2xl">👤</span>
          <span className="text-xs mt-1">Profil</span>
        </button>

      </div>
    </nav>
  );
}
