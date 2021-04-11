import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [modal, setModal] = useState(false);

    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const vars = { sidebar, modal }

    const funcs = { openSidebar, closeSidebar, openModal, closeModal };

    return (
        <AppContext.Provider value={{ ...funcs, ...vars }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppProvider, useGlobalContext
}