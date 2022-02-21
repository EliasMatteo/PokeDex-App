import Link from "next/link";
import { useEffect, useState } from "react";
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";
import { useTheme } from "../utilities/provider";

export default function Settings() {
  const [switchThemeState, setSwitchThemeState] = useState(false);
  const [switchBoldState, setSwitchBoldState] = useState(false);
  const [switchContrastState, setSwitchContrastState] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div className="cont-settings">
      <div className="button-cont">
        <Link href={"/"}>
          <button>back to home</button>
        </Link>
      </div>
      <div className="cont-toggle">
        <h2>Theme</h2>
        <ThemeToggleSwitch
          onClick={() => setTheme("dark")}
          isThemeChecked={switchThemeState}
          handleThemeToggle={() => setSwitchThemeState(!switchThemeState)}
        />
      </div>
      <div className="cont-toggle">
        <h2>Bolded Text</h2>
        <BoldTextToggleSwitch
          isBoldChecked={switchBoldState}
          handleBoldToggle={() => setSwitchBoldState(!switchBoldState)}
        />
      </div>
      <div className="cont-toggle">
        <h2>High Contrast</h2>
        <HighContrastToggleSwitch
          isContrastChecked={switchContrastState}
          handleContrastToggle={() =>
            setSwitchContrastState(!switchContrastState)
          }
        />
      </div>
    </div>
  );
}
