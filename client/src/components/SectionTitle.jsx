export default function SectionTitle({ title }) {
  return (
    <div className="flex justify-between items-center px-4 mt-8 mb-3">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <button className="text-primary font-semibold">
        Barchasi →
      </button>

    </div>
  );
}
