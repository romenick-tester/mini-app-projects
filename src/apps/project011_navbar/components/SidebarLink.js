import React from "react";

const SidebarLink = ({ text, url }) => {

    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    )
};

export default SidebarLink;