// import { useEffect, useState } from "react";
// import axios from "axios";

// import components
import TypingBox from "../components/typingBox";
import PokedexCardCont from "../components/pokedexCardCont";
import ContextHeader from "../components/contextHeader";

export default function Home() {
  return (
    <div>
      {/* components testing */}
      <div>
        <TypingBox text="Grass" />
        <PokedexCardCont header="Bulbasaur" />
        <ContextHeader />
      </div>
      {/* data mapping */}
    </div>
  );
}
