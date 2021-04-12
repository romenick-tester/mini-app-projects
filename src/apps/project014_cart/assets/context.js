import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function changeAmount(id, type) {
    dispatch({ type: "CHANGE_AMOUNT", payload: { id, type } });
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart])

  const vars = { ...state };
  const funcs = { clearCart, removeItem, changeAmount };
  return (
    <AppContext.Provider value={{ ...vars, ...funcs }}>
      {children}
    </AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { useGlobalContext, AppProvider };
