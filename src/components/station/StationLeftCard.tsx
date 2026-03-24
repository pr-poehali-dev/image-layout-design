interface StationLeftCardProps {
  stationId: string;
  address: string;
}

/** Отступ от верха медиа-блока до верхнего края серой подложки (ниже = больше белого над серым). */
const MEDIA_GREY_TOP = 100;
/**
 * Насколько «вынести» станцию вверх над серым: растёт масштаб (пропорции сохраняются).
 * Раньше меняли высоту обёртки — при contain по ширине это не влияло; теперь EXTRA → scale.
 */
const IMAGE_BREAKOUT_EXTRA = 72;
/** Базовый масштаб + вклад EXTRA (потолок — чтобы не разъезжалось за карточку). */
const STATION_IMAGE_SCALE = Math.min(1.82, 1.12 + IMAGE_BREAKOUT_EXTRA / 160);
/** Ширина колонки с фото в % контента (до scale). */
const IMAGE_BASE_WIDTH_PCT = 88;

export default function StationLeftCard({
  stationId,
  address,
}: StationLeftCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        flex: 1,
        minHeight: 0,
        overflow: "visible",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
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

      <div style={{ fontSize: 13, color: "#9ca3af" }}>{address}</div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0%",
          minHeight: 380,
          marginTop: 12,
          overflow: "visible",
        }}
      >
        <div style={{ flex: 1, minHeight: 0 }} aria-hidden />
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: MEDIA_GREY_TOP,
            background: "#ebebeb",
            borderRadius: 20,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: `${IMAGE_BASE_WIDTH_PCT}%`,
            maxWidth: "100%",
            zIndex: 1,
            pointerEvents: "none",
            textAlign: "center",
            lineHeight: 0,
          }}
        >
          <img
            src="https://cdn.poehali.dev/projects/c36f0d06-fe77-43d5-8bbe-0e5118d187fb/bucket/1b8350ff-bb4c-44f9-bc16-3eacc1c4b439.png"
            alt="Зарядная станция hyper"
            style={{
              width: "100%",
              height: "auto",
              display: "inline-block",
              verticalAlign: "bottom",
              transform: `scale(${STATION_IMAGE_SCALE})`,
              transformOrigin: "bottom center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
