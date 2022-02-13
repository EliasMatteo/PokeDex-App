import Image from "next/image";

const ThemeToggleSwitch = ({ isThemeChecked, handleThemeToggle }) => {
  console.log(isThemeChecked);
  return (
    <div className="switch-cont">
      <input
        checked={isThemeChecked}
        onChange={handleThemeToggle}
        type="checkbox"
        className="switch-checkbox"
        id="theme-switch-toggle"
      />
      <label className="switch-label" htmlFor="theme-switch-toggle">
        <span className="switch-button">
          {isThemeChecked == true ? (
            <Image
              src={"/icon/themeToggleDarkMode.svg"}
              width={35}
              height={40}
              alt="icon"
            />
          ) : (
            <Image
              src={"/icon/themeToggleLightMode.svg"}
              width={40}
              height={40}
              alt="icon"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggleSwitch;
