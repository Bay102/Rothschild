import '/src/App.css';
import styles from './aboutUs.module.css';
import { CardItem } from '../CardItem/CardItem';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Reveal } from '../Framer/Reveal';
import { RouteReveal } from '../Framer/RouteReveal';

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <RouteReveal>
        <section className={`${styles.heroSection} hero`}>
          <div className={`${styles.intro}`}>
            <h2>
              {/* <q> */}
              The Rothschild Trust Envisions A World Where The Service Industry
              Is Celebrated For Its Contributions To Society
              {/* </q> */}
            </h2>
            <p>
              Where those in the service industry are recognized and valued for
              their essential role in shaping our communities and improving
              lives.
            </p>
            <div className={styles.buttons}>
              <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
                <button className="donateButton">Donate</button>
              </a>
            </div>
          </div>
        </section>
      </RouteReveal>
      <section className={styles.sectionTwo}>
        <div className="contentContainer">
          <div className={`${styles.storyImg} imgWrapper`}>
            <img className="contentImg" src="Rectangle22.png" alt="" />
          </div>
          <div className="contentText">
            <h3>Our Story</h3>
            <Reveal>
              <p>
                Larry and Rhoda Rothschild embarked on a gastronomic adventure
                driven by their desire to share their culinary creativity with
                the community. Their journey began humbly with a Jewish deli,
                embodying the essence of tradition, quality, and community
                connection. Initially a local establishment, it delighted
                patrons with classic Jewish delicacies like corned beef and
                pastrami sandwiches, matzo ball soup, and hoagies. Through the
                years, its reputation grew through word-of-mouth and the
                unwavering excellence of its offerings, solidifying its place as
                a beloved fixture in the community.
              </p>
            </Reveal>
            <br />
            <Reveal direction="right">
              <p>
                {' '}
                Fueled by their entrepreneurial spirit, the Rothschilds extended
                their reach, establishing a series of restaurants and catering
                businesses on the outskirts of Philadelphia. Each venue exuded a
                unique charm, blending their distinctive tastes with warm
                hospitality.
              </p>
            </Reveal>
            <br />
            {/* <button className={styles.learnButton}>Learn More</button> */}
          </div>
        </div>
        <div className="contentContainer">
          <div className="contentText">
            <h3>Our Vision</h3>
            <Reveal>
              <p>
                {' '}
                The Rothschild Trust envisions a world where the service
                industry is celebrated for its contributions to society, and
                creativity, healing, and innovation are at the forefront of its
                mission. The Trust sees a future where individuals within the
                service industry are empowered, equipped, and supported to
                thrive in their craft and make meaningful contributions to their
                community.
              </p>
            </Reveal>
            <br />
            <Reveal direction="right">
              <p>
                {' '}
                The Trust's vision is deeply rooted in the Rothschilds'
                commitment to community service and empowerment. Just as the
                Rothschilds used their gastronomic ventures to create local
                jobs, serve locally sourced ingredients, and foster
                personalized, community-oriented service, the Trust seeks to
                empower individuals within the service industry to be pioneers
                of change, making an impact both in and outside their field.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                {' '}
                The Trust's vision is anchored in its five cardinal values:
                Service, Hospitality, Passion, Fun, and Integrity. These values
                reflect the Rothschilds' ethos of selfless giving,
              </p>
            </Reveal>
            <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
              <button className="donateButton">Donate</button>
            </a>
          </div>
          <div className={`${styles.visionImg} imgWrapper`}>
            <img className="contentImg" src="visionPic.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.sectionThree}>
        <div className="iconContainer">
          <h3>Core Values</h3>
          <div className="iconCards">
            <CardItem
              imageSrc="/Group 129.svg"
              title="Service"
              description="This value extends beyond the mere provision of goods and services; it encompasses the deeper meaning of serving others and contributing to the greater good."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 131.svg"
              title="Passion"
              description="Passion is the driving force that fuels the desire to create and innovate. It involves being authentic, driven and committed to one's craft."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 134.svg"
              title="Fun"
              description="Promoting a sense of playfulness and levity, creating an enjoyable and engaging environment is crucial in any line of work."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 130.svg"
              title="Hospitality"
              description="Hospitality encompasses more than just courteousness and attentiveness; it involves creating a comfortable and welcoming atmosphere."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 133.svg"
              title="Integrity"
              description="Honesty, transparency, and accountability are the cornerstones of our work. The Rothschilds have a reputation for being forthright and ethical."
              className="cardContainer"
            />
          </div>
        </div>
        <div className={styles.whoWeAreContainer}>
          <h2>Who We Are</h2>
          <div className={styles.peoplePicsContainer}>
            <div className={styles.personWrapper}>
              <img src="/Rectangle 111.png" alt="" />
              <h3>Carmen Facciolo</h3>
              <p>Board President</p>
            </div>
            <div className={styles.personWrapper}>
              <img src="/Rectangle 112.png" alt="" />
              <h3>Frances Lopez</h3>
              <p>General Counsel</p>
              <p>Board Member</p>
            </div>
            <div className={styles.personWrapper}>
              <img src="/Rectangle 113.png" alt="" />
              <h3>Lenore Lebron</h3>
              <p>Chief Impact Officer</p>
              <p>Board Member</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
