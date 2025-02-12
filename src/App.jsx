import { useEffect, useState } from "react";
import axios from "axios";
import convertCountryDTO from "./DTO/getallData";
import CountryCard from "./Components/CountryCard";
import Pagination from "./Components/Pagination";
import './App.css'

function App() {
  const [countries, setCountires] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    const getDataOfCountry = async () => {
      const response = await axios("https://restcountries.com/v3.1/all");
      const rawData = response.data;

      const countries = convertCountryDTO(rawData);
      countries.sort((a, b) => a.name.localeCompare(b.name));
      setCountires(countries);
    };
    getDataOfCountry();
  }, []);

  // getting the start index
  const lastIndex = currPage * itemsPerPage;
  // getting the end index
  const startIndex = lastIndex - itemsPerPage;
  // maximum number of pages should show in the page
  const paginatedCountries = countries.slice(startIndex, lastIndex);

  // to increase or decerese the page number
  const paginate = (paginate)=> setCurrPage(paginate)

  // getting the total number of pages

  const totalPage = Math.ceil(countries.length / itemsPerPage)

  return (
    <>
      <div className="App">
        <h1>Country Card</h1>
        <div className="country-grid  ">
        {paginatedCountries.map((item) => {
          const { name, flag, population, region, capital } = item;
          return (
            <div>
            <CountryCard
              name={name}
              flag={flag}
              population={population}
              region={region}
              capital={capital}
            />
            </div>
          );
        })}
        </div>
        <div className="btn">
        <Pagination totalPage={totalPage} currentPage={currPage} paginate={paginate}/>
        </div>
      </div>
    </>
  );
}

export default App;
