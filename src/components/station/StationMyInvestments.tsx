type Variant = "guest" | "auth" | "pending" | "no-lots" | "approved";

interface StationMyInvestmentsProps {
  variant: Variant;
}

const cardStyle = {
  background: "#f9f9f9",
  borderRadius: 10,
  padding: "14px 20px",
  minWidth: 140,
};

export default function StationMyInvestments({ variant }: StationMyInvestmentsProps) {
  if (variant === "guest") return null;

  const subtitle =
    variant === "pending" || variant === "no-lots" || variant === "approved"
      ? "Здесь отображается состояние заявки до подписания договора и подтверждения оплаты"
      : "В этом блоке отображается ваш статус по станции, когда вы подаете заявки и покупаете лоты";

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "32px",
        marginTop: 20,
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111", margin: "0 0 8px" }}>
        Мои инвестиции по станции
      </h2>
      <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 24px" }}>{subtitle}</p>

      {variant === "approved" && (
        <>
          <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { label: "Лотов в заявке", value: "1 лот" },
              { label: "Лотов куплено", value: "3 лота" },
              { label: "Объем инвестиций", value: "300 000 ₽" },
            ].map((item) => (
              <div key={item.label} style={cardStyle}>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
            Мы ожидаем завершения проверки документов и подтверждения оплаты. После этого лоты перейдут в подтвержденный статус и откроется детализация по сессиям
          </div>
        </>
      )}

      {variant === "pending" && (
        <>
          <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { label: "Статус заявки", value: "На модерации" },
              { label: "Лотов на модерации", value: "1 лот" },
              { label: "Объем инвестиций", value: "100 000 ₽" },
            ].map((item) => (
              <div key={item.label} style={cardStyle}>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
            Мы ожидаем завершения проверки документов и подтверждения оплаты. После этого лоты перейдут в подтвержденный статус и откроется детализация по сессиям
          </div>
        </>
      )}

      {variant === "no-lots" && (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { label: "Лотов куплено", value: "3 лота" },
            { label: "Объем инвестиций", value: "300 000 ₽" },
          ].map((item) => (
            <div key={item.label} style={{ ...cardStyle, minWidth: 160 }}>
              <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>{item.value}</div>
            </div>
          ))}
        </div>
      )}

      {variant === "auth" && (
        <div
          style={{
            background: "#f9f9f9",
            borderRadius: 10,
            padding: "16px 20px",
            display: "inline-block",
            minWidth: 220,
          }}
        >
          <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>Статус заявки</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>Заявок по станции пока нет</div>
        </div>
      )}
    </div>
  );
}
