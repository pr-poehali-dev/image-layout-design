import { useNavigate } from "react-router-dom";
import LotBar from "@/components/LotBar";

type Variant = "guest" | "auth" | "pending" | "no-lots" | "approved";

interface Station {
  status: string;
  region: string;
  city: string;
  fullAddress: string;
  power: string;
  connectors: string;
  totalLots: number;
  availableLots: number;
  sessions: number;
  revenue: string;
  consumption: string;
}

interface StationRightColumnProps {
  station: Station;
  variant: Variant;
  onInvest: () => void;
}

export default function StationRightColumn({ station, variant, onInvest }: StationRightColumnProps) {
  const navigate = useNavigate();

  const availableLots =
    variant === "pending" ? 12
    : variant === "no-lots" || variant === "approved" ? 10
    : station.availableLots;

  const selectedLots = variant === "pending" || variant === "approved" ? 1 : 0;
  const ownedLots = variant === "no-lots" || variant === "approved" ? 3 : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Status card */}
      <div style={{ background: "#fff", borderRadius: 16, padding: "24px 28px" }}>
        <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>Статус станции</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", margin: "0 0 20px" }}>
          {station.status}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "Регион", value: station.region },
            { label: "Город", value: station.city },
            { label: "Адрес локации", value: station.fullAddress, full: true },
            { label: "Параметры станции", value: station.power },
            { label: "Коннекторы", value: station.connectors },
          ].map((field) => (
            <div
              key={field.label}
              style={{
                background: "#f9f9f9",
                borderRadius: 10,
                padding: "10px 14px",
                gridColumn: field.full ? "1 / -1" : undefined,
              }}
            >
              <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{field.label}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{field.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics card */}
      <div style={{ background: "#fff", borderRadius: 16, padding: "24px 28px" }}>
        <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>Показатели ЭЗС за 30 дней</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: variant === "guest" ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {(variant === "guest"
            ? [
                { label: "Количество сессий", value: String(station.sessions) },
                { label: "Выручка", value: station.revenue },
              ]
            : [
                { label: "Количество сессий", value: String(station.sessions) },
                { label: "Выручка", value: station.revenue },
                { label: "Потребление (кВт·ч)", value: station.consumption },
              ]
          ).map((m) => (
            <div
              key={m.label}
              style={{ background: "#f9f9f9", borderRadius: 10, padding: "12px 14px" }}
            >
              <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>{m.value}</div>
            </div>
          ))}
        </div>

        {variant === "approved" ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
              Последняя выплата не отображается до подтверждения лотов
            </div>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #ddd",
                borderRadius: 10,
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                color: "#111",
                whiteSpace: "nowrap",
              }}
            >
              Детализация
            </button>
          </div>
        ) : (
          <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
            {variant === "guest"
              ? "Для неавторизованных пользователей доступна только базовая информация по станции, ожидаемая доходность и агрегированная выручка за последние 30 дней"
              : variant === "pending" || variant === "no-lots"
              ? "По станции уже есть заявка, но она еще не прошла модерацию. Последняя выплата не отображается до подтверждения лотов"
              : "Вы авторизованы, но по этой станции у вас еще нет поданных заявок. Можно подать первую заявку на инвестирование"}
          </div>
        )}
      </div>

      {/* Lots card */}
      <div style={{ background: "#fff", borderRadius: 16, padding: "24px 28px" }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", margin: "0 0 16px" }}>
          Лоты для инвестирования
        </h3>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
          <span>Размещение лотов</span>
          <span>Доступно лотов {availableLots}/{station.totalLots}</span>
        </div>
        <LotBar
          total={station.totalLots}
          available={availableLots}
          selected={selectedLots}
          owned={ownedLots}
        />

        {variant === "guest" ? (
          <button
            style={{
              width: "100%",
              marginTop: 20,
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: 20,
              padding: "13px 0",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Golos Text', sans-serif",
            }}
          >
            Войти для инвестирования
          </button>
        ) : (
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button
              onClick={onInvest}
              style={{
                flex: 1,
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                padding: "12px 0",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
              }}
            >
              {variant === "auth" ? "Инвестировать" : "Инвестировать еще"}
            </button>
            <button
              onClick={() => navigate("/investments")}
              style={{
                flex: 1,
                background: "transparent",
                color: "#111",
                border: "1.5px solid #ddd",
                borderRadius: 20,
                padding: "12px 0",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
              }}
            >
              Мои инвестиции
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
