import { NavLink } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styles from './home.module.css';
import navStyles from '../Navbar/navbar.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <section className={styles.sectionOne}>
        <h1>THE ROTHSCHILD TRUST</h1>
        <h3>Creating Stronger Communities. Building a Better You</h3>
        <div className={styles.learnMore}>
          <NavLink to={'/'} className={navStyles.black}>
            LEARN MORE
          </NavLink>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};
