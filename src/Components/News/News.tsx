import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import styles from './news.module.css';

export const News = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>
        <img
          style={{ width: '100%', height: 'max-content' }}
          src="/ComingSoon.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};
