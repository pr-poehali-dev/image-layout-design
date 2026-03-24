const SESSIONS = [
  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
  { start: "2026-03-03 09:15", end: "2026-03-03 11:15", kwh: "34,6", revenue: "657" },
  { start: "2026-03-04 11:42", end: "2026-03-04 13:42", kwh: "41,2", revenue: "783" },
];

export default function StationSessionsTable() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "28px 48px",
        marginTop: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
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
              paddingRight: 32,
              fontSize: 13,
              color: "#111",
              fontFamily: "'Golos Text', sans-serif",
              background: "#fff",
              cursor: "pointer",
              appearance: "none",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
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

      <div style={{ borderRadius: 12, overflow: "hidden" }}>
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
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SESSIONS.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
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
  );
}
