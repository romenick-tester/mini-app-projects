import React from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function SidebarModal() {

  return (
    <>
      <Modal />
      <Sidebar />
      <Home />
    </>
  )
}

export default SidebarModal;
