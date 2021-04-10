import React from "react";

const SocialLinksItem = ({ icon, url }) => {


    return (
        <li>
            <a href={url}>
                {icon}
            </a>
        </li>
    )
};

export default SocialLinksItem;