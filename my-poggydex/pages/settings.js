import { useEffect, useState } from "react";
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";

export default function Settings() {
  const [switchThemeState, setSwitchThemeState] = useState(false);
  const [switchBoldState, setSwitchBoldState] = useState(false);
  const [switchContrastState, setSwitchContrastState] = useState(false);

  return (
    <div>
      <ThemeToggleSwitch
        isThemeChecked={switchThemeState}
        handleThemeToggle={() => setSwitchThemeState(!switchThemeState)}
      />
      <BoldTextToggleSwitch
        isBoldChecked={switchBoldState}
        handleBoldToggle={() => setSwitchBoldState(!switchBoldState)}
      />
      <HighContrastToggleSwitch
        isContrastChecked={switchContrastState}
        handleContrastToggle={() =>
          setSwitchContrastState(!switchContrastState)
        }
      />
    </div>
  );
}
