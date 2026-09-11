import { useState } from "react";

const COLORS = {
  bg: "#f9fffd",
  primary: "#0002f7",
  cardBlue: "#eaf1fd",
  mintAccent: "#ddfdfc",
  yellowAccent: "#fffdbd",
  textMuted: "#3b4659",
  white: "#f9fffd",
};

// --- Design System ---

function PillToggle({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        border: `1px solid ${COLORS.primary}`,
        borderRadius: 60,
        overflow: "hidden",
      }}
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            padding: "6px 12px",
            background: active === opt ? COLORS.primary : "transparent",
            color: active === opt ? COLORS.white : COLORS.primary,
            border: "none",
            cursor: "pointer",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: active === opt ? 500 : 400,
            fontSize: 16,
            letterSpacing: "-0.16px",
            lineHeight: 1.2,
            borderRadius: active === opt ? 50 : 0,
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function OutlineButton({
  children,
  onClick,
  accent = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  accent?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        background: accent ? COLORS.mintAccent : "transparent",
        border: `1px solid ${COLORS.primary}`,
        borderRadius: 60,
        color: COLORS.primary,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: "-0.16px",
        lineHeight: 1.2,
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = accent
          ? "#c5faf8"
          : COLORS.mintAccent)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = accent
          ? COLORS.mintAccent
          : "transparent")
      }
    >
      {children}
    </button>
  );
}

function YellowButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        background: COLORS.yellowAccent,
        border: `1px solid ${COLORS.primary}`,
        borderRadius: 60,
        color: COLORS.primary,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: "-0.16px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f9a0")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = COLORS.yellowAccent)
      }
    >
      {children}
    </button>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "14px 32px",
        background: disabled ? COLORS.textMuted : COLORS.primary,
        border: "none",
        borderRadius: 100,
        color: COLORS.white,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: "-0.16px",
        cursor: disabled ? "default" : "pointer",
        whiteSpace: "nowrap",
        transition: "opacity 0.2s",
        textTransform: "uppercase",
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.opacity = "0.85";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      {children}
    </button>
  );
}

function SearchPrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "24px 48px",
        background: COLORS.primary,
        border: "none",
        borderRadius: 100,
        color: COLORS.white,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: "-0.16px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "opacity 0.2s",
        textTransform: "uppercase",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}

