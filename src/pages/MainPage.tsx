import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LotBar from "@/components/LotBar";

const STATIONS = [
  {
    id: "12345671",
    status: "active",
    statusLabel: "Ведется набор инвестиций",
    city: "Москва",
    region: "Москва",
    address: "ул. Воронцово Поле · ул. Воронцово Поле, 16, стр. 1",
    power: "150 кВт · Быстрая DC",
    connectors: "1 CCS · 1 GBT",
    lotPrice: "100 000 Р",
    totalLots: 20,
    availableLots: 8,
  },
  {
    id: "22345672",
    status: "done",
    statusLabel: "Завершено",
    city: "Нижний Новгород",
    region: "Нижегородская обл.",
    address: 'ТЦ "Мега" · с. Федяково, ул. Любкина, 1',
    power: "120 кВт · Быстрая DC",
    connectors: "1 CCS · 1 GBT",
    lotPrice: "100 000 Р",
    totalLots: 20,
    availableLots: 0,
  },
  {
    id: "32345673",
    status: "paused",
    statusLabel: "Приостановлено",
    city: "Нижний Новгород",
    region: "Нижегородская обл.",
    address: "ул. Труда · ул. Труда, 203, подземный паркинг",
    power: "90 кВт · Быстрая DC",
    connectors: "1 CCS · 1 GBT",
    lotPrice: "100 000 Р",
    totalLots: 20,
    availableLots: 13,
  },
  {
    id: "42345674",
    status: "active",
    statusLabel: "Ведется набор инвестиций",
    city: "Москва",
    region: "Москва",
    address: "ул. Воронцово Поле · ул. Воронцово Поле, 16, стр. 1",
    power: "180 кВт · Быстрая DC",
    connectors: "1 CCS · 1 GBT",
    lotPrice: "100 000 Р",
    totalLots: 20,
    availableLots: 5,
  },
  {
    id: "52345675",
    status: "active",
    statusLabel: "Ведется набор инвестиций",
    city: "Ярославль",
    region: "Ярославская обл.",
    address: 'ТРЦ "Космос" · Московский проспект, 108',
    power: "60 кВт · Быстрая DC",
    connectors: "1 CCS · 1 GBT",
    lotPrice: "100 000 Р",
    totalLots: 20,
    availableLots: 20,
  },
  {
    id: "62345676",
    status: "soon",
    statusLabel: "Анонс",
    city: "Ярославль",
    region: "Ярославская обл.",
    address: 'ТРЦ "Космос" · Московский проспект, 108',
    power: "—",
    connectors: "—",
    lotPrice: "—",
    totalLots: 20,
    availableLots: 20,
    isAnon: true,
  },
];

const CITIES = ["Все города", "Москва", "Нижний Новгород", "Ярославль"];
const STATUSES = [
  { value: "all", label: "Все статусы" },
  { value: "active", label: "Ведется набор инвестиций" },
  { value: "done", label: "Завершено" },
  { value: "paused", label: "Приостановлено" },
  { value: "soon", label: "Анонс" },
];

const STATUS_COLORS: Record<string, string> = {
  active: "#111",
  done: "#6b7280",
  paused: "#6b7280",
  soon: "#6b7280",
};

interface MapPopup {
  id: string;
  x: number;
  y: number;
}

