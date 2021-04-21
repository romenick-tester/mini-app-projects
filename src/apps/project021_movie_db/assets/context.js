import React, { useState, useContext, useEffect } from "react";

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}`; // make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  return <AppContext.Provider value={{msg: "hello"}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, API_ENDPOINT };
