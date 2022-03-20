import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/Search"
            >
              Search
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              ClassName={(navData) => (navData.isActive ? styles.active : "")}
              to="/page-three"
            >
              Page Three
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
