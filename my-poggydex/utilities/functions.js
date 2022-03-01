export function filtering(pokemons = [], config = { name: null, type: null }) {
  // type is an array of pokemon types
  const { name, type } = config;

  let data = pokemons;

  if (name) {
    data = data.filter((pokemon) => {
      const matchPokemon = name
        ? pokemon.name.toUpperCase().includes(name.toUpperCase())
        : true;

      return matchPokemon;
    });
  }

  if (type) {
    data = data.filter((pokemon) => {
      return type.includes(pokemon?.type_1) || type.includes(pokemon?.type_2);
    });
  }

  return data;
}