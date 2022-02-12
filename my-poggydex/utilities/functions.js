export function filtering(pokemons = [], config = { name: null }) {
  const { name } = config;

  if (name) {
    return pokemons.filter((pokemon) => {
      const matchPokemon = name
        ? pokemon.name.toUpperCase().includes(name.toUpperCase())
        : true;

      return matchPokemon;
    });
  }
  return [];
}
