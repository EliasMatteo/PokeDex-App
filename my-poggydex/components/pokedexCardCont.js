import Image from "next/image";

// import component
import TypingBox from "./typingBox";

const PokedexCardCont = ({ header }) => {
  return (
    <div className="pokedex-card-container">
      <div className="pokedex-card-cont">
        <h1>{header}</h1>
        <TypingBox text="Grass" />
        <TypingBox text="Poison" />
      </div>
      <div className="pokedex-card-image">
        <Image src="/bulbasaur.png" alt="bulbasaur" width={100} height={100} />
      </div>
      <div className="pokedex-card-bg">
        <Image src="/pokeball.png" alt="pokeball" width={180} height={180} />
      </div>
    </div>
  );
};

export default PokedexCardCont;
