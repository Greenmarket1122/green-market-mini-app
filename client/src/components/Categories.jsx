const categories = [
  "🥬 Sabzavotlar",
  "🍎 Mevalar",
  "🥤 Ichimliklar",
  "🥛 Sut mahsulotlari",
  "🍞 Non",
  "🥩 Go'sht"
];

export default function Categories() {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">
      {categories.map((item) => (
        <button
          key={item}
          className="whitespace-nowrap bg-white px-4 py-2 rounded-full shadow text-sm font-medium"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
