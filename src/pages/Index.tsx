import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "'Golos Text', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 48,
        }}
      >
        <span style={{ fontSize: 28, fontWeight: 800, color: "#111" }}>ⓔ hyper</span>
        <span style={{ fontSize: 28, fontWeight: 400, color: "#111" }}>Investments</span>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "48px 56px",
          textAlign: "center",
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#111",
            margin: "0 0 12px",
          }}
        >
          Платформа инвестиций
          <br />в зарядные станции
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "#9ca3af",
            margin: "0 0 36px",
            lineHeight: 1.6,
          }}
        >
          Выберите раздел для просмотра
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button
            onClick={() => navigate("/main")}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 20,
              padding: "14px 0",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
              width: "100%",
            }}
          >
            Список станций и карта
          </button>

          <button
            onClick={() => navigate("/station/22345672")}
            style={{
              background: "transparent",
              color: "#111",
              border: "1.5px solid #ddd",
              borderRadius: 20,
              padding: "14px 0",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
              width: "100%",
            }}
          >
            Карточка станции
          </button>

          <button
            onClick={() => navigate("/investments")}
            style={{
              background: "transparent",
              color: "#111",
              border: "1.5px solid #ddd",
              borderRadius: 20,
              padding: "14px 0",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
              width: "100%",
            }}
          >
            Мои инвестиции
          </button>
        </div>
      </div>

      <div style={{ fontSize: 12, color: "#c4c4c4", marginTop: 32 }}>
        © ООО «Оператор электродвижения», 2023
      </div>
    </div>
  );
}
