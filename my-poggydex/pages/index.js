// import components
import TypingBox from "../components/typingBox";
import PokedexCardCont from "../components/pokedexCardCont";
import ContextHeader from "../components/contextHeader";

export default function Home() {
  return (
    <div>
      <TypingBox text="Grass" />
      <PokedexCardCont header="Bulbasaur" />
      <ContextHeader />
    </div>
  );
}
