import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import "./style.scss";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
        <Link to="/">
          <img alt="pokemon logo" src={logo} className="navbar-img" />
        </Link>
        <ul className="navbar-links">
          <li><Link className="link-route" to="/">Home</Link></li>
          <li><Link className="link-route" to="/pokemons">Pokemons</Link></li>
          <li><Link className="link-route" to="/contact">Contato</Link></li>
        </ul>
    </nav>
  );
};

