import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

export default function Item({ searchQuery, selectedRegion }) {
  const [visibleCount, setVisibleCount] = useState(20);
  const endpoint = "/all";
  const { data: countries, isLoading, error } = useFetch(endpoint);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  const filteredCountries = (countries || []).filter((country) => {
    const matchesSearchQuery = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesSearchQuery && matchesRegion;
  });

  return (
    <div className="my-[50px] max-w-screen-2xl text-neutral-900 bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-200">
      {isLoading && !error && (
        <p className="text-center text-2xl text-red-500">Loading...</p>
      )}
      {error && !isLoading && (
        <p className="text-center text-2xl text-red-500">{error}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-10 text-xs">
        {filteredCountries.slice(0, visibleCount).map((country, index) => (
          <Link key={index} to={`country/${country.name.common}`}>
            <div className="h-[250px] w-[250px] p-5 flex flex-col gap-3 mb-4 shadow-2xl text-neutral-900 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-200 hover:cursor-pointer">
              <img
                className="h-2/3"
                src={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <div className="h-1/3 flex flex-col">
                <h3>{country.name.common}</h3>
                <h4>Population: {country.population.toLocaleString()}</h4>
                <h4>Region: {country.region}</h4>
                <h4>Capital: {country.capital ? country.capital[0] : "N/A"}</h4>
              </div>
            </div>
          </Link>
        ))}
        {visibleCount < filteredCountries.length && (
          <button
            onClick={loadMore}
            className="w-[200px] my-[50px] p-4 bg-blue-500 text-white rounded hover:bg-blue-800"
          >
            Load More..
          </button>
        )}
      </div>
    </div>
  );
}
