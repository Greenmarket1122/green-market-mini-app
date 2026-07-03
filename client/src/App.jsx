import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      <Categories />
      <Banner />
      <ProductGrid />
      <BottomNav />
    </div>
  );
}

export default App;
