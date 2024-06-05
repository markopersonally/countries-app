import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Item from "./Item";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="h-screen">
      <form className="mx-[50px] p-[25px] flex justify-between flex-wrap gap-4 dark:text-neutral-100">
        <div className="p-[15px] flex items-center gap-2 bg-neutral-300 dark:bg-neutral-700 text-xl">
          <CiSearch className="text-2xl text-neutral-900 dark:text-neutral-100" />
          <input
            type="search"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-full placeholder-neutral-900 dark:placeholder-neutral-100 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 outline-none"
          />
        </div>
        <div>
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="p-[15px] w-full bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
          >
            <option value="">All Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
      <Item searchQuery={searchQuery} selectedRegion={selectedRegion} />
    </div>
  );
}
