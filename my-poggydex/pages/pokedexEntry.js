import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import PokemonEvolution from "../components/pokemonEvolution";
import ListButton from "../components/listButton";
import PokemonType from "../components/pokemonType";
import PokemonGen from "../components/pokemonGen";
import BaseStats from "../components/baseStats";

export default function pokemonEntry() {
  return (
    <div className="pokemonEntry-evolution-display">
      <PokemonEvolution pokemonname="bulbasaur" arrowDisplay="show" />
      <PokemonEvolution pokemonname="ivysaur" arrowDisplay="show" />
      <PokemonEvolution pokemonname="venusaur" arrowDisplay={null} />
      <ListButton />
      <ListButton listtext={"Generations"} />
      <PokemonType />
      <PokemonGen />
      <BaseStats />
      <BaseStats statname={"Attack"} />
      <BaseStats statname={"Sp.Attack"} />
      <BaseStats statname={"Defense"} />
      <BaseStats statname={"Sp.Defense"} />
      <BaseStats statname={"Speed"} />
    </div>
  );
}
