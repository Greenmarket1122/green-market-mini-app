import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import BottomNav from "../components/BottomNav";

import useProducts from "../hooks/useProducts";

export default function Home() {

  const {
    products,
    search,
    setSearch,
    category,
    setCategory,
  } = useProducts();

  return (
    <div className="min-h-screen bg-background pb-24">

      <Header />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        selected={category}
        onSelect={setCategory}
      />

      <Banner />

      <ProductGrid
        products={products}
      />

      <BottomNav />

    </div>
  );
}
