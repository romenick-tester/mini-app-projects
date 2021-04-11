import React from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { AppProvider } from "./assets/context";
import "./assets/index.css";

function SidebarModal() {

  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  )
}

export default SidebarModal;
