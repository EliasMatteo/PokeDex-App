import Link from "next/link";
import { useEffect, useState } from "react";
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";
import { useTheme } from "../utilities/provider";
import Image from "next/image";
import PokemonGen from "../components/pokemonGen";
import PokemonType from "../components/pokemonType";

export default function Settings() {
  const [switchThemeState, setSwitchThemeState] = useState(false);
  const [switchBoldState, setSwitchBoldState] = useState(false);
  const [switchContrastState, setSwitchContrastState] = useState(false);
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);

  return (
    <div className="cont-settings">
      <div className="test-cont">
        <div className="button-cont">
          <Link href={"/"}>
            <Image src="/arrow-left.png" alt="back" width={40} height={20} />
          </Link>
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

        <div className="cont-toggle">
          <div className="pop-up-cont">
            <button
              className="filter-toggle"
              onClick={() => setIsOpenType(!isOpenType)}
            >
              <h2>Pokemon Types</h2>
            </button>

            {isOpenType && (
              <div className="content">
                {" "}
                <PokemonType />{" "}
              </div>
            )}
          </div>
        </div>

        <div className="cont-toggle">
          <div className="pop-up-cont">
            <button
              className="filter-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2>Pokemon Generation</h2>
            </button>

            {isOpen && (
              <div className="content">
                {" "}
                <PokemonGen />
                <PokemonGen />
                <PokemonGen />
                <PokemonGen />
                <PokemonGen />
                <PokemonGen />{" "}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pokeball-cont">
        <div className="pokeball-setting-bg">
          <Image src="/pokeball.svg" alt="pokeball" width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
