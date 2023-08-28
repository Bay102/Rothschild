// import { NavLink } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styles from './home.module.css';
import { Footer } from '../Footer/Footer';
import { CardItem } from '../CardItem/CardItem';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.section}>
        <Navbar />
        <div className={styles.intro}>
          <h2>Building stronger communities.<br /> Building a stronger you.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima jufuea</p>
          <div className={styles.buttons}>
            <button style={{background: '#CE392C'}}>Donate</button>
            <button style={{background: '#ED8042'}}>Learn More</button>
          </div>
        </div>
      </div>
      <section className={styles.sectionOne}></section>
      <section className={styles.ourMissionContainer}>
        <div className={styles.topContainer}></div>
        <div className={styles.ourFocusContainer}>
          <h3>Our Focus</h3>
          <div className={styles.focusCards}>
            <CardItem imageSrc="src/public/assets/Group 139.svg" title="Education" description="We fund projects focusing on early childhood education, K-12 education, higher education, and vocational and technical training." />
            <CardItem imageSrc="src/public/assets/Group 144.svg" title="Community" description="Through our grants, we strive to create opportunities for individuals and groups to unite." />
            <CardItem imageSrc="src/public/assets/Group 143.svg" title="Healthcare" description="We prioritize funding towards enhancing primary care, behavioral health, and critical emergency care services." />
            <CardItem imageSrc="src/public/assets/Group 139.svg" title="Nutrition" description="Our focus is on funding projects that adopt a comprehensive approach to nutrition, considering food security and other social determinants of health, including poverty." />
            <CardItem imageSrc="src/public/assets/Group 145.svg" title="Justice" description="We are committed to forging a path towards a more egalitarian and nonviolent society, both within the United States and internationally." />
            <CardItem imageSrc="src/public/assets/Group 146.svg" title="Innovation" description=" Our grants empower organizations to conduct cutting-edge research and development, experiment with new and innovative approaches, and expand successful models." />
          </div>
        </div>
      </section>

      <section className={styles.supportUsContainer}>
        <div className={styles.supportContentContainer}>
          <div className={styles.supportLeft}></div>
          <div className={styles.supportRight}></div>
        </div>
        <div className={styles.newsLetterContainer}>
          <h3>Join Our Newsletter</h3>
          <p>
            Asperiores magnam iusto labore reiciendis ut eos necessitatibus possimus,
            sapiente dicta doloribus quos cupiditate cumque quisquam odit
            voluptatibus!
          </p>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <button>Sign Up</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
