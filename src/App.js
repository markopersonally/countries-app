import { useState } from "react";
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="flex max-w-screen-2xl flex-col bg-neutral-200 dark:bg-neutral-900">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Home />
      </main>
    </div>
  );
}

export default App;
