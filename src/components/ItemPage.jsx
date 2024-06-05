import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemPage() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  const borders = country.map((country) => country.borders);

  const apiURL = "https://restcountries.com/v3.1/";

  useEffect(() => {
    const getCountryByName = () => {
      axios
        .get(`${apiURL}/name/${countryName}`)
        .then((res) => {
          setCountry(res.data);
          setIsLoading(false);
        })
        .catch(console.log("Something went a wrong"));
    };

    return getCountryByName();
  }, [countryName]);

  return (
    <div>
      <button className="mt-[40px] ml-[40px] w-[150px] p-2 bg-neutral-500 text-neutral-200 rounded-md hover:bg-neutral-600 transition">
        <Link to="/">Back</Link>
      </button>

      {isLoading && !error && <h4>Loading..</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div
          key={index}
          className="m-auto w-max p-5 flex justify-center items-center gap-3 mb-4 shadow-2xl text-neutral-900 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200"
        >
          <div>
            <img
              className="w-2/3"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </div>
          <div className="w-1/3 flex flex-col">
            <h3>{country.name.common}</h3>
            <h4>Population: {country.population.toLocaleString()}</h4>
            <h4>Region: {country.region}</h4>
            <h4>Capital: {country.capital ? country.capital[0] : "N/A"}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
