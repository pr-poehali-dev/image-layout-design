interface StationLeftCardProps {
  stationId: string;
  address: string;
}

export default function StationLeftCard({ stationId, address }: StationLeftCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#111", margin: 0 }}>
          № {stationId}
        </h1>
        <button
          style={{
            background: "transparent",
            border: "1.5px solid #ddd",
            borderRadius: 20,
            padding: "9px 20px",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "'Golos Text', sans-serif",
            color: "#111",
            whiteSpace: "nowrap",
          }}
        >
          Посмотреть на карте
        </button>
      </div>

      <div style={{ fontSize: 13, color: "#9ca3af" }}>{address}</div>

      {/* Зона с фото: изображение в потоке, подложка за ним позиционирована абсолютно */}
      <div style={{ position: "relative", marginTop: 4 }}>
        {/* Серая подложка — нижние ~65% зоны, с отступами, скруглена */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
            top: "35%",
            background: "#ebebeb",
            borderRadius: 20,
          }}
        />
        {/* Изображение — в потоке документа, задаёт высоту контейнера */}
        <img
          src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/1b8350ff-bb4c-44f9-bc16-3eacc1c4b439.png"
          alt="Зарядная станция hyper"
          style={{
            position: "relative",
            width: "80%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
}