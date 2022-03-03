import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../utilities/provider";
import { useType } from "../utilities/typeProvider";

// components
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";

export default function Settings() {
  const [switchThemeState, setSwitchThemeState] = useState(false);
  const [switchBoldState, setSwitchBoldState] = useState(false);
  const [switchContrastState, setSwitchContrastState] = useState(false);
  const { setTheme } = useTheme();

  const { type, setType } = useType();
  const pokemonTypes = [
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ];
  const handleTypeClick = (pokemonType) => {
    const isInOldTypes = type.find((t) => t === pokemonType);
    let newType = [...type];

    if (isInOldTypes) {
      newType = newType.filter((t) => t !== pokemonType);
    } else {
      newType.push(pokemonType);
    }

    setType(newType);
  };

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
      <h1 className="filter">Filters</h1>
      {/* for test displaying array please don't delete
      {JSON.stringify(type)} */}
      {pokemonTypes.map((pokemonType) => (
        <button key={pokemonType} onClick={() => handleTypeClick(pokemonType)}>
          {pokemonType}
        </button>
      ))}
    </div>
  );
}
