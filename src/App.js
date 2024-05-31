import { useState } from "react";
import Home from "./components/Home.jsx";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="flex min-h-screen flex-col bg-neutral-200 dark:bg-neutral-900">
        <header className="w-screen p-[25px] flex justify-between shadow-xl">
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
        <Home />
      </main>
    </div>
  );
}

export default App;
