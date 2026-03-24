interface LotBarProps {
  total: number;
  available: number;
  selected?: number;
}

export default function LotBar({ total, available, selected = 0 }: LotBarProps) {
  const taken = total - available;

  return (
    <div style={{ display: "flex", gap: 3, flexWrap: "nowrap", width: "100%" }}>
      {Array.from({ length: total }).map((_, i) => {
        let bg = "#e5e7eb";
        if (i < taken) bg = "#111";
        else if (selected > 0 && i < taken + selected) bg = "#d4a017";
        return (
          <div
            key={i}
            style={{
              height: 6,
              flex: 1,
              borderRadius: 3,
              background: bg,
              minWidth: 0,
            }}
          />
        );
      })}
    </div>
  );
}
