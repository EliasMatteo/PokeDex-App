import Image from "next/image";

const BoldTextToggleSwitch = ({ isBoldChecked, handleBoldToggle }) => {
  console.log(isBoldChecked);
  return (
    <div className="switch-cont">
      <input
        checked={isBoldChecked}
        onChange={handleBoldToggle}
        type="checkbox"
        className="switch-checkbox"
        id="bold-switch-toggle"
      />
      <label className="switch-label" htmlFor="bold-switch-toggle">
        <span className="switch-button">
          {isBoldChecked == true ? (
            <Image
              src={"/icon/BoldedTextIconDarkMode.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          ) : (
            <Image
              src={"/icon/BoldedTextIconLightMode.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default BoldTextToggleSwitch;
