import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useTheme } from "../utilities/provider";
import { useType } from "../utilities/typeProvider";

// import components
import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import PokedexCardCont from "../components/pokedexCardCont";

export default function Home() {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { setTheme } = useTheme();
  const { type } = useType();

  useEffect(() => {
    if (!isSearching) return;

    let cancelSetPokemons = false;
    const getPokemons = async () => {
      console.log(type);
      const res = await axios.get("/api/pokemon", {
        params: {
          name: name,
          type: type.join(","),
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
    <div className="page-container">
      <div className="nav-bar">
        <Logo name="Pokédex" />
        <SearchBar
          changePokemon={(e) => setName(e.target.value)}
          clickPokemon={() => setIsSearching(true)}
        />
        <div className="button-cont">
          <Link href={"settings"}>
            <button>Settings</button>
          </Link>
          <Link href={"favourites"}>
            <button>Favourites</button>
          </Link>
        </div>
      </div>
      {/* data mapping */}
      <div className="index-pokedex-card-display">
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <Link href={`/pokemon/${pokemon.name}`}>
                <a>
                  <PokedexCardCont
                    pokemonname={pokemon.name}
                    type1={pokemon.type_1}
                    type2={pokemon.type_2}
                  />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
