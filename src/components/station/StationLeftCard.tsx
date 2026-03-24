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

      {/* Зона с фото: серая подложка внизу, изображение выступает вверх */}
      <div style={{ position: "relative", flex: 1, minHeight: 340 }}>
        {/* Серая подложка — занимает нижние ~65% области, отступы со всех сторон, скруглена */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: "30%",
            background: "#ebebeb",
            borderRadius: 12,
          }}
        />
        {/* Изображение — поверх подложки, прижато к низу */}
        <img
          src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/1b8350ff-bb4c-44f9-bc16-3eacc1c4b439.png"
          alt="Зарядная станция hyper"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "88%",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
