import { use, useEffect, useState } from "react";
import axios from "axios";
import getAllData from "./DTO/getallData";
import CountryCard from "./Components/CountryCard";
function App() {
  const [countries, setCountires] = useState([]);
  useEffect(() => {
    const getDataOfCountry = async () => {
      const response = await axios("https://restcountries.com/v3.1/all");
      const rawData = response.data;

      const countries = getAllData(rawData);
      setCountires(countries);
    };
    getDataOfCountry();
  }, []);

  return (
    <>
      {countries.map((item) => {
        const { name, flag, population, region, capital } = item;

        return (
          <CountryCard
            name={name}
            flag={flag}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </>
  );
}

export default App;
