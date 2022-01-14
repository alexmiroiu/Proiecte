import * as React from "react";

const SvgMoon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    fill="var(--cultured)"
    {...props}
  >
    <path d="M301.425 256c0-98.198 71.422-179.704 165.15-195.435C421.963 22.807 364.312 0 301.425 0c-141.16 0-256 114.84-256 256s114.84 256 256 256c62.887 0 120.538-22.807 165.15-60.565C372.848 435.704 301.425 354.2 301.425 256z" />
  </svg>
);

export default SvgMoon;
