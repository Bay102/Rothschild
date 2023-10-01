import { Footer } from '../Footer/Footer';
import MailChimpForm from '../MailChimp/MailChimpForm';
import { Navbar } from '../Navbar/Navbar';
import styles from './news.module.css';

export const News = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.background}>
        <div className={styles.formWrapper}>
          <h2> NEWS COMING SOON!</h2>
          <div className={styles.form}>
            {' '}
            <MailChimpForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
