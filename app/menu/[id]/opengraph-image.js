import { ImageResponse } from "next/og";
import { getDish } from "../../../lib/dishes";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { id } = await params;
  const dish = getDish(id);

  if (!dish) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#fffaf3", color: "#24170f", fontSize: 64 }}>
        Addis Eats
      </div>,
      size
    );
  }

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
        <div style={{ fontSize: 28, letterSpacing: 6 }}>ADDIS EATS</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 30 }}>{dish.name}</div>
        <div style={{ fontSize: 34, marginTop: 20 }}>ETB {dish.price}</div>
        <div style={{ fontSize: 28, marginTop: 25, maxWidth: 950 }}>{dish.summary}</div>
      </div>
    ),
    size
  );
}
