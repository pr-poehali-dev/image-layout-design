import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LotBar from "@/components/LotBar";

const STATION = {
  id: "22345672",
  number: "22345672",
  address: "ул. Воронцово Поле · ул. Воронцово Поле, 16, стр. 1",
  status: "Ведется набор инвестиций",
  region: "Москва",
  city: "Москва",
  fullAddress: "ул. Воронцово Поле, 16с1",
  power: "150 кВт · Быстрая DC",
  connectors: "1 CCS · 1 GBT",
  totalLots: 20,
  availableLots: 13,
  sessions: 200,
  revenue: "684 000 ₽",
  consumption: "12 840",
};

type Variant = "guest" | "auth" | "pending" | "no-lots" | "approved";

export default function StationPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const stationId = id || STATION.id;

  const [showInvestModal, setShowInvestModal] = useState(false);
  const [selectedLots, setSelectedLots] = useState(2);
  const [variant, setVariant] = useState<Variant>("guest");

  const lotPrice = 100000;
  const isLoggedIn = variant !== "guest";

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", fontFamily: "'Golos Text', sans-serif" }}>
      {/* Dev variant switcher */}
      <div style={{ background: "#f0f0f0", borderBottom: "1px solid #e0e0e0", padding: "6px 24px", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, color: "#999", marginRight: 4 }}>Вариант:</span>
        {(["guest", "auth", "pending", "no-lots", "approved"] as Variant[]).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 12,
              border: "1px solid #ccc", cursor: "pointer", fontFamily: "'Golos Text', sans-serif",
              background: variant === v ? "#111" : "#fff",
              color: variant === v ? "#fff" : "#555",
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <Header
        page="station"
        userName={isLoggedIn ? "Рома Роман" : undefined}
        userPhone={isLoggedIn ? "+7 (9**) ***-**-**" : undefined}
        isLoggedIn={isLoggedIn}
      />

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Breadcrumb */}
        <div style={{ padding: "16px 0" }}>
          <button
            onClick={() => navigate("/main")}
            style={{
              background: "none",
              border: "none",
              fontSize: 13,
              color: "#6b7280",
              cursor: "pointer",
              padding: 0,
              fontFamily: "'Golos Text', sans-serif",
            }}
          >
            ← Назад к списку проектов
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Left card */}
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

            <div style={{ fontSize: 13, color: "#9ca3af" }}>{STATION.address}</div>

            {/* Station photo */}
            <div
              style={{
                background: "#e8e8e8",
                borderRadius: 12,
                overflow: "hidden",
                flex: 1,
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/1b8350ff-bb4c-44f9-bc16-3eacc1c4b439.png"
                alt="Зарядная станция hyper"
                style={{ width: "100%", display: "block", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Status card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "24px 28px",
              }}
            >
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>Статус станции</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", margin: "0 0 20px" }}>
                {STATION.status}
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { label: "Регион", value: STATION.region },
                  { label: "Город", value: STATION.city },
                  { label: "Адрес локации", value: STATION.fullAddress, full: true },
                  { label: "Параметры станции", value: STATION.power },
                  { label: "Коннекторы", value: STATION.connectors },
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
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "24px 28px",
              }}
            >
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>Показатели ЭЗС за 30 дней</div>

              <div style={{ display: "grid", gridTemplateColumns: variant === "guest" ? "1fr 1fr" : "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
                {(variant === "guest"
                  ? [
                      { label: "Количество сессий", value: String(STATION.sessions) },
                      { label: "Выручка", value: STATION.revenue },
                    ]
                  : [
                      { label: "Количество сессий", value: String(STATION.sessions) },
                      { label: "Выручка", value: STATION.revenue },
                      { label: "Потребление (кВт·ч)", value: STATION.consumption },
                    ]
                ).map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: "#f9f9f9",
                      borderRadius: 10,
                      padding: "12px 14px",
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#111" }}>{m.value}</div>
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
                      borderRadius: 20,
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
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "24px 28px",
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", margin: "0 0 16px" }}>
                Лоты для инвестирования
              </h3>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                <span>Размещение лотов</span>
                <span>Доступно лотов {variant === "pending" ? 12 : (variant === "no-lots" || variant === "approved") ? 10 : STATION.availableLots}/{STATION.totalLots}</span>
              </div>
              <LotBar
                total={STATION.totalLots}
                available={variant === "pending" ? 12 : (variant === "no-lots" || variant === "approved") ? 10 : STATION.availableLots}
                selected={variant === "pending" ? 1 : variant === "approved" ? 1 : 0}
                owned={variant === "no-lots" || variant === "approved" ? 3 : 0}
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
                  onClick={() => setShowInvestModal(true)}
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
        </div>

        {/* My investments block */}
        {variant !== "guest" && <div
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
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 24px" }}>
            {variant === "pending" || variant === "no-lots" || variant === "approved"
              ? "Здесь отображается состояние заявки до подписания договора и подтверждения оплаты"
              : "В этом блоке отображается ваш статус по станции, когда вы подаете заявки и покупаете лоты"}
          </p>

          {variant === "approved" ? (
            <>
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                {[
                  { label: "Лотов в заявке", value: "1 лот" },
                  { label: "Лотов куплено", value: "3 лота" },
                  { label: "Объем инвестиций", value: "300 000 ₽" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "#f9f9f9",
                      borderRadius: 10,
                      padding: "14px 20px",
                      minWidth: 140,
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
                Мы ожидаем завершения проверки документов и подтверждения оплаты. После этого лоты перейдут в подтвержденный статус и откроется детализация по сессиям
              </div>
            </>
          ) : variant === "pending" ? (
            <>
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                {[
                  { label: "Статус заявки", value: "На модерации" },
                  { label: "Лотов на модерации", value: "1 лот" },
                  { label: "Объем инвестиций", value: "100 000 ₽" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "#f9f9f9",
                      borderRadius: 10,
                      padding: "14px 20px",
                      minWidth: 140,
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
                Мы ожидаем завершения проверки документов и подтверждения оплаты. После этого лоты перейдут в подтвержденный статус и откроется детализация по сессиям
              </div>
            </>
          ) : variant === "no-lots" ? (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { label: "Лотов куплено", value: "3 лота" },
                { label: "Объем инвестиций", value: "300 000 ₽" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#f9f9f9",
                    borderRadius: 10,
                    padding: "14px 20px",
                    minWidth: 160,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>{item.value}</div>
                </div>
              ))}
            </div>
          ) : (
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
        </div>}

        {/* Sessions table — no-lots & approved variants */}
        {(variant === "no-lots" || variant === "approved") && (
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "28px 32px",
              marginTop: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111", margin: 0 }}>
                Детализация зарядных сессий
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>Период выгрузки</span>
                <select
                  style={{
                    border: "1.5px solid #e5e7eb",
                    borderRadius: 20,
                    padding: "8px 14px",
                    fontSize: 13,
                    color: "#111",
                    fontFamily: "'Golos Text', sans-serif",
                    background: "#fff",
                    cursor: "pointer",
                    appearance: "none",
                    paddingRight: 32,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                  }}
                  defaultValue="april"
                >
                  <option value="april">Апрель, 2026</option>
                  <option value="march">Март, 2026</option>
                  <option value="february">Февраль, 2026</option>
                </select>
                <button
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    padding: "9px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Golos Text', sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  Скачать детализацию CSV
                </button>
              </div>
            </div>

            <div style={{ border: "1px solid #d1d5db", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  {["Дата старта", "Дата завершения", "Потребление, кВт·ч", "Выручка, ₽"].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "8px 16px",
                        textAlign: "center",
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#111",
                        whiteSpace: "nowrap",
                        borderTop: "1px solid #d1d5db",
                        borderBottom: "1px solid #d1d5db",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
                  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
                  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
                  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
                  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
                  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #d1d5db" }}>
                    {[row.start, row.end, row.kwh, row.revenue].map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "7px 16px",
                          textAlign: "center",
                          fontSize: 13,
                          color: "#111",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>

      <Footer />

      {/* Invest Modal */}
      {showInvestModal && (
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
          onClick={(e) => e.target === e.currentTarget && setShowInvestModal(false)}
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

            <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
              Доступно лотов 13/20
            </div>
            <LotBar total={20} available={13} selected={selectedLots} />

            {/* Lot selector */}
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
                onClick={() => setSelectedLots(Math.max(1, selectedLots - 1))}
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
                onClick={() => setSelectedLots(Math.min(13, selectedLots + 1))}
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
                {(selectedLots * lotPrice).toLocaleString("ru-RU")} ₽
              </strong>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setShowInvestModal(false)}
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
      )}
    </div>
  );
}