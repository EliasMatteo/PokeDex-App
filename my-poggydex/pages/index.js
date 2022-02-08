import { useEffect, useState } from "react";
import axios from "axios";

// import components
import PokedexCardCont from "../components/pokedexCardCont";

export default function Home() {
  // empty data array
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      // use axios to fetch api
      const res = await axios.get("/api/pokemon");
      // set data
      setData(res.data);
    };
    // call function
    getPokemon();
  }, []);
  return (
    <div>
      {/* data mapping */}
      <div className="index-pokedex-card-display">
        {data.map((pokemon) => (
          // use name as unique id
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
