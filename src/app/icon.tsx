import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f3efea",
          border: "3px solid #c28a7a",
          color: "#c28a7a",
          display: "flex",
          fontFamily: "Georgia",
          fontSize: 34,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
