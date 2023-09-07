import '/src/App.css';
import styles from './grants.module.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { CardItem } from '../CardItem/CardItem';

export const Grants = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <section className={`${styles.heroImg} hero`}></section> */}
      <section className={`iconContainer ${styles.iconWrapper}`}>
        <h3>Our Process</h3>
        <div className="iconCards">
          <CardItem
            imageSrc="/class.svg"
            title="Forming Relationships"
            description=""
          />
          <CardItem
            imageSrc="/sport.svg"
            title="Discovering shared interests"
            description=""
          />
          <CardItem imageSrc="/abacus.svg" title="Forecasting" description="" />
          <CardItem
            imageSrc="/Homework.svg"
            title="Developing a grant approval"
            description=""
          />
          <CardItem
            imageSrc="/history.svg"
            title="Due diligence and vetting"
            description=""
          />
          <CardItem
            imageSrc="/calendar.svg"
            title="Decision making a board approved"
            description=""
          />
          <CardItem imageSrc="/Diploma.svg" title="Grant award" description="" />
          <CardItem
            imageSrc="/Research.svg"
            title="Impact reports and analysis"
            description=""
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};
