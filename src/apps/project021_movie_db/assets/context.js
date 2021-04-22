import React, { useState, useContext, useEffect } from "react";

const apiKey = process.env.REACT_APP_MOVIEDB_APIKEY;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}`; // make sure to use https
const noImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avenger");

  const fetchMovies = async () => {
    setLoading(true);
    let url;

    if(query) {
      url = `${API_ENDPOINT}&s=${query}`;
    } else {
      url = `${API_ENDPOINT}&s=avenger`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      if(data && data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setMovies([]);
        setError({ show: true, msg: data.Error });
      }

      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [query]);

  const vars = { loading, error, movies, query };
  const funcs = { setQuery };

  return <AppContext.Provider value={{...vars, ...funcs}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, API_ENDPOINT, noImage };
