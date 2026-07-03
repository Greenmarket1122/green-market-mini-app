export default function App() {
  const products = [
    {
      id: 1,
      name: "Monster Energy",
      price: "30 000 UZS",
      image: "https://picsum.photos/300?1"
    },
    {
      id: 2,
      name: "Coca Cola",
      price: "14 000 UZS",
      image: "https://picsum.photos/300?2"
    }
  ];

  return (
    <div className="app">

      <header className="header">
        <h2>🥬 Green Market</h2>

        <input
          className="search"
          placeholder="Mahsulotlarni qidirish..."
        />
      </header>

      <div className="categories">
        <button>🥤 Ichimliklar</button>
        <button>🍫 Shirinliklar</button>
        <button>🥬 Sabzavotlar</button>
        <button>🍎 Mevalar</button>
      </div>

      <div className="banner">
        <h2>Chegirmalar</h2>
        <p>Bugungi aksiyalarni o'tkazib yubormang!</p>
      </div>

      <div className="products">

        {products.map((item) => (

          <div className="card" key={item.id}>

            <img src={item.image} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Savatga</button>

          </div>

        ))}

      </div>

    </div>
  );
}
