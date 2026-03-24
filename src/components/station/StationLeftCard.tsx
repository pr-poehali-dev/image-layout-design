interface StationLeftCardProps {
  stationId: string;
  address: string;
}

/** Отступ от верха медиа-блока до верхнего края серой подложки. */
const MEDIA_GREY_TOP = 100;
/**
 * Ширина «логического» блока станции относительно медиа (= ширина серой подложки): clamp по % и px,
 * чтобы на широком окне не залезать на правую колонку, на узком не схлопываться.
 */
const IMAGE_SHARE_OF_GREY_PCT = 93;
const IMAGE_MAX_WIDTH_PX = 352;
const IMAGE_MIN_WIDTH_PX = 148;
/** Масштаб от низа: вылет верха над серым; ~1.25 обычно ок для двух колонок до ~1080px контента. */
const STATION_VISUAL_SCALE = 1.24;

export default function StationLeftCard({
  stationId,
  address,
}: StationLeftCardProps) {
  const imageWidth = `min(100%, max(${IMAGE_MIN_WIDTH_PX}px, min(${IMAGE_MAX_WIDTH_PX}px, ${IMAGE_SHARE_OF_GREY_PCT}%)))`;

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
            width: imageWidth,
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
              transform: `scale(${STATION_VISUAL_SCALE})`,
              transformOrigin: "bottom center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
