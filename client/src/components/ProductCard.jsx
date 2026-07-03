import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div className="bg-white rounded-3xl p-3 shadow">

      <Link to={`/product/${product.id}`}>

        <div className="relative">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-2xl"
          />

          {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}

        </div>

      </Link>

      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-5 right-5 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
      >
        {isWishlisted(product.id) ? "❤️" : "🤍"}
      </button>

      <h3 className="font-semibold mt-3 text-gray-800">
        {product.name}
      </h3>

      <div className="flex justify-between items-center mt-2">
        <p className="font-bold text-primary">
          {product.price.toLocaleString()} so'm
        </p>

        <span className="text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-primary text-white py-3 rounded-2xl"
      >
        Savatga qo'shish
      </button>

    </div>
  );
}
