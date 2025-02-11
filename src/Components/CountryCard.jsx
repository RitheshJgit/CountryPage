function CountryCard({ name, flag, population, region, capital }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={flag} alt="" />
      <h3>Population{population}</h3>
      <h3>{region}</h3>
      <h3>{capital}</h3>
    </>
  );
}

export default CountryCard;
