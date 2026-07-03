export default function Header() {
  return (
    <header className="bg-primary rounded-b-3xl px-5 py-6 shadow-lg">

      <h1 className="text-2xl font-bold text-white">
        🥬 Green Market
      </h1>

      <p className="text-green-100 mt-1">
        Har kuni yangi mahsulotlar
      </p>

      <div className="mt-5">

        <input
          type="text"
          placeholder="🔍 Mahsulot qidirish..."
          className="w-full rounded-2xl p-4 outline-none text-gray-700"
        />

      </div>

    </header>
  );
}
