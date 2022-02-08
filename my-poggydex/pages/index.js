import Image from "next/image";
import PokedexCardCont from "../components/pokedexCardCont";

// import components
import TypingBox from "../components/typingBox";

export default function Home() {
  return (
    <div>
      <TypingBox text="Grass" />
      <PokedexCardCont header="Bulbasaur" />
    </div>
  );
}
