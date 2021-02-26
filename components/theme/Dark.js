import React from "react";
import { ThemeContext } from "./themeContext";

export default function Dark(props) {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const title = props.title || "light";

  return (
    <svg
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M7 5.5h10c3.58 0 6.5 2.92 6.5 6.5s-2.92 6.5-6.5 6.5h-10c-3.58 0-6.5-2.91-6.5-6.5s2.92-6.5 6.5-6.5z"
          fill="#374151"
        />
        <path
          d="M17 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}
