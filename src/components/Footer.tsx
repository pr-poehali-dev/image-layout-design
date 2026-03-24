export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f5f5",
        borderTop: "1px solid var(--hyper-border)",
        fontFamily: "'Golos Text', sans-serif",
        marginTop: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        {/* Left */}
        <div>
          <div style={{ fontSize: 14, color: "#111", marginBottom: 4 }}>+7 (495) 150-40-15</div>
          <div style={{ fontSize: 14, color: "#111", marginBottom: 4 }}>connect@hyperhub.ru</div>
          <div style={{ fontSize: 14, color: "#111", marginBottom: 20 }}>Москва, пр-кт 60-летия октября, 10А</div>
          <div style={{ fontSize: 13, color: "#9ca3af" }}>© ООО «Оператор электродвижения», 2023</div>
        </div>

        {/* Right */}
        <div style={{ textAlign: "right" }}>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginBottom: 16 }}>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #ddd",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                color: "#111",
              }}
            >
              Hyper API
            </button>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #ddd",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                color: "#111",
              }}
            >
              Инвесторам
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            <a href="#" style={{ fontSize: 13, color: "#111", textDecoration: "none" }}>
              Политика конфиденциальности
            </a>
            <a href="#" style={{ fontSize: 13, color: "#111", textDecoration: "none" }}>
              Пользовательское соглашение
            </a>
            <a href="#" style={{ fontSize: 13, color: "#111", textDecoration: "none" }}>
              Обработка персональных данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
