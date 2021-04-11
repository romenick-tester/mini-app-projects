import React, { useState, useContext, createContext } from "react";
import sublinks from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(true);
    const [submenu, setSubmenu] = useState(true);

    function openSidebar() {
        setSidebar(true);
    }
    function closeSidebar() {
        setSidebar(false);
    }

    function openSubmenu() {
        setSubmenu(true);
    }
    function closeSubmenu() {
        setSubmenu(false);
    }

    const vars = { sidebar, submenu };

    const funcs = { openSidebar, closeSidebar, openSubmenu, closeSubmenu };

    return (
        <AppContext.Provider value={{ ...vars, ...funcs }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {

    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };