import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StationLeftCard from "@/components/station/StationLeftCard";
import StationRightColumn from "@/components/station/StationRightColumn";
import StationMyInvestments from "@/components/station/StationMyInvestments";
import StationSessionsTable from "@/components/station/StationSessionsTable";
import StationInvestModal from "@/components/station/StationInvestModal";

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

export type Variant = "guest" | "auth" | "pending" | "no-lots" | "approved";

export default function StationPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const stationId = id || STATION.id;

  const [showInvestModal, setShowInvestModal] = useState(false);
  const [selectedLots, setSelectedLots] = useState(2);
  const [variant, setVariant] = useState<Variant>("guest");

  const isLoggedIn = variant !== "guest";

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      {/* Dev variant switcher */}
      <div
        style={{
          background: "#f0f0f0",
          borderBottom: "1px solid #e0e0e0",
          padding: "6px 24px",
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 11, color: "#999", marginRight: 4 }}>
          Вариант:
        </span>
        {(["guest", "auth", "pending", "no-lots", "approved"] as Variant[]).map(
          (v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              style={{
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 12,
                border: "1px solid #ccc",
                cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif",
                background: variant === v ? "#111" : "#fff",
                color: variant === v ? "#fff" : "#555",
              }}
            >
              {v}
            </button>
          ),
        )}
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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: 0,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StationLeftCard stationId={stationId} address={STATION.address} />
          </div>
          <div style={{ flex: 1, minWidth: 0, minHeight: 0 }}>
            <StationRightColumn
              station={STATION}
              variant={variant}
              onInvest={() => setShowInvestModal(true)}
            />
          </div>
        </div>

        <StationMyInvestments variant={variant} />

        {(variant === "no-lots" || variant === "approved") && (
          <StationSessionsTable />
        )}
      </div>

      <Footer />

      {showInvestModal && (
        <StationInvestModal
          selectedLots={selectedLots}
          onChangeLots={setSelectedLots}
          onClose={() => setShowInvestModal(false)}
        />
      )}
    </div>
  );
}