function BarRow({
  label,
  value,
  max,
  display,
}: {
  label: string;
  value: number;
  max: number;
  display: string | number;
}) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 24, width: "100%" }}
    >
      <span
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 14,
          color: COLORS.textMuted,
          textTransform: "uppercase",
          letterSpacing: "-0.14px",
          width: 108,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, position: "relative", height: 8 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: `1px solid ${COLORS.primary}`,
            borderRadius: 50,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${pct}%`,
            background: COLORS.primary,
            borderRadius: 50,
            transition: "width 0.6s ease",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 14,
          color: COLORS.textMuted,
          textAlign: "right",
          textTransform: "uppercase",
          letterSpacing: "-0.14px",
          width: 30,
          flexShrink: 0,
        }}
      >
        {display}
      </span>
    </div>
  );
}

function ConditionTile({
  emoji,
  label,
  value,
  unit,
}: {
  emoji: string;
  label: string;
  value: string | number;
  unit: string;
}) {
  return (
    <div
      style={{
        background: COLORS.cardBlue,
        borderRadius: 24,
        padding: 24,
        minWidth: 150,
        flex: "1 1 140px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <span style={{ fontSize: 36 }}>{emoji}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 14,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            letterSpacing: "-0.14px",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 48,
            color: COLORS.primary,
            lineHeight: 1,
            letterSpacing: "-0.54px",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 14,
            color: COLORS.textMuted,
            letterSpacing: "-0.14px",
          }}
        >
          {unit}
        </span>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        background: COLORS.primary,
        opacity: 0.2,
      }}
    />
  );
}

// --- Report Modal ---
const CONDITION_OPTIONS = [
  "🤙 Epic",
  "👍 Good",
  "😐 Average",
  "👎 Poor",
  "🚫 Dangerous",
];
const CROWD_OPTIONS = ["Empty", "Quiet", "Moderate", "Busy", "Packed"];

function ReportModal({
  location,
  onClose,
  onSubmit,
}: {
  location: string;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const [condition, setCondition] = useState("");
  const [crowd, setCrowd] = useState("");
  const [note, setNote] = useState("");

  const canSubmit = condition !== "" && crowd !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,2,247,0.15)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: COLORS.bg,
          border: `1px solid ${COLORS.primary}`,
          borderRadius: 24,
          padding: 48,
          maxWidth: 520,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "-0.13px",
                color: COLORS.textMuted,
              }}
            >
              Report Conditions
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 28,
                color: COLORS.primary,
                lineHeight: 1,
              }}
            >
              {location}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.primary}`,
              borderRadius: 60,
              width: 36,
              height: 36,
              cursor: "pointer",
              color: COLORS.primary,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>

        {/* Condition */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "-0.14px",
              color: COLORS.textMuted,
            }}
          >
            How are the waves?
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CONDITION_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setCondition(opt)}
                style={{
                  padding: "8px 16px",
                  background:
                    condition === opt ? COLORS.primary : "transparent",
                  color: condition === opt ? COLORS.white : COLORS.primary,
                  border: `1px solid ${COLORS.primary}`,
                  borderRadius: 60,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Crowd */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "-0.14px",
              color: COLORS.textMuted,
            }}
          >
            How's the crowd?
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CROWD_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setCrowd(opt)}
                style={{
                  padding: "8px 16px",
                  background: crowd === opt ? COLORS.primary : "transparent",
                  color: crowd === opt ? COLORS.white : COLORS.primary,
                  border: `1px solid ${COLORS.primary}`,
                  borderRadius: 60,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "-0.14px",
              color: COLORS.textMuted,
            }}
          >
            Anything else? (optional)
          </p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Glassy in the morning, getting choppy now..."
            rows={3}
            style={{
              width: "100%",
              padding: 16,
              border: `1px solid ${COLORS.primary}`,
              borderRadius: 16,
              background: COLORS.cardBlue,
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 15,
              color: COLORS.primary,
              resize: "none",
              outline: "none",
              letterSpacing: "-0.15px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Submit */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
          <OutlineButton onClick={onClose}>Cancel</OutlineButton>
          <PrimaryButton onClick={handleSubmit} disabled={!canSubmit}>
            Submit Report
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

// --- Success Toast ---
function Toast({ message }: { message: string }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        background: COLORS.primary,
        color: COLORS.white,
        borderRadius: 60,
        padding: "14px 28px",
        zIndex: 300,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 16,
        letterSpacing: "-0.16px",
        boxShadow: "0 8px 32px rgba(0,2,247,0.25)",
        whiteSpace: "nowrap",
      }}
    >
      {message}
    </div>
  );
}

// --- Haversine ---
function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// --- Location Data ---
type Location = {
  lat: number;
  lon: number;
  coords: string;
  rating: number;
  label: string;
  recommend: string;
  recommendEmoji: string;
  recommendSub: string;
  recommendNote: string;
  waveHeight: { val: number; max: number; unit: string };
  period: { val: number; max: number };
  windDir: string;
  windDeg: string;
  windSpeed: { val: number; max: number };
  airTemp: number;
  swellHeight: { val: number; max: number };
};

