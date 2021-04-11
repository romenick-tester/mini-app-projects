import React, { useState, useContext, createContext } from "react";
import sublinks from "../assets/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({});

    function openSidebar() {
        setSidebar(true);
    }
    function closeSidebar() {
        setSidebar(false);
    }

    function openSubmenu(text, coordinates) {
        setMenuPosition(coordinates)
        setSubmenu(true);
    }
    function closeSubmenu() {
        setSubmenu(false);
    }

    const vars = { sidebar, submenu, menuPosition };

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