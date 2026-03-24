interface LotBarProps {
  total: number;
  available: number;
  selected?: number;
  owned?: number;
}

export default function LotBar({ total, available, selected = 0, owned = 0 }: LotBarProps) {
  const taken = total - available - owned;

  return (
    <div style={{ display: "flex", gap: 3, flexWrap: "nowrap", width: "100%" }}>
      {Array.from({ length: total }).map((_, i) => {
        let bg = "#e5e7eb";
        if (i < taken) bg = "#111";
        else if (i < taken + owned) bg = "#22c55e";
        else if (selected > 0 && i < taken + owned + selected) bg = "#d4a017";
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