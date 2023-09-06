import '/src/App.css';
import styles from './grants.module.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Grants = () => {
  return (
    <div className={styles.container}>
      <section className={`${styles.heroImg} hero`}>
        <Navbar />
      </section>
      <Footer />
    </div>
  );
};
