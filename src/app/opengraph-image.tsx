import { ImageResponse } from "next/og";

export const alt = "Школа маникюра Елены Горячевой";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#19161e",
          color: "#faf7ff",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#c6a5ee" }}>
          Школа Елены Горячевой
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
            Маникюр. Понимать.
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700, lineHeight: 1.05, color: "#c6a5ee" }}>
            А не повторять.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d1c9db", marginTop: 10 }}>
            Онлайн по России · очно в Каменске-Шахтинском
          </div>
        </div>
      </div>
    ),
    size,
  );
}
