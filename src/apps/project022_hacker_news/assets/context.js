import React, { useContext, useEffect, useReducer } from "react";
import { fetchStories } from "./actions";
import reducer from "./reducer";

const initialState = {
  loading: true,
  stories: null,
  error: { show: false, msg: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchStories(dispatch);
  }, []);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
