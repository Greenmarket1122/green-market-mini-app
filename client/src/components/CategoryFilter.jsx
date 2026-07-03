const categories = [
  "Barchasi",
  "Ichimliklar",
  "Mevalar",
  "Sut",
];

export default function CategoryFilter({
  selected,
  onSelect,
}) {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selected === category
              ? "bg-primary text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
