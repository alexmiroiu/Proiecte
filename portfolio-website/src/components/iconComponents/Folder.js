import * as React from "react";

const SvgFolder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="4rem"
    height="4rem"
    {...props}
  >
    <path d="M5 4C3.346 4 2 5.346 2 7v6h46v-2c0-1.654-1.346-3-3-3l-26.955.006c-.28-.101-.856-1.02-1.166-1.514C16.112 5.268 15.317 4 14 4H5zM3 15a1 1 0 0 0-1 1v27a3 3 0 0 0 3 3h40a3 3 0 0 0 3-3V16a1 1 0 0 0-1-1H3z" />
  </svg>
);

export default SvgFolder;
