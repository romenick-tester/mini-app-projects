import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import { AppProvider } from "./assets/context";

import "./assets/index.css";

function PopSubmenus() {

  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  )
}

export default PopSubmenus;
