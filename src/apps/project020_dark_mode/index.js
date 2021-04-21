import React, { useState, useEffect } from "react";
import data from "./assets/data";
import Article from "./Article";

import "./assets/index.css";

// const getThemeFromStorage = () => {
//   let theme = "light-theme"
//   if(localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme")
//   }
//   return theme;
// }

const getThemeFromStorage = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light-theme";

function DarkMode() {
  const [theme, setTheme] = useState(getThemeFromStorage);

  useEffect(() => {
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    if(theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button 
            className="btn"
            onClick={toggleTheme}
          >
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default DarkMode;
