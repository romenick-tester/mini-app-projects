import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const vars = { loading, cocktails };
  const funcs = { setSearchQuery };
  return (
    <AppContext.Provider value={{ ...vars, ...funcs }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
