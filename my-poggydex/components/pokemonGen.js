const PokemonGen = ({ typetext = "1", onClick }) => {
  return (
    <button className="pokemon-gen-cont" onClick={onClick}>
      <div className="pokemon-gen-color" />
      <div className="pokemon-gen-text-cont">
        <h1 className="pokemon-gen-text">{typetext}</h1>
      </div>
    </button>
  );
};

export default PokemonGen;
