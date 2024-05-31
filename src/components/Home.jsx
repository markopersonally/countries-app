import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <form className="mx-[50px] p-[25px] flex justify-between  dark:text-neutral-100">
      <div className="p-[15px] flex items-center gap-2 bg-neutral-300 dark:bg-neutral-700 text-xl">
        <CiSearch className="text-2xl text-neutral-900 dark:text-neutral-100" />
        <input
          type="search"
          placeholder="Search for a country..."
          className="w-full h-full placeholder-neutral-900 dark:placeholder-neutral-100 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 outline-none"
        />
      </div>
      <div>
        <select class="p-[15px] w-full bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100">
          <option selected>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}
