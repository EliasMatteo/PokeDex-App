import Link from "next/link";
import { useEffect, useState } from "react";
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";
import { useTheme } from "../utilities/provider";
import Image from "next/image";

export default function Settings() {
  const { setTheme } = useTheme();
  const { theme } = useTheme();
  return (
    <div className="button-cont">
      <div className="button-cont">
        <Link href={"/"}>
          <button className="back-button">
            {theme === "dark" ? (
              <Image
                src={"/icon/arrow-left-white.svg"}
                height={30}
                width={30}
              />
            ) : (
              <Image
                src={"/icon/arrow-left-black.svg"}
                height={30}
                width={30}
              />
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
