import { useState } from "react";
import banners from "../data/banners";

export default function Banner() {
  const [current] = useState(0);

  const banner = banners[current];

  return (
    <div className="px-4 mt-4">
      <div
        className={`bg-gradient-to-r ${banner.color} rounded-3xl p-6 text-white`}
      >
        <h2 className="text-3xl font-bold">
          {banner.title}
        </h2>

        <p className="mt-2 opacity-90">
          {banner.subtitle}
        </p>

        <button className="mt-6 bg-white text-green-600 px-5 py-3 rounded-2xl font-bold">
          Xarid qilish
        </button>
      </div>
    </div>
  );
}
