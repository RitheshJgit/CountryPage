
function CountryCard({ name, flag, population, region, capital }) {
  return (
    <div className="">
      <div className="box">
      <h2>{name}</h2>
      <img src={flag} alt="" />
      <p>Population : {population}</p>
      <h3>{region}</h3>
      <h3>{capital}</h3>
      </div>
    </div>
  );
}

export default CountryCard;