const LOCATIONS: Record<string, Location> = {
  "Pipeline, Oahu": {
    lat: 21.664,
    lon: -158.052,
    coords: "21.664°, -158.052°",
    rating: 8,
    label: "Epic Conditions",
    recommend: "PADDLE OUT",
    recommendEmoji: "🤙",
    recommendSub: "Conditions fairly consistent all day",
    recommendNote: "Excellent conditions right now. Go get it!",
    waveHeight: { val: 5.1, max: 12, unit: "ft (1.5m)" },
    period: { val: 12, max: 20 },
    windDir: "SSE",
    windDeg: "159°",
    windSpeed: { val: 10, max: 40 },
    airTemp: 79,
    swellHeight: { val: 4.2, max: 12 },
  },
  "Mavericks, CA": {
    lat: 37.493,
    lon: -122.502,
    coords: "37.493°, -122.502°",
    rating: 6,
    label: "Solid Conditions",
    recommend: "IT'S ON",
    recommendEmoji: "🏄",
    recommendSub: "Big swell, experienced surfers only",
    recommendNote: "Heavy but rewarding for the skilled.",
    waveHeight: { val: 8.3, max: 12, unit: "ft (2.5m)" },
    period: { val: 15, max: 20 },
    windDir: "NW",
    windDeg: "315°",
    windSpeed: { val: 18, max: 40 },
    airTemp: 58,
    swellHeight: { val: 7.1, max: 12 },
  },
  "Bondi Beach, AU": {
    lat: -33.891,
    lon: 151.277,
    coords: "-33.891°, 151.277°",
    rating: 4,
    label: "Average Conditions",
    recommend: "WORTH A TRY",
    recommendEmoji: "🤷",
    recommendSub: "Choppy with light offshore wind",
    recommendNote: "OK for beginners, not great for pros.",
    waveHeight: { val: 2.1, max: 12, unit: "ft (0.6m)" },
    period: { val: 8, max: 20 },
    windDir: "ENE",
    windDeg: "70°",
    windSpeed: { val: 12, max: 40 },
    airTemp: 75,
    swellHeight: { val: 1.8, max: 12 },
  },
  "Nazaré, Portugal": {
    lat: 39.602,
    lon: -9.071,
    coords: "39.602°, -9.071°",
    rating: 9,
    label: "Legendary",
    recommend: "TOW IN ONLY",
    recommendEmoji: "🚁",
    recommendSub: "Monster swell — experts with tow teams",
    recommendNote: "Historic swell. Record territory possible.",
    waveHeight: { val: 11.5, max: 12, unit: "ft (35m)" },
    period: { val: 18, max: 20 },
    windDir: "W",
    windDeg: "270°",
    windSpeed: { val: 28, max: 40 },
    airTemp: 62,
    swellHeight: { val: 10.8, max: 12 },
  },
  "Trestles, CA": {
    lat: 33.381,
    lon: -117.589,
    coords: "33.381°, -117.589°",
    rating: 7,
    label: "Great Conditions",
    recommend: "GO SURF",
    recommendEmoji: "🔥",
    recommendSub: "Clean lines, fun for all levels",
    recommendNote: "One of the best days this week.",
    waveHeight: { val: 3.8, max: 12, unit: "ft (1.2m)" },
    period: { val: 11, max: 20 },
    windDir: "W",
    windDeg: "280°",
    windSpeed: { val: 8, max: 40 },
    airTemp: 72,
    swellHeight: { val: 3.2, max: 12 },
  },
  "Uluwatu, Bali": {
    lat: -8.829,
    lon: 115.085,
    coords: "-8.829°, 115.085°",
    rating: 8,
    label: "Epic Conditions",
    recommend: "PADDLE OUT",
    recommendEmoji: "🤙",
    recommendSub: "Pumping reef break, intermediate+",
    recommendNote: "Sunrise session will be magic.",
    waveHeight: { val: 4.5, max: 12, unit: "ft (1.4m)" },
    period: { val: 13, max: 20 },
    windDir: "SE",
    windDeg: "135°",
    windSpeed: { val: 9, max: 40 },
    airTemp: 86,
    swellHeight: { val: 3.9, max: 12 },
  },
  "J-Bay, South Africa": {
    lat: -34.048,
    lon: 24.924,
    coords: "-34.048°, 24.924°",
    rating: 9,
    label: "Legendary",
    recommend: "DREAM SESSION",
    recommendEmoji: "🏆",
    recommendSub: "World-class righthand point break firing",
    recommendNote: "One of the best point breaks on Earth going off.",
    waveHeight: { val: 6.2, max: 12, unit: "ft (1.9m)" },
    period: { val: 16, max: 20 },
    windDir: "SW",
    windDeg: "225°",
    windSpeed: { val: 14, max: 40 },
    airTemp: 64,
    swellHeight: { val: 5.8, max: 12 },
  },
  "Hossegor, France": {
    lat: 43.666,
    lon: -1.432,
    coords: "43.666°, -1.432°",
    rating: 7,
    label: "Great Conditions",
    recommend: "GO SURF",
    recommendEmoji: "🔥",
    recommendSub: "Heavy beach break, solid swell",
    recommendNote: "Pro tour quality barrels today.",
    waveHeight: { val: 5.0, max: 12, unit: "ft (1.5m)" },
    period: { val: 12, max: 20 },
    windDir: "NE",
    windDeg: "45°",
    windSpeed: { val: 11, max: 40 },
    airTemp: 68,
    swellHeight: { val: 4.6, max: 12 },
  },
  "Snapper Rocks, AU": {
    lat: -28.003,
    lon: 153.432,
    coords: "-28.003°, 153.432°",
    rating: 8,
    label: "Epic Conditions",
    recommend: "PADDLE OUT",
    recommendEmoji: "🤙",
    recommendSub: "The Superbank is working",
    recommendNote: "Long rides on offer. Get in early to beat the crowds.",
    waveHeight: { val: 4.0, max: 12, unit: "ft (1.2m)" },
    period: { val: 14, max: 20 },
    windDir: "S",
    windDeg: "180°",
    windSpeed: { val: 7, max: 40 },
    airTemp: 77,
    swellHeight: { val: 3.5, max: 12 },
  },
  "Cloudbreak, Fiji": {
    lat: -17.812,
    lon: 177.178,
    coords: "-17.812°, 177.178°",
    rating: 10,
    label: "Perfect",
    recommend: "ONCE IN A LIFETIME",
    recommendEmoji: "🌊",
    recommendSub: "Firing on all cylinders — advanced only",
    recommendNote: "You might never see it this good again.",
    waveHeight: { val: 8.0, max: 12, unit: "ft (2.4m)" },
    period: { val: 17, max: 20 },
    windDir: "SE",
    windDeg: "148°",
    windSpeed: { val: 13, max: 40 },
    airTemp: 84,
    swellHeight: { val: 7.2, max: 12 },
  },
  "Santa Cruz, CA": {
    lat: 36.951,
    lon: -122.026,
    coords: "36.951°, -122.026°",
    rating: 5,
    label: "Decent Conditions",
    recommend: "GIVE IT A GO",
    recommendEmoji: "🤔",
    recommendSub: "Inconsistent sets but some fun ones",
    recommendNote: "Worth checking Steamer Lane.",
    waveHeight: { val: 3.0, max: 12, unit: "ft (0.9m)" },
    period: { val: 9, max: 20 },
    windDir: "NW",
    windDeg: "305°",
    windSpeed: { val: 15, max: 40 },
    airTemp: 61,
    swellHeight: { val: 2.5, max: 12 },
  },
  "Taghazout, Morocco": {
    lat: 30.545,
    lon: -9.708,
    coords: "30.545°, -9.708°",
    rating: 6,
    label: "Solid Conditions",
    recommend: "WORTH IT",
    recommendEmoji: "🏄",
    recommendSub: "Anchor Point doing its thing",
    recommendNote: "Long walls, consistent lines.",
    waveHeight: { val: 4.2, max: 12, unit: "ft (1.3m)" },
    period: { val: 11, max: 20 },
    windDir: "NE",
    windDeg: "30°",
    windSpeed: { val: 10, max: 40 },
    airTemp: 73,
    swellHeight: { val: 3.7, max: 12 },
  },
  "Ocean Beach, SF": {
    lat: 37.771,
    lon: -122.51,
    coords: "37.771°, -122.510°",
    rating: 6,
    label: "Solid Conditions",
    recommend: "KNOW BEFORE YOU GO",
    recommendEmoji: "⚠️",
    recommendSub: "Powerful beach break — no beginners",
    recommendNote: "Heavy shore pound today. Respect the currents.",
    waveHeight: { val: 5.5, max: 12, unit: "ft (1.7m)" },
    period: { val: 13, max: 20 },
    windDir: "NW",
    windDeg: "310°",
    windSpeed: { val: 20, max: 40 },
    airTemp: 57,
    swellHeight: { val: 4.9, max: 12 },
  },
  "Linda Mar, Pacifica": {
    lat: 37.608,
    lon: -122.496,
    coords: "37.608°, -122.496°",
    rating: 4,
    label: "Mellow Conditions",
    recommend: "GOOD FOR BEGINNERS",
    recommendEmoji: "🤙",
    recommendSub: "Soft and forgiving — ideal for learning",
    recommendNote: "Great day to bring the foamie.",
    waveHeight: { val: 2.5, max: 12, unit: "ft (0.8m)" },
    period: { val: 8, max: 20 },
    windDir: "W",
    windDeg: "270°",
    windSpeed: { val: 11, max: 40 },
    airTemp: 59,
    swellHeight: { val: 2.0, max: 12 },
  },
  "Half Moon Bay": {
    lat: 37.494,
    lon: -122.448,
    coords: "37.494°, -122.448°",
    rating: 6,
    label: "Solid Conditions",
    recommend: "PADDLE OUT",
    recommendEmoji: "🏄",
    recommendSub: "Consistent west swell, light wind",
    recommendNote: "Kelp Bay and Jetty both working.",
    waveHeight: { val: 4.0, max: 12, unit: "ft (1.2m)" },
    period: { val: 12, max: 20 },
    windDir: "NW",
    windDeg: "300°",
    windSpeed: { val: 13, max: 40 },
    airTemp: 60,
    swellHeight: { val: 3.5, max: 12 },
  },
  Bolinas: {
    lat: 37.908,
    lon: -122.682,
    coords: "37.908°, -122.682°",
    rating: 5,
    label: "Decent Conditions",
    recommend: "WORTH THE DRIVE",
    recommendEmoji: "🤔",
    recommendSub: "Mellow point — good for longboards",
    recommendNote: "Locals are chill if you respect the vibe.",
    waveHeight: { val: 2.8, max: 12, unit: "ft (0.9m)" },
    period: { val: 10, max: 20 },
    windDir: "NW",
    windDeg: "315°",
    windSpeed: { val: 9, max: 40 },
    airTemp: 61,
    swellHeight: { val: 2.3, max: 12 },
  },
  "Stinson Beach": {
    lat: 37.893,
    lon: -122.641,
    coords: "37.893°, -122.641°",
    rating: 3,
    label: "Slow Day",
    recommend: "BEACH DAY",
    recommendEmoji: "☀️",
    recommendSub: "Soft, protected — better for swimming",
    recommendNote: "Fun on a foamie but don't expect pumping surf.",
    waveHeight: { val: 1.8, max: 12, unit: "ft (0.5m)" },
    period: { val: 7, max: 20 },
    windDir: "W",
    windDeg: "265°",
    windSpeed: { val: 7, max: 40 },
    airTemp: 63,
    swellHeight: { val: 1.4, max: 12 },
  },
  "Bodega Bay": {
    lat: 38.332,
    lon: -123.044,
    coords: "38.332°, -123.044°",
    rating: 7,
    label: "Great Conditions",
    recommend: "GO SURF",
    recommendEmoji: "🔥",
    recommendSub: "Powerful and uncrowded — bring your 5/4",
    recommendNote: "Cold but worth it. Doran Beach is firing.",
    waveHeight: { val: 5.0, max: 12, unit: "ft (1.5m)" },
    period: { val: 14, max: 20 },
    windDir: "NNW",
    windDeg: "340°",
    windSpeed: { val: 16, max: 40 },
    airTemp: 54,
    swellHeight: { val: 4.4, max: 12 },
  },
  "Fort Bragg": {
    lat: 39.446,
    lon: -123.81,
    coords: "39.446°, -123.810°",
    rating: 7,
    label: "Great Conditions",
    recommend: "WORTH THE TREK",
    recommendEmoji: "🌲",
    recommendSub: "Remote, raw, and uncrowded — just how we like it",
    recommendNote: "Glass Point is pumping. Dress warm.",
    waveHeight: { val: 5.8, max: 12, unit: "ft (1.8m)" },
    period: { val: 15, max: 20 },
    windDir: "NW",
    windDeg: "320°",
    windSpeed: { val: 14, max: 40 },
    airTemp: 52,
    swellHeight: { val: 5.2, max: 12 },
  },
  "Steamer Lane, Santa Cruz": {
    lat: 36.953,
    lon: -122.029,
    coords: "36.953°, -122.029°",
    rating: 8,
    label: "Epic Conditions",
    recommend: "PADDLE OUT",
    recommendEmoji: "🤙",
    recommendSub: "The Lane is on — competitive lineup today",
    recommendNote:
      "Middle Peak and The Slot both going. Early dawn patrol recommended.",
    waveHeight: { val: 4.8, max: 12, unit: "ft (1.5m)" },
    period: { val: 13, max: 20 },
    windDir: "NW",
    windDeg: "308°",
    windSpeed: { val: 10, max: 40 },
    airTemp: 62,
    swellHeight: { val: 4.1, max: 12 },
  },
  "Pleasure Point, Santa Cruz": {
    lat: 36.96,
    lon: -121.975,
    coords: "36.960°, -121.975°",
    rating: 7,
    label: "Great Conditions",
    recommend: "GO SURF",
    recommendEmoji: "🔥",
    recommendSub: "Long righthand walls, great for longboards",
    recommendNote: "38th Ave through 36th Ave all working.",
    waveHeight: { val: 3.8, max: 12, unit: "ft (1.2m)" },
    period: { val: 12, max: 20 },
    windDir: "NW",
    windDeg: "300°",
    windSpeed: { val: 8, max: 40 },
    airTemp: 63,
    swellHeight: { val: 3.3, max: 12 },
  },
};

