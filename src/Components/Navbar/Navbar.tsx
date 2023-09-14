import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  const navItemVariants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <nav className={`${styles.navContainer}`}>
      <div className={`${styles.navList}`}>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0, type: 'spring', stiffness: 110 }}
          className={styles.logo}
        >
          THE ROTHSCHILD TRUST
        </motion.div>
        <div className={styles.hamburger} onClick={toggleNav}>
          <AiOutlineMenu />
        </div>
        <ul className={mobileNav ? `${styles.showNav}` : `${styles.hideNav}`}>
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/" className={`${styles.navLink}`}>
              HOME
            </NavLink>
          </motion.li>
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/about-us" className={styles.navLink}>
              ABOUT US
            </NavLink>
          </motion.li>
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/grants" className={styles.navLink}>
              GRANTS
            </NavLink>
          </motion.li>
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/get-involved" className={styles.navLink}>
              GET INVOLVED
            </NavLink>
          </motion.li>
          <motion.li variants={navItemVariants} whileHover="hover">
            <NavLink to="/news" className={styles.navLink}>
              NEWS
            </NavLink>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};
