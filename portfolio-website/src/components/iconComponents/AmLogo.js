import * as React from "react";

const SvgAmLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 1000 1000"
    {...props}
  >
    <path
      d="M991 145v640c-22-36-44-72-66-109-44-73-66-109-66-110V299L501 593 142 299v267s-22 37-67 110c-22 36-45 73-67 109V145h127s47 38 140 114 169 137 226 185c242-199 363-299 364-299h125zM851 883 748 714 152 883H4l259-427 99 82-126 209 451-133-47-78 100-81 256 428H851zM568 118l85 142-100 81-51-84-51 85-100-81 87-143h131z"
      style={{
        fill: "var(--neon-blue)",
      }}
    />
  </svg>
);

export default SvgAmLogo;
