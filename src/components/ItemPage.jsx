import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function ItemPage() {
  const { countryName } = useParams();
  const endpoint = `/name/${countryName}`;
  const { data: countries, isLoading, error } = useFetch(endpoint);

  const country = countries ? countries[0] : null;

  return (
    <div className="h-screen">
      <button className="mt-[40px] ml-[40px] w-[150px] p-2 bg-neutral-500 text-neutral-200 rounded-md hover:bg-neutral-600 transition">
        <Link to="/">Back</Link>
      </button>

      {isLoading && !error && <h4>Loading...</h4>}
      {error && !isLoading && <h4>{error}</h4>}

      {country && (
        <div className="mt-[150px] m-auto w-max p-5 flex justify-center items-center gap-3 mb-4 shadow-2xl text-neutral-900 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200">
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
      )}
    </div>
  );
}
