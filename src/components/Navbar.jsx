import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img className="big-logo" src="/images/kasa.svg" alt="Logo Kasa" />
          <img
            className="small-logo"
            src="/images/kasasmall.svg"
            alt="Logo Kasa"
          />
        </div>
        <ul className="nav-links">
          <li className="home">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Accueil
            </NavLink>
          </li>
          <li className="about">
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
