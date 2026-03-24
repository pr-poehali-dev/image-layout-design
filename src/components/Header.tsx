import { useNavigate } from "react-router-dom";

interface HeaderProps {
  page?: "main" | "station" | "investments" | "home";
  userName?: string;
  userPhone?: string;
  isLoggedIn?: boolean;
}

export default function Header({ page = "main", userName, userPhone, isLoggedIn = false }: HeaderProps) {
  const navigate = useNavigate();

  const pageLabel: Record<string, string> = {
    main: "Инвестиции в зарядные станции",
    station: "Карточка станции",
    investments: "Карточка станции",
    home: "",
  };

  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid var(--hyper-border)",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* Left: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <div
            style={{
              width: 3,
              height: 36,
              background: "#111",
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111", lineHeight: 1.2 }}>Hyper Invest</div>
            <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.2 }}>{pageLabel[page]}</div>
          </div>
        </div>

        {/* Center: logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/21f32e5d-2c53-47f0-a107-067ea96566d6.png"
            alt="hyper"
            style={{ height: 22, display: "block" }}
          />
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#111",
              letterSpacing: -0.5,
            }}
          >
            Investments
          </span>
        </div>

        {/* Right: user / actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {isLoggedIn && userName && (
            <div style={{ textAlign: "right", marginRight: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{userName}</div>
              <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.3 }}>{userPhone}</div>
            </div>
          )}
          {isLoggedIn && (
            <button
              onClick={() => navigate("/investments")}
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Мои инвестиции
            </button>
          )}
          <button
            style={{
              background: "transparent",
              color: "#111",
              border: "1.5px solid #ddd",
              borderRadius: 20,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
            }}
          >
            {isLoggedIn ? "Выйти" : "Войти"}
          </button>
        </div>
      </div>
    </header>
  );
}