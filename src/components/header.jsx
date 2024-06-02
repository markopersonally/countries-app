import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="p-[25px] flex flex-wrap justify-between gap-4 shadow-xl">
      <h1 className="text-neutral-900 dark:text-neutral-200 text-4xl">
        Where in the world?
      </h1>
      <button
        className="flex gap-[20px] items-center text-2xl"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <>
            <MdOutlineDarkMode className="dark:text-neutral-200" />{" "}
            <h3 className="dark:text-neutral-200">Light Mode</h3>
          </>
        ) : (
          <>
            <MdDarkMode /> <h3>Dark Mode</h3>
          </>
        )}
      </button>
    </header>
  );
}
