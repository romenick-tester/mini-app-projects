import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../assets/context";

const Submenu = () => {
  const { submenu, openSubmenu } = useGlobalContext();

  return (
    <aside className={`submenu ${submenu && "show"}`}>
      submenu
    </aside>
  )
}

export default Submenu;
