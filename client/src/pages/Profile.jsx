import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <h1 className="text-2xl font-bold p-4">👤 Profil</h1>

      <div className="p-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="font-semibold">Green Market foydalanuvchisi</p>
          <p className="text-gray-500 mt-2">
            Telegram orqali kiriladi.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
