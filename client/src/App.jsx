import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      <Categories />
      <Banner />
    </div>
  );
}
