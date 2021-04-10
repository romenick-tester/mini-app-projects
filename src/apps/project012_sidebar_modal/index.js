import React from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

import "./assets/index.css";

function SidebarModal() {

  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default SidebarModal;
