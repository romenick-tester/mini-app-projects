import React, { useState, useContext, createContext } from "react";
import sublinks from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value="test">
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {

    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };