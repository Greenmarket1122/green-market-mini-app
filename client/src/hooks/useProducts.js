import { useMemo, useState } from "react";
import products from "../data/products";

export default function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Barchasi");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "Barchasi" ||
        product.category === category;

      return searchMatch && categoryMatch;
    });
  }, [search, category]);

  return {
    products: filteredProducts,
    search,
    setSearch,
    category,
    setCategory,
  };
}
