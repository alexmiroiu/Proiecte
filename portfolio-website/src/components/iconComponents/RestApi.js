import * as React from "react";

const SvgRestApi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    style={{
      enableBackground: "new 0 0 48 48",
    }}
    xmlSpace="preserve"
    width="7.2rem"
    height="7.2rem"
    {...props}
  >
    <path
      style={{
        fill: "#2196f3",
      }}
      d="M7 8h34a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M17.038 28.725h-4.292L11.909 32H8.581l4.87-16h2.88l4.903 16h-3.361l-.835-3.275zm-3.607-2.692h2.912l-1.456-5.703-1.456 5.703zM26 26.374V32h-3V16h5c1.542 0 2.771.491 3.689 1.473.916.981 1.311 2.256 1.311 3.824s-.39 2.806-1.295 3.714c-.907.908-2.163 1.363-3.768 1.363H26zm0-2.693h2.116c.599 0 1.063-.201 1.393-.604.327-.403.491-.989.491-1.758 0-.799-.167-1.434-.503-1.907-.335-.472-.785-.712-1.349-.72H26v4.989zM38 32h-3V16h3v16z"
    />
  </svg>
);

export default SvgRestApi;