export default function MainPage() {
  const navigate = useNavigate();
  const [city, setCity] = useState("Все города");
  const [status, setStatus] = useState("all");
  const [popup, setPopup] = useState<MapPopup | null>(null);

  const filtered = STATIONS.filter((s) => {
    const cityOk = city === "Все города" || s.city === city;
    const statusOk = status === "all" || s.status === status;
    return cityOk && statusOk;
  });

  const popupStation = popup ? STATIONS.find((s) => s.id === popup.id) : null;

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", fontFamily: "'Golos Text', sans-serif" }}>
      <Header page="main" />

      {/* Hero */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 36px",
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 32,
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              Инвестируйте в станции
              <br />и получайте долю от выручки
            </h1>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 8px", lineHeight: 1.5 }}>
              Вы выбираете станцию на карте или в списке, инвестируете от{" "}
              <strong style={{ color: "#111" }}>100 000 Р</strong>
            </p>
            <p style={{ fontSize: 14, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>
              и получаете долю <strong style={{ color: "#111" }}>gross-выручки</strong> по условиям оферты
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, minWidth: 300 }}>
            {[
              { label: "Проектов", value: "5" },
              { label: "Доступно лотов", value: "46" },
              { label: "Ожидаемая доходность", value: "57% IRR" },
              { label: "Минимальная стоимость лота", value: "500 000 Р" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#f9f9f9",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll arrow */}
        <div style={{ textAlign: "center", padding: "20px 0 8px", color: "#9ca3af", fontSize: 13 }}>
          <div style={{ fontSize: 18, marginBottom: 4 }}>∨</div>
          Перейти к списку станций
        </div>

        {/* Map section */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "28px 32px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#111", margin: "0 0 4px" }}>
                Карта проектов
              </h2>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>
                Кликните по точке — откроется краткая карточка станции с переходом к подробной информации
              </p>
            </div>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #ddd",
                borderRadius: 20,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                color: "#111",
                whiteSpace: "nowrap",
              }}
            >
              Развернуть карту
            </button>
          </div>

          {/* Map placeholder */}
          <div
            style={{
              position: "relative",
              height: 320,
              borderRadius: 12,
              overflow: "hidden",
              background: "#e8e8e0",
            }}
          >
            {/* Fake map tiles pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(180,185,170,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(180,185,170,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 30% 60%, rgba(200,210,190,0.6) 0%, transparent 60%), radial-gradient(ellipse at 70% 40%, rgba(210,200,185,0.4) 0%, transparent 50%)",
              }}
            />
            {/* Map label */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "rgba(255,255,255,0.8)",
                borderRadius: 6,
                padding: "4px 10px",
                fontSize: 12,
                color: "#6b7280",
              }}
            >
              OpenStreetMap
            </div>

            {/* Station pins */}
            {[
              { id: "12345671", x: 42, y: 52 },
              { id: "52345675", x: 72, y: 38 },
            ].map((pin) => (
              <div
                key={pin.id}
                onClick={() => setPopup(popup?.id === pin.id ? null : { id: pin.id, x: pin.x, y: pin.y })}
                style={{
                  position: "absolute",
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "#111",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    fontSize: 14,
                  }}
                >
                  ⚡
                </div>
              </div>
            ))}

            {/* Popup */}
            {popup && popupStation && (
              <div
                style={{
                  position: "absolute",
                  left: `${Math.min(popup.x + 3, 55)}%`,
                  top: `${Math.max(popup.y - 5, 2)}%`,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "20px",
                  minWidth: 280,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 4,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>{popupStation.statusLabel}</div>
                  <button
                    onClick={() => setPopup(null)}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: 16,
                      cursor: "pointer",
                      color: "#9ca3af",
                      lineHeight: 1,
                      padding: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>{popupStation.city}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 4 }}>
                  № {popupStation.id}
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>{popupStation.address}</div>
                {[
                  { label: "Параметры станции", value: popupStation.power },
                  { label: "Коннекторы", value: popupStation.connectors },
                  { label: "Стоимость лота", value: popupStation.lotPrice },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ color: "#9ca3af" }}>{row.label}</span>
                    <span style={{ fontWeight: 500, color: "#111" }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ margin: "12px 0 4px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>
                    <span>Размещение лотов</span>
                    <span>Доступно лотов {popupStation.availableLots}/{popupStation.totalLots}</span>
                  </div>
                  <LotBar total={popupStation.totalLots} available={popupStation.availableLots} />
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                  <button
                    onClick={() => navigate(`/station/${popupStation.id}`)}
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 0",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                    }}
                  >
                    Подробнее
                  </button>
                  <button
                    style={{
                      flex: 1,
                      background: "#111",
                      border: "none",
                      borderRadius: 20,
                      padding: "9px 0",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#fff",
                    }}
                  >
                    Инвестировать
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filters */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "24px 32px",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#111", marginBottom: 4 }}>Фильтры</div>
              <div style={{ fontSize: 13, color: "#9ca3af" }}>
                Выберите город и статус, чтобы отфильтровать список станций ниже
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Город</div>
                <div style={{ position: "relative" }}>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      appearance: "none",
                      background: "#fff",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 40px 9px 16px",
                      fontSize: 13,
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                      cursor: "pointer",
                      minWidth: 160,
                    }}
                  >
                    {CITIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6b7280" }}>
                    ∨
                  </span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Статус</div>
                <div style={{ position: "relative" }}>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{
                      appearance: "none",
                      background: "#fff",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 40px 9px 16px",
                      fontSize: 13,
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                      cursor: "pointer",
                      minWidth: 160,
                    }}
                  >
                    {STATUSES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6b7280" }}>
                    ∨
                  </span>
                </div>
              </div>
              <div style={{ paddingTop: 20 }}>
                <button
                  onClick={() => { setCity("Все города"); setStatus("all"); }}
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    padding: "9px 20px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Golos Text', sans-serif",
                  }}
                >
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Station list */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20 }}>Список станций</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {filtered.map((station) => (
              <div
                key={station.id}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                }}
              >
                {station.isAnon && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 16,
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 64,
                        fontWeight: 900,
                        color: "rgba(0,0,0,0.07)",
                        letterSpacing: -4,
                        userSelect: "none",
                      }}
                    >
                      ₽4₽
                    </div>
                  </div>
                )}

                <div
                  style={{
                    fontSize: 11,
                    color: STATUS_COLORS[station.status],
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {station.statusLabel}
                </div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2 }}>
                  {station.region} · {station.city}
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 4 }}>
                  № {station.id}
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>{station.address}</div>

                {[
                  { label: "Параметры станции", value: station.power },
                  { label: "Коннекторы", value: station.connectors },
                  { label: "Стоимость лота", value: station.lotPrice },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      padding: "8px 0",
                      borderTop: "1px solid #f0f0f0",
                    }}
                  >
                    <span style={{ color: "#9ca3af" }}>{row.label}</span>
                    <span style={{ fontWeight: 500, color: "#111" }}>{row.value}</span>
                  </div>
                ))}

                <div style={{ marginTop: 12, marginBottom: 4 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      color: "#9ca3af",
                      marginBottom: 6,
                    }}
                  >
                    <span>Размещение лотов</span>
                    <span>
                      Доступно лотов {station.availableLots}/{station.totalLots}
                    </span>
                  </div>
                  <LotBar total={station.totalLots} available={station.availableLots} />
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                  <button
                    onClick={() => navigate(`/station/${station.id}`)}
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "10px 0",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                    }}
                  >
                    Подробнее
                  </button>
                  <button
                    style={{
                      flex: 1,
                      background: "#111",
                      border: "none",
                      borderRadius: 20,
                      padding: "10px 0",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#fff",
                    }}
                  >
                    Инвестировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
