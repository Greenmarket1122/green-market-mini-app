import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function BottomNav() {
  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const active = (path) =>
    location.pathname === path ? "text-primary" : "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="grid grid-cols-4 py-3">

        <Link to="/" className={`flex flex-col items-center ${active("/")}`}>
          <span className="text-2xl">🏠</span>
          <span className="text-xs mt-1">Bosh sahifa</span>
        </Link>

        <Link
          to="/wishlist"
          className={`flex flex-col items-center ${active("/wishlist")}`}
        >
          <span className="text-2xl">❤️</span>
          <span className="text-xs mt-1">Saralangan</span>
        </Link>

        <Link
          to="/cart"
          className={`relative flex flex-col items-center ${active("/cart")}`}
        >
          <span className="text-2xl">🛒</span>

          {totalItems > 0 && (
            <span className="absolute top-0 right-5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}

          <span className="text-xs mt-1">Savat</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center ${active("/profile")}`}
        >
          <span className="text-2xl">👤</span>
          <span className="text-xs mt-1">Profil</span>
        </Link>

      </div>
    </nav>
  );
}
