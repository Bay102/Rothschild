import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
// import { useState } from 'react';

export const Navbar = () => {
  // const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  // const [showInvolvedDropdown, setShowInvolvedDropdown] = useState(false);

  // const toggleDropdown = (
  //   dropdown: React.Dispatch<React.SetStateAction<boolean>>
  // ) => {
  //   dropdown(true);
  //   setTimeout(() => {
  //     dropdown(false);
  //   }, 3500);
  // };

  return (
    <nav className={styles.navContainer}>
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
          {/* {showAboutDropdown && (
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
          )} */}
        </li>
        <li>
          <NavLink to="/our-work" className={styles.navLink}>
            OUR WORK
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
          {/* {showInvolvedDropdown && (
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
          )} */}
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
