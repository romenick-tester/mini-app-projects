import React, { useContext, useEffect, useReducer } from "react";
import { fetchStories, removeStory, searchStory } from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search";

const initialState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
  error: { show: false, msg: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = `${API_ENDPOINT}?query=${state.query}&page=${state.page}`;

  useEffect(() => {
    fetchStories(url, dispatch);
  }, [url]);

  const removeArticle = function(id) {
    removeStory(id, dispatch);
  }

  const handleQuery = function(query) {
    searchStory(query, dispatch);
  };

  return <AppContext.Provider value={{...state, removeArticle, handleQuery}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
