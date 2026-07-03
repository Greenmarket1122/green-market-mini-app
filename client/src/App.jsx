export default function App() {
  return (
    <div
      style={{
        background: "#f7f7f7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#0B8F3A",
          color: "white",
          padding: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px"
        }}
      >
        <h2 style={{ margin: 0 }}>🥬 Green Market</h2>
        <p style={{ marginTop: 5 }}>Har kuni yangi mahsulotlar</p>
      </div>

      {/* Search */}
      <div style={{ padding: 15 }}>
        <input
          type="text"
          placeholder="Mahsulot qidirish..."
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "1px solid #ddd",
            fontSize: 16
          }}
        />
      </div>

      {/* Categories */}
      <div
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          padding: "0 15px"
        }}
      >
        <button>🥤 Ichimliklar</button>
        <button>🥩 Go'sht</button>
        <button>🥛 Sut</button>
        <button>🍎 Mevalar</button>
        <button>🥬 Sabzavotlar</button>
      </div>

      {/* Products */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 15,
          padding: 15
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 15,
            padding: 15,
            textAlign: "center"
          }}
        >
          <img
            src="https://picsum.photos/200"
            style={{ width: "100%", borderRadius: 10 }}
          />
          <h3>Olma</h3>
          <p>18 000 so'm</p>
          <button
            style={{
              background: "#0B8F3A",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: 10
            }}
          >
            Savatga
          </button>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 15,
            padding: 15,
            textAlign: "center"
          }}
        >
          <img
            src="https://picsum.photos/201"
            style={{ width: "100%", borderRadius: 10 }}
          />
          <h3>Banan</h3>
          <p>27 000 so'm</p>
          <button
            style={{
              background: "#0B8F3A",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: 10
            }}
          >
            Savatga
          </button>
        </div>
      </div>
    </div>
  );
}
