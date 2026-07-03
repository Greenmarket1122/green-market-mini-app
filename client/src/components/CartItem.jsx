import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increase, decrease, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-2xl p-4 shadow mb-4">
      <div className="flex gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 rounded-xl object-cover"
        />

        <div className="flex-1">

          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-primary font-bold mt-1">
            {item.price.toLocaleString()} so'm
          </p>

          <div className="flex items-center gap-3 mt-4">

            <button
              onClick={() => decrease(item.id)}
              className="bg-gray-200 w-8 h-8 rounded-full"
            >
              −
            </button>

            <span className="font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => increase(item.id)}
              className="bg-primary text-white w-8 h-8 rounded-full"
            >
              +
            </button>

          </div>

        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-xl"
        >
          🗑️
        </button>

      </div>
    </div>
  );
}
