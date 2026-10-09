import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

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
          justifyContent: "center",
          padding: "70px",
          background: "#fffaf3",
          color: "#24170f"
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 7 }}>
          ADDIS EATS
        </div>

        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            marginTop: 30
          }}
        >
          Ethiopian food, made easy.
        </div>

        <div
          style={{
            fontSize: 34,
            marginTop: 25
          }}
        >
          Discover dishes and coffee from Addis Eats.
        </div>
      </div>
    ),
    size
  );
}