import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../assets/context";

const Submenu = () => {
  const { submenu, menuPosition, page: { page, links } } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");
  const container = useRef(null);

  useEffect(() => {
    setColumns("col-2");
    const tempSubmenu = container.current;
    const { center, bottom } = menuPosition;

    tempSubmenu.style.left = `${center}px`;
    tempSubmenu.style.top = `${bottom}px`;

    if (links.length >= 3) {
      setColumns("col-3")
    }

  }, [menuPosition, links])

  return (
    <aside className={`submenu ${submenu && "show"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon} {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu;
