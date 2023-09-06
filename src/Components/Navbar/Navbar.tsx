import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav className={`${styles.navContainer}`}>
      <div className={`${styles.navList}`}>
        <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
        <div className={styles.hamburger} onClick={toggleNav}>
          <AiOutlineMenu />
        </div>
        <ul className={mobileNav ? `${styles.showNav}` : `${styles.hideNav}`}>
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
      </div>
    </nav>
  );
};
