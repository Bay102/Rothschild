import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
// import { useState } from 'react';

export const Navbar = () => {
  return (
    <nav className={`${styles.navContainer}`}>
      <ul className={styles.navList}>
        <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
        <div className={styles.hamburger}>
          <AiOutlineMenu />
        </div>
        <li>
          <NavLink to="/" className={styles.navLink}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={styles.navLink}>
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink to="/grants" className={styles.navLink}>
            GRANTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/get-involved" className={styles.navLink}>
            GET INVOLVED
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={styles.navLink}>
            NEWS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
