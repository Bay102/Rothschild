import '/src/App.css';
import styles from './home.module.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { CardItem } from '../CardItem/CardItem';
import { Reveal } from '../Framer/Reveal';
import { RouteReveal } from '../Framer/RouteReveal';
import MailChimpForm from '../MailChimp/MailChimpForm';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <RouteReveal>
        <section className={`${styles.heroImg}`}>
          <div className={`${styles.intro}`}>
            <h2>
              Creating Stronger Communities.
              <br /> Building a Better You.
            </h2>
            <p>
              The Rothschild Trust is committed to supporting individuals and
              groups who strive to positively impact their communities through
              innovation and service.
            </p>
            <div className={styles.buttons}>
              <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
                <button className="donateButton">Donate</button>
              </a>
              <a href="https://us21.list-manage.com/contact-form?u=7cad91f31e2da880ec14378c5&form_id=85645ca2c39c60e399aa1fc9ace599dc">
                <button className="connectButton">Connect With Us</button>
              </a>
            </div>
          </div>
        </section>
      </RouteReveal>
      <section className={styles.ourMissionContainer}>
        <div className="contentContainer">
          <div className={`${styles.missionImg}`}>
            <img
              className={styles.missionHands}
              src="/ourMissonHands.jpeg"
              alt="MissionPic"
            />
          </div>
          <div className="contentText">
            <Reveal>
              <h3>Our Mission</h3>
            </Reveal>
            <p>
              The Rothschild Trust is committed to supporting individuals and
              groups who strive to positively impact their communities through
              innovation and service. With a firm belief in the power of
              groundbreaking ideas, we diligently identify and nurture projects
              that address social challenges and yield significant outcomes.
            </p>
            <br />
            <p>
              {' '}
              By leveraging their expertise and experience, we aim to amplify
              their efforts and collectively drive meaningful change on a larger
              scale. Our funding initiatives empower recipients to bring their
              dreams to life and make a lasting difference. By launching new
              ventures or expanding existing efforts, our grants enable
              individuals and organizations to tackle critical issues across
              various sectors, including health, education, environment, and
              community development.
            </p>
            <br />
          </div>
        </div>

        <div className="iconContainer">
          <h3>Our Focus</h3>
          <div className="iconCards">
            <CardItem
              imageSrc="/Group 142.svg"
              title="Education"
              description="We fund projects focusing on early childhood education, K-12 education, higher education, and vocational and technical training."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 144.svg"
              title="Community"
              description="Through our grants, we strive to create opportunities for individuals and groups to unite."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 143.svg"
              title="Healthcare"
              description="We prioritize funding towards enhancing primary care, behavioral health, and critical emergency care services."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 139.svg"
              title="Nutrition"
              description="Our focus is on funding projects that adopt a comprehensive approach to nutrition, considering food security and other social determinants of health, including poverty."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 145.svg"
              title="Justice"
              description="We are committed to forging a path towards a more egalitarian and nonviolent society, both within the United States and internationally."
              className="cardContainer"
            />
            <CardItem
              imageSrc="/Group 146.svg"
              title="Innovation"
              description=" Our grants empower organizations to conduct cutting-edge research and development, experiment with new and innovative approaches, and expand successful models."
              className="cardContainer"
            />
          </div>
        </div>
      </section>

      <section className={styles.supportUsContainer}>
        <div className="contentContainer">
          <div className="contentText">
            <Reveal>
              <h3>Support Us</h3>
            </Reveal>
            <p>
              Join our passionate journey to make a meaningful impact on society
              through targeted philanthropy. At the heart of our mission is a
              deep-seated commitment to creating positive change in communities
              around the globe. Our sophisticated approach to grant-making,
              driven by strategic partnerships with our grantees, allows us to
              unlock opportunities and empower underserved populations.
            </p>
            <br />

            <p>
              As a catalyst for social impact, we take immense pride in our role
              as change-makers. We are dedicated to incubating impactful
              initiatives that not only address pressing issues but also pave
              the way for a brighter future. Your support is the driving force
              behind our endeavors, and together, we can continue to uplift,
              inspire, and transform countless lives.
            </p>

            <br />
            <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
              <button className="donateButton">Donate</button>
            </a>
          </div>
          <div className={`${styles.supportImg} imgWrapper`}>
            <img className="contentImg" src="/supportHands.jpeg" alt="" />
          </div>
        </div>

        <div className={styles.newsLetterContainer}>
          <MailChimpForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};
