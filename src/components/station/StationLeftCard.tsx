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
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Верхняя часть с текстом — с паддингами */}
      <div style={{ padding: "28px 28px 12px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
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
      </div>

      {/* Серая подложка: отступы по бокам, скруглена сверху, касается низа карточки */}
      <div style={{ padding: "0 16px", flex: 1, display: "flex" }}>
        <div
          style={{
            background: "#ebebeb",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/1b8350ff-bb4c-44f9-bc16-3eacc1c4b439.png"
            alt="Зарядная станция hyper"
            style={{ width: "100%", display: "block", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
