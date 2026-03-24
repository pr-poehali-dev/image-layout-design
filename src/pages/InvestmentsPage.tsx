import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const INVESTMENTS = [
  {
    id: "12345678",
    city: "Москва",
    district: "ЗАО",
    name: "Воронцово поле",
    lots: "3 / 20",
    payStatus: "paid",
    payLabel: "Оплачено",
    consumption: "12 480 кВт·ч",
    revenue: "948 000",
  },
  {
    id: "12345678",
    city: "Москва",
    district: "ЗАО",
    name: "Воронцово поле",
    lots: "1 / 20",
    payStatus: "pending",
    payLabel: "Ожидает",
    consumption: "12 480 кВт·ч",
    revenue: "948 000",
  },
  {
    id: "12345678",
    city: "Москва",
    district: "ЗАО",
    name: "Воронцово поле",
    lots: "2 / 20",
    payStatus: "paid",
    payLabel: "Оплачено",
    consumption: "12 480 кВт·ч",
    revenue: "948 000",
  },
  {
    id: "12345678",
    city: "Москва",
    district: "ЗАО",
    name: "Воронцово поле",
    lots: "1 / 20",
    payStatus: "error",
    payLabel: "Ошибка",
    consumption: "12 480 кВт·ч",
    revenue: "948 000",
  },
];

const PERIODS = ["Апрель, 2026", "Март, 2026", "Февраль, 2026", "Январь, 2026"];
const PAY_STATUSES = [
  { value: "all", label: "Все" },
  { value: "paid", label: "Оплачено" },
  { value: "pending", label: "Ожидает" },
  { value: "error", label: "Ошибка" },
];

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  paid: { bg: "#d1fae5", color: "#065f46" },
  pending: { bg: "#fef9c3", color: "#854d0e" },
  error: { bg: "#fee2e2", color: "#991b1b" },
};

export default function InvestmentsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("Апрель, 2026");
  const [payStatus, setPayStatus] = useState("all");

  const filtered = INVESTMENTS.filter((inv) => {
    const searchOk =
      search === "" ||
      inv.name.toLowerCase().includes(search.toLowerCase()) ||
      inv.city.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.includes(search);
    const statusOk = payStatus === "all" || inv.payStatus === payStatus;
    return searchOk && statusOk;
  });

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", fontFamily: "'Golos Text', sans-serif" }}>
      <Header page="investments" userName="Рома Роман" userPhone="+7 (9**) ***-**-**" isLoggedIn />

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
            ← Назад на главную страницу
          </button>
        </div>

        {/* Summary card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px",
            marginBottom: 20,
          }}
        >
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#111", margin: "0 0 12px" }}>
            Мои инвестиции
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", maxWidth: 540, lineHeight: 1.6 }}>
            Здесь отображаются станции, по которым у вас есть подтверждённые лоты, и агрегированные
            показатели потребления (в MVP — примерные значения). В проде данные приходят из MDM
            (лоты/статусы) и Charge (трафик).
          </p>

          <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>
            Показатели в текущем месяце
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { label: "Количество сессий", value: "1 732" },
              { label: "Выручка", value: "684 000 ₽" },
              { label: "Потребление (кВт·ч)", value: "120 840" },
              { label: "Средняя сессия (кВт·ч/сессию)", value: "20.5" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: "#f9f9f9",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stations table */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px",
            marginBottom: 32,
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 24,
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>
                Станции
              </h2>
              <div style={{ fontSize: 13, color: "#9ca3af" }}>Найдено: {filtered.length}</div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
              {/* Search */}
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Поиск по станции</div>
                <div style={{ position: "relative" }}>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Название / город / район"
                    style={{
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 16px 9px 16px",
                      fontSize: 13,
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                      background: "#fff",
                      outline: "none",
                      minWidth: 220,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#9ca3af",
                      pointerEvents: "none",
                    }}
                  >
                    ∨
                  </span>
                </div>
              </div>

              {/* Period */}
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Период</div>
                <div style={{ position: "relative" }}>
                  <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    style={{
                      appearance: "none",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 40px 9px 16px",
                      fontSize: 13,
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                      background: "#fff",
                      cursor: "pointer",
                      minWidth: 150,
                    }}
                  >
                    {PERIODS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#6b7280" }}>
                    ∨
                  </span>
                </div>
              </div>

              {/* Pay status */}
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>Статус оплаты</div>
                <div style={{ position: "relative" }}>
                  <select
                    value={payStatus}
                    onChange={(e) => setPayStatus(e.target.value)}
                    style={{
                      appearance: "none",
                      border: "1.5px solid #ddd",
                      borderRadius: 20,
                      padding: "9px 40px 9px 16px",
                      fontSize: 13,
                      fontFamily: "'Golos Text', sans-serif",
                      color: "#111",
                      background: "#fff",
                      cursor: "pointer",
                      minWidth: 120,
                    }}
                  >
                    {PAY_STATUSES.map((s) => (
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

              <button
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
                  whiteSpace: "nowrap",
                }}
                onClick={() => navigate("/main")}
              >
                Инвестировать ещё
              </button>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Станция", "Лоты", "Статус оплаты", "Потребление", "Выручка, ₽", "Действия"].map(
                  (col) => (
                    <th
                      key={col}
                      style={{
                        textAlign: col === "Станция" ? "left" : "center",
                        padding: "10px 12px",
                        fontSize: 13,
                        color: "#9ca3af",
                        fontWeight: 400,
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((inv, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: i < filtered.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>
                      {inv.city} · {inv.district} · №{inv.id}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>{inv.name}</div>
                  </td>
                  <td style={{ padding: "14px 12px", textAlign: "center", fontSize: 14, color: "#111", fontWeight: 500 }}>
                    {inv.lots}
                  </td>
                  <td style={{ padding: "14px 12px", textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 14px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 500,
                        background: STATUS_STYLE[inv.payStatus].bg,
                        color: STATUS_STYLE[inv.payStatus].color,
                      }}
                    >
                      {inv.payLabel}
                    </span>
                  </td>
                  <td style={{ padding: "14px 12px", textAlign: "center", fontSize: 14, color: "#111" }}>
                    {inv.consumption}
                  </td>
                  <td style={{ padding: "14px 12px", textAlign: "center", fontSize: 14, color: "#111" }}>
                    {inv.revenue}
                  </td>
                  <td style={{ padding: "14px 12px", textAlign: "center" }}>
                    <button
                      onClick={() => navigate(`/station/${inv.id}`)}
                      style={{
                        background: "transparent",
                        border: "1.5px solid #ddd",
                        borderRadius: 20,
                        padding: "7px 18px",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontFamily: "'Golos Text', sans-serif",
                        color: "#111",
                      }}
                    >
                      Подробнее
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}