import BottomNav from "../components/BottomNav";

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <h1 className="text-2xl font-bold p-4">❤️ Saralanganlar</h1>

      <div className="p-4 text-gray-500">
        Hozircha saralangan mahsulotlar yo'q.
      </div>

      <BottomNav />
    </div>
  );
}
