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
    <>
      <div className={styles.footerContainer}>
        <div className={styles.one}>
          <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
          <p>
            Creating Stronger Communities
            <br /> Building a Better You
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
          <NavLink
            to={'/news'}
            onClick={handleClick}
            className={styles.navLink}
          >
            {' '}
            News
          </NavLink>
          <NavLink to={'{}'} onClick={handleClick} className={styles.navLink}>
            {' '}
            Contact Us
          </NavLink>
          <NavLink
            to={'/privacy-policy'}
            onClick={handleClick}
            className={styles.navLink}
          >
            {' '}
            Privacy Policy
          </NavLink>
          {/* <li>Terms and Service</li> */}
        </div>
        <div className={styles.three}>
          <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
            <button className="donateButton">Donate</button>
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        The Rothschild Trust is a registered 501(c)(3) organization. All
        donations are tax-deductible.
      </div>
    </>
  );
};
