import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../assets/context";

const Submenu = () => {
  const { submenu, menuPosition } = useGlobalContext();
  const container = useRef(null)

  useEffect(() => {
    const tempSubmenu = container.current;
    const { center, bottom } = menuPosition;

    tempSubmenu.style.left = `${center}px`;
    tempSubmenu.style.top = `${bottom}px`;

  }, [menuPosition])

  return (
    <aside className={`submenu ${submenu && "show"}`} ref={container}>
      submenu
    </aside>
  )
}

export default Submenu;
