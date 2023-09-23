import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.one}>
        <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
        <p>
          Creating stronger communities
          <br /> Building a better you
        </p>
      </div>
      <div className={styles.two}>
        <NavLink to={'/'} onClick={handleClick} className={styles.navLink}>
          {' '}
          Home
        </NavLink>
        <NavLink
          to={'/about-us'}
          onClick={handleClick}
          className={styles.navLink}
        >
          {' '}
          About
        </NavLink>
        <NavLink
          to={'/grants'}
          onClick={handleClick}
          className={styles.navLink}
        >
          {' '}
          Grants
        </NavLink>
        <NavLink
          to={'/get-involved'}
          onClick={handleClick}
          className={styles.navLink}
        >
          {' '}
          Get Involved
        </NavLink>
        <NavLink to={'/news'} onClick={handleClick} className={styles.navLink}>
          {' '}
          News
        </NavLink>
        <NavLink to={'{}'} onClick={handleClick} className={styles.navLink}>
          {' '}
          Contact Us
        </NavLink>
        <NavLink to={'{}'} onClick={handleClick} className={styles.navLink}>
          {' '}
          Privacy Policy
        </NavLink>
        {/* <li>Terms and Service</li> */}
      </div>
      <div className={styles.three}>
        <button className={styles.donateButton}>Donate</button>
      </div>
    </div>
  );
};
