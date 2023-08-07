import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { useState } from 'react';

export const Navbar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showInvolvedDropdown, setShowInvolvedDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(true);
    setTimeout(() => {
      setShowAboutDropdown(false);
    }, 4500);
  };

  const toggleInvolvedDropdown = () => {
    setShowInvolvedDropdown(true);
    setTimeout(() => {
      setShowInvolvedDropdown(false);
    }, 4500);
  };

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={styles.navLink}>
            HOME
          </NavLink>
        </li>
        <li onMouseEnter={toggleAboutDropdown}>
          <NavLink to="/" className={styles.navLink}>
            ABOUT US
          </NavLink>
          {showAboutDropdown && (
            <ul className={styles.dropDown}>
              <li>
                <NavLink to="/">OUR STORY</NavLink>
              </li>
              <li>
                <NavLink to="/">OUR VISION</NavLink>
              </li>
              <li>
                <NavLink to="/">CORE VALUES</NavLink>
              </li>
              <li>
                <NavLink to="/">WHO WE ARE</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/" className={styles.navLink}>
            OUR WORK
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.navLink}>
            GRANTS
          </NavLink>
        </li>
        <li
          onMouseEnter={toggleInvolvedDropdown}
          // onMouseLeave={toggleInvolvedDropdown}
        >
          <NavLink to="/" className={styles.navLink}>
            GET INVOLVED
          </NavLink>
          {showInvolvedDropdown && (
            <ul className={styles.dropDown}>
              <li>
                <NavLink to="/">SUPPORT US</NavLink>
              </li>
              <li>
                <NavLink to="/">MENTORING</NavLink>
              </li>
              <li>
                <NavLink to="/">JOIN OUR BOARD</NavLink>
              </li>
              <li>
                <NavLink to="/">CAREERS</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/" className={styles.navLink}>
            NEWS
          </NavLink>
        </li>
        <li className={`${styles.pushRight} ${styles.navButton} ${styles.contact}`}>
          <NavLink to="/" className={`${styles.navLink} ${styles.black}`}>
            CONTACT
          </NavLink>
        </li>
        <li className={`${styles.navLink} ${styles.navButton} ${styles.donate}`}>
          <NavLink to="/" className={`${styles.navLink} ${styles.black}`}>
            DONATE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
