import React from "react";
import { ThemeContext } from "./themeContext";

// Light Switch SVG
import Light from "./Dark";
import Dark from "./Light";
//sound effects
// import swtichsfx from "../../sounds/switchsfx.mp3";

export default function ToggleSwitch() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  //   const [play] = useSound(switchsfx);
  return (
    <>
      <div className="duration-500">
        {theme === "dark" ? <Dark /> : <Light />}
      </div>
    </>
  );
}
