import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";

const NavHeader = () => {

    return (
        <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle">
                <FaBars />
            </button>
        </div>
    )
};

export default NavHeader;