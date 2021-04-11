import React from "react";
import { FaTimes } from "react-icons/fa";
import { socialLinks, links } from "../assets/data";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../assets/context";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${sidebar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {socialLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar;
