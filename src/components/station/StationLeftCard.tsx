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
        padding: "28px",
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

      {/* Station photo */}
      <div
        style={{
          background: "#111",
          borderRadius: 12,
          height: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #111 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            gap: 12,
            alignItems: "flex-end",
            padding: "20px 30px",
          }}
        >
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: n === 2 ? 180 : 160,
                  background: n === 2 ? "#4ade80" : "#3b82f6",
                  borderRadius: 4,
                  opacity: 0.9,
                }}
              />
              <div style={{ color: "#fff", fontSize: 11, opacity: 0.6 }}>
                {n === 1 ? "CCS 2" : n === 2 ? "GB/T" : "CCS 2"}
              </div>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 11,
                }}
              >
                {n}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
            opacity: 0.9,
          }}
        >
          ⓔ hyper
        </div>
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 20,
            color: "#fff",
            fontSize: 12,
            opacity: 0.6,
          }}
        >
          № 12345
        </div>
      </div>
    </div>
  );
}
