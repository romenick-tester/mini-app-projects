import React from "react";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ links }) => {

    return (
        <div className="links-container show-container">
            <ul className="links">
                {links.map((link) => {
                    return (
                        <SidebarLink key={link.id} {...link} />
                    )
                })}
            </ul>
        </div>
    )
};

export default Sidebar;