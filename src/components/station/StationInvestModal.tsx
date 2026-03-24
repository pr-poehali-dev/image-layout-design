import LotBar from "@/components/LotBar";

interface StationInvestModalProps {
  selectedLots: number;
  onChangeLots: (n: number) => void;
  onClose: () => void;
}

const LOT_PRICE = 100000;

export default function StationInvestModal({
  selectedLots,
  onChangeLots,
  onClose,
}: StationInvestModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "28px",
          width: 360,
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
          ТРЦ "Космос" · Московский проспект, 108
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#111", marginBottom: 16 }}>
          № 52345675
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 12,
            color: "#9ca3af",
            marginBottom: 6,
          }}
        >
          Доступно лотов 13/20
        </div>
        <LotBar total={20} available={13} selected={selectedLots} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            margin: "24px 0 16px",
          }}
        >
          <button
            onClick={() => onChangeLots(Math.max(1, selectedLots - 1))}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1.5px solid #ddd",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
            }}
          >
            −
          </button>
          <span style={{ fontSize: 15, color: "#111" }}>Добавить лот</span>
          <button
            onClick={() => onChangeLots(Math.min(13, selectedLots + 1))}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1.5px solid #ddd",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111",
            }}
          >
            +
          </button>
        </div>

        <div style={{ textAlign: "center", fontSize: 14, color: "#6b7280", marginBottom: 24 }}>
          Выбрано <strong style={{ color: "#111" }}>{selectedLots} лота</strong> на сумму:{" "}
          <strong style={{ color: "#111" }}>
            {(selectedLots * LOT_PRICE).toLocaleString("ru-RU")} ₽
          </strong>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              background: "transparent",
              border: "1.5px solid #ddd",
              borderRadius: 24,
              padding: "12px 0",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
              color: "#111",
            }}
          >
            Выйти
          </button>
          <button
            style={{
              flex: 1,
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 24,
              padding: "12px 0",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
            }}
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
