// import { NavLink } from 'react-router-dom';
import '/src/App.css';
import 'animate.css';
import styles from './home.module.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { CardItem } from '../CardItem/CardItem';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <section className={`${styles.heroImg}`}>
        <div className={`${styles.intro} animate__animated animate__bounceInUp`}>
          <h2>
            Creating stronger communities.
            <br /> Building a better you.
          </h2>
          <p>
            The Rothschild Trust is committed to supporting individuals and groups
            who strive to positively impact their communities through innovation and
            service.
          </p>
          <div className={styles.buttons}>
            <button style={{ background: '#CE392C' }}>Donate</button>
            <button style={{ background: '#ED8042' }}>Learn More</button>
          </div>
        </div>
      </section>
      <section className={styles.ourMissionContainer}>
        <div className="contentContainer">
          <div className={`${styles.missionImg} contentImg`}></div>
          <div className="contentText">
            <h3>Our Mission</h3>
            <p>
              The Rothschild Trust is committed to supporting individuals and groups
              who strive to positively impact their communities through innovation
              and service. With a firm belief in the power of groundbreaking ideas,
              we diligently identify and nurture projects that address social
              challenges and yield significant outcomes.
              <br />
              <br />
              By leveraging their expertise and experience, we aim to amplify their
              efforts and collectively drive meaningful change on a larger scale. Our
              funding initiatives empower recipients to bring their dreams to life
              and make a lasting difference. By launching new ventures or expanding
              existing efforts, our grants enable individuals and organizations to
              tackle critical issues across various sectors, including health,
              education, environment, and community development.
              <br />
              <br />
              We are proud to support transformative projects and initiatives that
              have the potential to change communities worldwide. sed.
            </p>
            <button className="donateButton">Learn More</button>
          </div>
        </div>
        <div className="iconContainer">
          <h3>Our Focus</h3>
          <div className="iconCards">
            <CardItem
              imageSrc="/Group 142.svg"
              title="Education"
              description="We fund projects focusing on early childhood education, K-12 education, higher education, and vocational and technical training."
            />
            <CardItem
              imageSrc="/Group 144.svg"
              title="Community"
              description="Through our grants, we strive to create opportunities for individuals and groups to unite."
            />
            <CardItem
              imageSrc="/Group 143.svg"
              title="Healthcare"
              description="We prioritize funding towards enhancing primary care, behavioral health, and critical emergency care services."
            />
            <CardItem
              imageSrc="/Group 139.svg"
              title="Nutrition"
              description="Our focus is on funding projects that adopt a comprehensive approach to nutrition, considering food security and other social determinants of health, including poverty."
            />
            <CardItem
              imageSrc="/Group 145.svg"
              title="Justice"
              description="We are committed to forging a path towards a more egalitarian and nonviolent society, both within the United States and internationally."
            />
            <CardItem
              imageSrc="/Group 146.svg"
              title="Innovation"
              description=" Our grants empower organizations to conduct cutting-edge research and development, experiment with new and innovative approaches, and expand successful models."
            />
          </div>
        </div>
      </section>

      <section className={styles.supportUsContainer}>
        <div className="contentContainer">
          <div className="contentText">
            <h3>Support Us</h3>
            <p style={{ lineHeight: 2 }}>
              Join our passionate journey to make a meaningful impact on society
              through targeted philanthropy. At the heart of our mission is a
              deep-seated commitment to creating positive change in communities
              around the globe. Our sophisticated approach to grant-making, driven by
              strategic partnerships with our grantees, allows us to unlock
              opportunities and empower underserved populations.
              <br />
              <br />
              As a catalyst for social impact, we take immense pride in our role as
              change-makers. We are dedicated to incubating impactful initiatives
              that not only address pressing issues but also pave the way for a
              brighter future. Your support is the driving force behind our
              endeavors, and together, we can continue to uplift, inspire, and
              transform countless lives.
              <br />
            </p>
          </div>
          <div className={`${styles.supportImg} contentImg`}></div>
        </div>
        <div className={styles.newsLetterContainer}>
          <h3>Join Our Newsletter</h3>
          <p>
            Asperiores magnam iusto labore reiciendis ut eos necessitatibus possimus,
            sapiente dicta doloribus.
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
