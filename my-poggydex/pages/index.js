import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// import components
import PokedexCardCont from "../components/pokedexCardCont";

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
      <div className="search-bar">
        <input
          className="searh-bar-text-box"
          onChange={(e) => setName(e.target.value)}
          placeholder="Pokemon Name"
        />
        <button
          className="search-bar-button"
          onClick={() => setIsSearching(true)}
        >
          <Image
            src={"/icon/search.svg"}
            alt="search icon"
            width={20}
            height={20}
          />
        </button>
      </div>
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
    </div>
  );
}
