import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl p-3 shadow">

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

        <button className="absolute top-2 right-2 bg-white w-9 h-9 rounded-full shadow">
          🤍
        </button>

      </div>

      <h3 className="font-semibold mt-3 text-gray-800">
        {product.name}
      </h3>

      <div className="flex items-center justify-between mt-1">
        <p className="text-green-600 font-bold">
          {product.price.toLocaleString()} so'm
        </p>

        <span className="text-yellow-500 text-sm">
          ⭐ {product.rating}
        </span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-3 bg-primary text-white py-3 rounded-2xl font-semibold"
      >
        Savatga qo'shish
      </button>

    </div>
  );
}
