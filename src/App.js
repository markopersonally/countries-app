import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import ItemPage from "./components/ItemPage.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="m-auto flex max-w-screen-2xl flex-col bg-neutral-200 dark:bg-neutral-900">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/countries-app" element={<Home />} />
          <Route
            path="/countries-app/country/:countryName"
            element={<ItemPage />}
          />
        </Routes>
      </div>
    </main>
  );
}

export default App;
