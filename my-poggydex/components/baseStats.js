const BaseStats = ({ stat = "1", statname = "HP" }) => {
  return (
    <div className="stat-cont">
      <div className="left-stat-cont">
        <h3>{statname}</h3>
      </div>
      <div className="right-stat-cont">{stat}</div>
    </div>
  );
};

export default BaseStats;
