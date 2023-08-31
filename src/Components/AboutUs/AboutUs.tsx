import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import styles from './aboutUs.module.css';

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.heroSection}>
        <p>
          <q>
            {' '}
            The Rothschild Trust envisions a world where the service industry is
            celebrated for its contributions to society, and creativity, healing, and
            innovation are at the forefront of its mission.
          </q>
        </p>
      </section>
      <div className={styles.sectionTwo}>
        <div className={styles.storyContainer}>
          <div className={styles.storyLeft}></div>
          <div className={styles.storyRight}>
            <h3>Our Story</h3>
            <p>
              Larry and Rhoda Rothschild embarked on a gastronomic adventure driven
              by their desire to share their culinary creativity with the community.
              Their journey began humbly with a Jewish deli, embodying the essence of
              tradition, quality, and community connection. Initially a local
              establishment, it delighted patrons with classic Jewish delicacies like
              corned beef and pastrami sandwiches, matzo ball soup, and hoagies.
              Through the years, its reputation grew through word-of-mouth and the
              unwavering excellence of its offerings, solidifying its place as a
              beloved fixture in the community.
              <br /><br />
              Fueled by their entrepreneurial spirit, the Rothschilds extended their
              reach, establishing a series of restaurants and catering businesses on
              the outskirts of Philadelphia. Each venue exuded a unique charm,
              blending their distinctive tastes with warm hospitality. sed.
            </p>
            <button className={styles.learnButton}>Learn More</button>
          </div>
        </div>
        <div className={styles.visionContainer}>
          <div className={styles.visionLeft}>
            <h3>Our Vision</h3>
            <p>
              The Rothschild Trust envisions a world where the service industry is
              celebrated for its contributions to society, and creativity, healing,
              and innovation are at the forefront of its mission. The Trust sees a
              future where individuals within the service industry are empowered,
              equipped, and supported to thrive in their craft and make meaningful
              contributions to their community.
              <br />
              <br />
              The Trust's vision is deeply rooted in the Rothschilds' commitment to
              community service and empowerment. Just as the Rothschilds used their
              gastronomic ventures to create local jobs, serve locally sourced
              ingredients, and foster personalized, community-oriented service, the
              Trust seeks to empower individuals within the service industry to be
              pioneers of change, making an impact both in and outside their field.
              <br />
              <br />
              The Trust's vision is anchored in its five cardinal values: Service,
              Hospitality, Passion, Fun, and Integrity. These values reflect the
              Rothschilds' ethos of selfless giving,
            </p>
            {/* <button className={styles.donateButton}>Learn More</button> */}
          </div>

          <div className={styles.visionRight}> </div>
        </div>
      </div>

      <div className={styles.sectionThree}></div>
      <Footer />
    </div>
  );
};
