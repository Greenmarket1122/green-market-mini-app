import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-background pb-24">

      <h1 className="text-2xl font-bold p-4">
        ❤️ Saralanganlar
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          Hozircha mahsulot yo'q
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 p-4">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <BottomNav />

    </div>
  );
}
