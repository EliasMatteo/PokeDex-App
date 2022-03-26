import Image from "next/image";
import { useState } from "react";

// import component
import TypingBox from "./typingBox";

const PokedexCardCont = ({
  pokemonname,
  type1,
  type2,
  children = null,
  item = {},
}) => {
  // drag drops work in progress
  // const [pos, setPos] = useState({
  //   left: 0,
  //   top: 0,
  //   position: "relative",
  // });
  // const [{ isDragging, cords }, drag, dragPreview] = useDrag(() => ({
  //   type: "pokeCard",
  //   item: item,
  //   end: (item, monitor) => {
  //     if (!monitor.didDrop()) {
  //       setPos({
  //         left: monitor.getClientOffset().x,
  //         top: monitor.getClientOffset().y,
  //         position: "absolute",
  //       });
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //     cords: monitor.getClientOffset(),
  //   }),
  // }));

  // const sty = {
  //   left: pos.left,
  //   top: pos.top,
  //   position: pos.position,
  // };

  // if (cords !== null && isDragging) {
  //   sty.left = cords.x + 20;
  //   sty.top = cords.y;
  //   sty.position = "absolute";
  // }
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
          src={`${
            process.env.NEXT_PUBLIC_POKEMON_API
          }/pokemon/${pokemonname.toLowerCase()}.png`}
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
