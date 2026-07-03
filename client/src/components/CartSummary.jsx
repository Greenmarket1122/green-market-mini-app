export default function CartSummary({ total }) {
  return (
    <div className="fixed bottom-20 left-0 right-0 bg-white border-t p-4 shadow-xl">

      <div className="flex justify-between mb-3">

        <span className="font-semibold">
          Jami
        </span>

        <span className="font-bold text-primary">
          {total.toLocaleString()} so'm
        </span>

      </div>

      <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold">
        Buyurtma berish
      </button>

    </div>
  );
}
