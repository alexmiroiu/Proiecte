import * as React from "react";

const SvgDownIcon = (props) => (
  <svg
    className="downIcon_svg__svg-icon"
    style={{
      width: "4rem",
      height: "4rem",
      verticalAlign: "middle",
      fill: "var(--neon-blue)",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M512.197 752.239 158.5 398.54c-18.738-18.738-18.738-49.092 0-67.829s49.092-18.738 67.829 0l285.868 285.869 285.87-285.869c18.737-18.738 49.091-18.738 67.828 0s18.738 49.092 0 67.829L512.197 752.239z" />
  </svg>
);

export default SvgDownIcon;
