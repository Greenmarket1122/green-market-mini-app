import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-5">
        Mahsulot topilmadi.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="p-4">

        <Link
          to="/"
          className="text-primary font-semibold"
        >
          ← Orqaga
        </Link>

      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <div className="mt-2 text-yellow-500">
          ⭐ {product.rating}
        </div>

        <p className="mt-5 text-3xl font-bold text-primary">
          {product.price.toLocaleString()} so'm
        </p>

        <p className="mt-6 leading-7 text-gray-600">
          Green Market sifat kafolati bilan yetkazib beriladi.
          Mahsulot har kuni yangilanadi.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 w-full bg-primary text-white py-4 rounded-2xl font-bold"
        >
          Savatga qo'shish
        </button>

      </div>

    </div>
  );
}
