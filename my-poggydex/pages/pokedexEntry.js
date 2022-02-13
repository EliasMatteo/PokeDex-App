import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import PokemonEvolution from "../components/pokemonEvolution";

export default function pokemonEntry() {
  return (
    <div className="pokemonEntry-evolution-display">
      <PokemonEvolution pokemonname="bulbasaur" arrowDisplay="show" />
      <PokemonEvolution pokemonname="ivysaur" arrowDisplay="show" />
      <PokemonEvolution pokemonname="venusaur" arrowDisplay={null} />
    </div>
  );
}
