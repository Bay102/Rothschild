import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            HOME
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            ABOUT
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            OUR WORK
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            GRANTS
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            GET INVOLVED
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/" className={styles.navLink}>
            NEWS
          </NavLink>
        </li>
        <li className={`${styles.pushRight} ${styles.navButton} ${styles.contact}`}>
          {' '}
          <NavLink to="/" className={`${styles.navLink} ${styles.black}`}>
            CONTACT
          </NavLink>
        </li>
        <li className={`${styles.navLink} ${styles.navButton} ${styles.donate}`}>
          {' '}
          <NavLink to="/" className={`${styles.navLink} ${styles.black}`}>
            DONATE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
