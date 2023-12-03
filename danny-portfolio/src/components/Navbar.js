import React from "react";
import "./Navbar.css";
import linkedin from "../linkedin.svg";
import github from "../github.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Danny De La Rosa
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dannydlr/" target="blank">
            <img src={linkedin} alt="LinkedIn" className="Icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Danny-DeLaRosa" target="blank">
            <img src={github} alt="GitHub" className="Icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
