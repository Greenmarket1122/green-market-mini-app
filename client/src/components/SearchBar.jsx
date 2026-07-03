export default function SearchBar({ value, onChange }) {
  return (
    <div className="px-4 mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Mahsulot qidirish..."
        className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:border-primary"
      />
    </div>
  );
}
