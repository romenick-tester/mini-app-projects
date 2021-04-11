import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../assets/data";
import { useGlobalContext } from "../assets/context";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar-wrapper ${sidebar && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, index) => {
            const { links, page } = sublink;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, i) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={i}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
