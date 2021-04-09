import React from "react";
import SocialLinksItem from "./SocialLinksItem";

const SocialLinks = ({ socials }) => {

    return (
        <ul className="social-icons">
            {socials.map((social) => {
                return (
                    <SocialLinksItem key={social.id} {...social} />
                )
            })}
        </ul>
    )
};

export default SocialLinks;