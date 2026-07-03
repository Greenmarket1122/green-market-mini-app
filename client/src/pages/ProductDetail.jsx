import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        Mahsulot topilmadi
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

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

        <div className="mt-4 text-3xl font-bold text-primary">
          {product.price.toLocaleString()} so'm
        </div>

        <p className="mt-6 text-gray-600 leading-7">
          Green Market sifat kafolati bilan yetkazib beriladi.
          Har kuni yangi mahsulot.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 w-full bg-primary text-white py-4 rounded-2xl text-lg font-bold"
        >
          Savatga qo'shish
        </button>

      </div>

    </div>
  );
}
