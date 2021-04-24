import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });

    function openSidebar() {
        setSidebar(true);
    }
    function closeSidebar() {
        setSidebar(false);
    }

    function openSubmenu(text, coordinates) {
        const pageContent = sublinks.find((link) => link.page === text);
        setPage(pageContent);
        setMenuPosition(coordinates);
        setSubmenu(true);
    }
    function closeSubmenu() {
        setSubmenu(false);
    }

    const vars = { sidebar, submenu, menuPosition, page };

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