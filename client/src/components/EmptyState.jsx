export default function EmptyState({ text }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">

      <div className="text-6xl">
        🛒
      </div>

      <p className="mt-4">
        {text}
      </p>

    </div>
  );
}
