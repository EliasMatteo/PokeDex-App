const PokemonType = ({ typetext = "Electric", bg = "yellow", onClick }) => {
  return (
    <button className="pokemon-type-cont" onClick={onClick}>
      <div className="pokemon-type-color" background-color={bg} />
      <div className="pokemon-type-text-cont">
        <h1 className="pokemon-type-text">{typetext}</h1>
      </div>
    </button>
  );
};

export default PokemonType;
