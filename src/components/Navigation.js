import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/coups-de-coeur"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Coups de Coeur</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
