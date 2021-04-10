import React from "react";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ links, linksContainerRef, linksRef }) => {

    return (
        <div className={`links-container`} ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
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