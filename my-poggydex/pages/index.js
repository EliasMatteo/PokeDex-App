import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// import components
import SearchBar from "../components/searchBar";
import PokedexCardCont from "../components/pokedexCardCont";
import StatValue from '../components/statValue';
import InfoTab from '../components/infoTab';

export default function Home() {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isSearching) return;

    let cancelSetPokemons = false;
    const getPokemons = async () => {
      const res = await axios.get("/api/pokemon", {
        params: {
          name: name,
        },
      });
      if (!cancelSetPokemons) {
        setPokemons(res.data);
        setIsSearching(false);
      }
    };

    getPokemons();

    if (isSearching) return () => (cancelSetPokemons = true);
  }, [isSearching, setIsSearching, name]);
  return (
    <div>
      <SearchBar
        changePokemon={(e) => setName(e.target.value)}
        clickPokemon={() => setIsSearching(true)}
      />
      {/* data mapping */}
      <div className="index-pokedex-card-display">
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <PokedexCardCont
                pokemonname={pokemon.name}
                type1={pokemon.type_1}
                type2={pokemon.type_2}
              />
            </div>
          ))}
      </div>
      <StatValue category={"Generation"} value={"Seed"}></StatValue>
      <div className="info-tab-cont">
      <InfoTab name={"About"}></InfoTab>
      <InfoTab name={"About"}></InfoTab>
      <InfoTab name={"About"}></InfoTab>
      </div>
    </div>
  );
}
