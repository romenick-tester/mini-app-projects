import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinksApi = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchQuery}`);
      const data = await res.json();
      const { drinks } = data;

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
        });

        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [searchQuery])

  useEffect(() => {
    fetchDrinksApi();
  }, [fetchDrinksApi]);

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
