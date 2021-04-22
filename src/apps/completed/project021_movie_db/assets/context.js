import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
const apiKey = process.env.REACT_APP_MOVIEDB_APIKEY;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}`; // make sure to use https
const noImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avenger");

  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  const vars = { loading, error, movies, query };
  const funcs = { setQuery };

  return <AppContext.Provider value={{...vars, ...funcs}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, API_ENDPOINT, noImage };
