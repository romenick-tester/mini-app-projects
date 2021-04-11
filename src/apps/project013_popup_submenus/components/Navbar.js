import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { useGlobalContext } from "../assets/context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  function submenuToggler(e) {
    openSubmenu();
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={submenuToggler}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={submenuToggler}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={submenuToggler}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar;
