import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Coca Cola 1.5L",
    price: "14 990 so'm",
    image: "https://picsum.photos/300?1"
  },
  {
    id: 2,
    name: "Olma",
    price: "18 500 so'm",
    image: "https://picsum.photos/300?2"
  },
  {
    id: 3,
    name: "Banan",
    price: "27 900 so'm",
    image: "https://picsum.photos/300?3"
  },
  {
    id: 4,
    name: "Sut 1L",
    price: "16 500 so'm",
    image: "https://picsum.photos/300?4"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
