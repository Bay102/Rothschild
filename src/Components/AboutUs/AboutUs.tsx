import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import styles from './aboutUs.module.css';

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.section}>
        <p>
          <q>
            {' '}
            The Rothschild Trust envisions a world where the service industry is
            celebrated for its contributions to society, and creativity, healing, and
            innovation are at the forefront of its mission.
          </q>
        </p>
      </div>
      <div className={styles.sectionTwo}></div>

      <div className={styles.sectionThree}></div>
      <Footer />
    </div>
  );
};
