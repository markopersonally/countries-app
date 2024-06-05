import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import ItemPage from "./components/ItemPage.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="flex max-w-screen-2xl flex-col bg-neutral-200 dark:bg-neutral-900">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<ItemPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
