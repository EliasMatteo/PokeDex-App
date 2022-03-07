import Image from "next/image";

// import component
import TypingBox from "./typingBox";

const PokedexCardCont = ({ pokemonname, type1, type2 }) => {
  return (
    <div className="pokedex-card-container">
      <div className={`pokedex-card-cont-${type1}`}>
        <h1>{pokemonname}</h1>
        <TypingBox type={type1} typestyle={type1} />
        {/* if type 2 doesn't exist, don't show */}
        {type2 == "" ? null : <TypingBox type={type2} typestyle={type1} />}
      </div>
      <div className="pokedex-card-image">
        <Image
          src={`/pokemon/${pokemonname}.png`}
          alt={pokemonname}
          width={100}
          height={100}
        />
      </div>
      <div className="pokedex-card-bg">
        <Image src="/pokeball.png" alt="pokeball" width={180} height={180} />
      </div>
    </div>
  );
};

export default PokedexCardCont;
