export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl p-3 shadow">

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-2xl"
        />

        <button className="absolute top-2 right-2 bg-white w-9 h-9 rounded-full shadow">
          🤍
        </button>

      </div>

      <h3 className="font-semibold mt-3 text-gray-800">
        {product.name}
      </h3>

      <p className="text-green-600 font-bold mt-1">
        {product.price}
      </p>

      <button className="w-full mt-3 bg-primary text-white py-3 rounded-2xl font-semibold">
        Savatga qo'shish
      </button>

    </div>
  );
}
