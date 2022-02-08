import pokemon from "../../utilities/pokedex.json";

export default function handler(req, res) {
  // for fast testing
  const pokemons = pokemon.slice(0, 5);
  res.json(pokemons);
}