const SUGGESTIONS = [
  "My Location",
  "Pipeline, Oahu",
  "Uluwatu, Bali",
  "J-Bay, South Africa",
  "Cloudbreak, Fiji",
];

export default function WavvvyApp() {
  const [unit, setUnit] = useState("Imperial");
  const [viewMode, setViewMode] = useState("Full");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("Pipeline, Oahu");
  const [reported, setReported] = useState(false);
  const [page, setPage] = useState<"home" | "results">("home");
  const [geoStatus, setGeoStatus] = useState<"idle" | "loading" | "error">(
    "idle"
  );
  const [showReportModal, setShowReportModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const searchResults =
    searchQuery.trim().length > 0
      ? Object.keys(LOCATIONS).filter((l) =>
          l.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  const data = LOCATIONS[currentLocation];

  const displayTemp =
    unit === "Imperial"
      ? `${data.airTemp}`
      : `${Math.round(((data.airTemp - 32) * 5) / 9)}`;
  const displayTempUnit = unit === "Imperial" ? "°F" : "°C";
  const displayWave =
    unit === "Imperial"
      ? `${data.waveHeight.val}`
      : `${(data.waveHeight.val * 0.3048).toFixed(1)}`;
  const displayWaveUnit =
    unit === "Imperial"
      ? data.waveHeight.unit
      : data.waveHeight.unit.replace(/ft.*/, "m");
  const displaySpeed =
    unit === "Imperial"
      ? `${data.windSpeed.val}`
      : `${Math.round(data.windSpeed.val * 1.609)}`;
  const displaySpeedUnit = unit === "Imperial" ? "mph" : "km/h";
  const displaySwell =
    unit === "Imperial"
      ? `${data.swellHeight.val}`
      : `${(data.swellHeight.val * 0.3048).toFixed(1)}`;

  const handleSearch = (overrideLoc?: string) => {
    const q = overrideLoc ?? searchQuery;
    const match = Object.keys(LOCATIONS).find((l) =>
      l.toLowerCase().includes(q.toLowerCase())
    );
    if (match) {
      setCurrentLocation(match);
      setReported(false);
      setSearchQuery("");
      setPage("results");
    }
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus("error");
      return;
    }
    setGeoStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let nearest = Object.keys(LOCATIONS)[0];
        let minDist = Infinity;
        for (const name of Object.keys(LOCATIONS)) {
          const loc = LOCATIONS[name];
          const dist = getDistanceKm(latitude, longitude, loc.lat, loc.lon);
          if (dist < minDist) {
            minDist = dist;
            nearest = name;
          }
        }
        setGeoStatus("idle");
        setCurrentLocation(nearest);
        setReported(false);
        setPage("results");
      },
      () => setGeoStatus("error")
    );
  };

  const handleReportSubmit = () => {
    setShowReportModal(false);
    setReported(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Work+Sans:wght@300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus, textarea:focus { outline: none; }
        button { outline: none; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #0002f7; border-radius: 3px; }
      `}</style>

      {showReportModal && (
        <ReportModal
          location={currentLocation}
          onClose={() => setShowReportModal(false)}
          onSubmit={handleReportSubmit}
        />
      )}

      {showToast && <Toast message="🤙 Thanks for the report!" />}

      <div
        style={{
          minHeight: "100vh",
          background: COLORS.bg,
          fontFamily: "'Work Sans', sans-serif",
          color: COLORS.primary,
        }}
      >
        {/* HEADER */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: COLORS.bg,
            padding: "24px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid rgba(0,2,247,0.15)`,
          }}
        >
          <button
            onClick={() => setPage("home")}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 33,
              color: COLORS.primary,
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.5px",
            }}
          >
            WAVVVY
          </button>
          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {page === "results" && (
              <OutlineButton onClick={() => setPage("home")}>
                ← Search
              </OutlineButton>
            )}
            <PillToggle
              options={["Metric", "Imperial"]}
              active={unit}
              onChange={setUnit}
            />
          </nav>
        </header>

        {page === "home" ? (
          <main
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "80px 24px 120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 48,
            }}
          >
            {/* Hero */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "-0.14px",
                }}
              >
                Real-time wave forecast
              </p>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 8vw, 80px)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Read the wavVVes
              </h1>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 18,
                  letterSpacing: "-0.18px",
                  lineHeight: 1.5,
                }}
              >
                The first community driven wave tracker
                <br />
                with no bullsh*t and paywalls.
              </p>
            </div>

            {/* Search */}
            <div
              style={{
                width: "100%",
                maxWidth: 580,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", position: "relative" }}>
                {/* Search bar — radius always 60, never changes */}
                <div
                  style={{
                    width: "100%",
                    background: COLORS.cardBlue,
                    border: `1px solid ${COLORS.primary}`,
                    borderRadius: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                  }}
                >
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                      if (e.key === "Escape") setSearchQuery("");
                    }}
                    placeholder="Search for a beach or city..."
                    style={{
                      flex: 1,
                      padding: "24px",
                      background: "transparent",
                      border: "none",
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 16,
                      color: COLORS.primary,
                      letterSpacing: "-0.16px",
                    }}
                  />
                  <SearchPrimaryButton onClick={() => handleSearch()}>
                    Search
                  </SearchPrimaryButton>
                </div>

                {/* Dropdown floats below with a gap */}
                {searchResults.length > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      right: 0,
                      background: COLORS.bg,
                      border: `1px solid ${COLORS.primary}`,
                      borderRadius: 20,
                      overflow: "hidden",
                      zIndex: 50,
                      boxShadow: "0 8px 24px rgba(0,2,247,0.12)",
                    }}
                  >
                    {searchResults.map((loc, i) => (
                      <button
                        key={loc}
                        onClick={() => handleSearch(loc)}
                        style={{
                          width: "100%",
                          padding: "14px 24px",
                          background: "transparent",
                          border: "none",
                          borderTop:
                            i > 0 ? `1px solid rgba(0,2,247,0.1)` : "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          transition: "background 0.15s",
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: 16,
                          color: COLORS.primary,
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = COLORS.cardBlue)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <span>{loc}</span>
                        <span
                          style={{
                            fontSize: 13,
                            color: COLORS.textMuted,
                            letterSpacing: "-0.13px",
                          }}
                        >
                          {LOCATIONS[loc].rating}/10 · {LOCATIONS[loc].label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {geoStatus === "error" && (
                <p
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  Location access was denied. Please allow it in your browser
                  and try again.
                </p>
              )}

              {/* Suggestion pills */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {SUGGESTIONS.map((s, i) => (
                  <OutlineButton
                    key={s}
                    accent={i === 0}
                    onClick={() => {
                      if (s === "My Location") {
                        handleMyLocation();
                      } else {
                        handleSearch(s);
                      }
                    }}
                  >
                    {s === "My Location" && geoStatus === "loading"
                      ? "Locating..."
                      : s}
                  </OutlineButton>
                ))}
              </div>
            </div>

            {/* Spot tiles */}
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {Object.keys(LOCATIONS).map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setCurrentLocation(loc);
                    setReported(false);
                    setPage("results");
                  }}
                  style={{
                    background: COLORS.cardBlue,
                    border: `1px solid ${COLORS.primary}`,
                    borderRadius: 16,
                    padding: "12px 20px",
                    cursor: "pointer",
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 13,
                    color: COLORS.primary,
                    textTransform: "uppercase",
                    letterSpacing: "-0.13px",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = COLORS.mintAccent;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = COLORS.cardBlue;
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {LOCATIONS[loc].rating}/10 · {loc}
                </button>
              ))}
            </div>
          </main>
        ) : (
          <main
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "48px 48px 120px",
              display: "flex",
              flexDirection: "column",
              gap: 48,
            }}
          >
            {/* Location Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <p
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: "-0.14px",
                  }}
                >
                  Current Conditions
                </p>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(36px, 5vw, 54px)",
                    lineHeight: 1,
                  }}
                >
                  {currentLocation}
                </h2>
                <p
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: "-0.14px",
                    color: COLORS.textMuted,
                  }}
                >
                  {data.coords} · Updated now
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <OutlineButton
                  onClick={() => {
                    if (!reported) setShowReportModal(true);
                  }}
                >
                  {reported ? "✓ Reported!" : "Report Condition"}
                </OutlineButton>
                <PillToggle
                  options={["Simple", "Full"]}
                  active={viewMode}
                  onChange={setViewMode}
                />
              </div>
            </div>

            <Divider />

            {/* Recommendation Card */}
            <div
              style={{
                background: COLORS.primary,
                borderRadius: 24,
                padding: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <span style={{ fontSize: 96, lineHeight: 0.7 }}>
                  {data.recommendEmoji}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    color: "white",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: "-0.14px",
                    }}
                  >
                    Should you Surf?
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 4vw, 42px)",
                      lineHeight: 1,
                    }}
                  >
                    {data.recommend}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 16,
                      letterSpacing: "-0.16px",
                    }}
                  >
                    {data.recommendSub}
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 16,
                  color: COLORS.mintAccent,
                  letterSpacing: "-0.16px",
                  textAlign: "right",
                  lineHeight: 1.5,
                }}
              >
                {data.recommendNote}
              </p>
            </div>

            {/* Surf Rating */}
            {viewMode === "Full" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <p
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: "-0.14px",
                  }}
                >
                  Surf Rating
                </p>
                <div
                  style={{
                    background: COLORS.cardBlue,
                    borderRadius: 24,
                    padding: 48,
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(80px, 12vw, 144px)",
                      color: COLORS.primary,
                      letterSpacing: "-1.44px",
                      lineHeight: 0.7,
                      flexShrink: 0,
                    }}
                  >
                    {data.rating}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 30,
                        textTransform: "uppercase",
                        color: COLORS.primary,
                      }}
                    >
                      {data.label}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        width: "100%",
                      }}
                    >
                      <BarRow
                        label="Wave Height"
                        value={data.waveHeight.val}
                        max={data.waveHeight.max}
                        display={displayWave}
                      />
                      <BarRow
                        label="Period"
                        value={data.period.val}
                        max={data.period.max}
                        display={data.period.val}
                      />
                      <BarRow
                        label="Wind"
                        value={data.windSpeed.val}
                        max={data.windSpeed.max}
                        display={displaySpeed}
                      />
                      <BarRow
                        label="Swell"
                        value={data.swellHeight.val}
                        max={data.swellHeight.max}
                        display={displaySwell}
                      />
                    </div>
                    <Divider />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: 16,
                          color: COLORS.textMuted,
                          letterSpacing: "-0.16px",
                        }}
                      >
                        {reported
                          ? "Thanks for your report! 🤙"
                          : "No local reports yet, be the first!"}
                      </p>
                      {!reported && (
                        <YellowButton onClick={() => setShowReportModal(true)}>
                          Report Conditions
                        </YellowButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conditions Tiles */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "-0.14px",
                }}
              >
                Conditions
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <ConditionTile
                  emoji="🌊"
                  label="Wave Height"
                  value={displayWave}
                  unit={displayWaveUnit}
                />
                <ConditionTile
                  emoji="⏱️"
                  label="Wave Period"
                  value={data.period.val}
                  unit="seconds"
                />
                <ConditionTile
                  emoji="🧭"
                  label="Wind Dir"
                  value={data.windDir}
                  unit={data.windDeg}
                />
                <ConditionTile
                  emoji="💨"
                  label="Wind Speed"
                  value={displaySpeed}
                  unit={displaySpeedUnit}
                />
                <ConditionTile
                  emoji="🌡"
                  label="Air Temp"
                  value={displayTemp}
                  unit={displayTempUnit}
                />
                <ConditionTile
                  emoji="🌀"
                  label="Swell Height"
                  value={displaySwell}
                  unit={unit === "Imperial" ? "ft" : "m"}
                />
              </div>
            </div>

            {/* Explore */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Divider />
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "-0.14px",
                }}
              >
                Explore Other Spots
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {Object.keys(LOCATIONS)
                  .filter((l) => l !== currentLocation)
                  .map((loc) => (
                    <OutlineButton
                      key={loc}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setReported(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {LOCATIONS[loc].rating}/10 · {loc}
                    </OutlineButton>
                  ))}
              </div>
            </div>
          </main>
        )}

        <footer
          style={{
            borderTop: `1px solid rgba(0,2,247,0.15)`,
            padding: "40px 48px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  textTransform: "uppercase",
                  color: COLORS.primary,
                }}
              >
                WAVVVY
              </span>
              <span
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 14,
                  color: COLORS.textMuted,
                  letterSpacing: "-0.14px",
                }}
              >
                Community-powered · No paywalls · Ever
              </span>
            </div>

            {/* Sources */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "-0.13px",
                  color: COLORS.textMuted,
                }}
              >
                Data Sources
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  {
                    label: "NOAA NDBC",
                    href: "https://www.ndbc.noaa.gov",
                    desc: "Buoy & ocean data",
                  },
                  {
                    label: "ECMWF",
                    href: "https://www.ecmwf.int",
                    desc: "Swell models",
                  },
                  {
                    label: "Open-Meteo",
                    href: "https://open-meteo.com",
                    desc: "Weather & wind",
                  },
                  {
                    label: "CDIP",
                    href: "https://cdip.ucsd.edu",
                    desc: "Wave buoy network",
                  },
                  {
                    label: "Community Reports",
                    href: "#",
                    desc: "Local surfer conditions",
                  },
                ].map(({ label, href, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        color: COLORS.primary,
                        letterSpacing: "-0.14px",
                        borderBottom: `1px solid rgba(0,2,247,0.3)`,
                        paddingBottom: 1,
                        transition: "border-color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = COLORS.primary)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(0,2,247,0.3)")
                      }
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontSize: 12,
                        color: COLORS.textMuted,
                        letterSpacing: "-0.12px",
                      }}
                    >
                      {desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              borderTop: `1px solid rgba(0,2,247,0.1)`,
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 12,
                color: COLORS.textMuted,
                letterSpacing: "-0.12px",
              }}
            >
              Forecast data is for informational purposes only. Always assess
              conditions yourself before entering the water.
            </span>
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 12,
                color: COLORS.textMuted,
                letterSpacing: "-0.12px",
              }}
            >
              © {new Date().getFullYear()} WAVVVY
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
