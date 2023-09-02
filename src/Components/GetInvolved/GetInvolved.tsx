import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import styles from './getInvolved.module.css';

export const GetInvolved = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.sectionOne}>
        <p>
          <q>
            We are committed to driving transformative change by fostering innovation
            and incubating ideas that make a real difference.
          </q>
        </p>
      </section>
      <section className={styles.sectionTwo}></section>
      <section className={styles.sectionThree}></section>
      <Footer />
    </div>
  );
};
