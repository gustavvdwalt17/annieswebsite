import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbarItems_container">
      <nav className="NavbarItems">
        <h1 className="navbar-logo">SuikerBekkie</h1>

        {/* <div className="menu-icons" onClick={handleToggle}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div> */}
        {/* <ul className="nav-menu">
          <Link to={"/"} className="nav-links">
            <i className="fa-solid fa-house">Home</i>
          </Link>
          <Link className="nav-links" to={"/about"}>
            <i className="fa-solid fa-circle-info">About</i>
          </Link>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
