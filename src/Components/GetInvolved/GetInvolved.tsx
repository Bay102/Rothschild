import '/src/App.css';
import { motion } from 'framer-motion';
import styles from './getInvolved.module.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Reveal } from '../Framer/Reveal';

export const GetInvolved = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={`${styles.heroImg} hero`}>
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <q>
            We are committed to driving transformative change by fostering
            innovation and incubating ideas that make a real difference.
          </q>
        </motion.p>
      </section>
      <section className={styles.sectionTwo}>
        <div className={`${styles.support} contentContainer`}>
          <div className="contentText">
            <h3>Support Us</h3>
            <Reveal>
              <p>
                At The Rothschild Trust, we embrace an innovative funding
                approach that sets us apart from traditional trusts. Instead of
                solely relying on established trust funds, we actively engage in
                fundraising and form strategic alliances with individuals and
                organizations who share our goals and believe in our mission.
                Through planned and one-time giving, our partners play a pivotal
                role in the success of our incubator projects.
              </p>
            </Reveal>
            <Reveal direction="right">
              <p>
                This distinctive model enables us to remain adaptable and
                responsive to the ever-evolving realities and needs of the
                communities we serve. It empowers us to dynamically allocate
                resources where they are generating maximum impact. Our esteemed
                partners, from individuals to organizations, consciously decide
                to invest in creating better futures and become co-developers of
                change. Whether it's a one-time gift or a planned contribution,
                every donation propels us closer to our objectives, igniting
                innovation and driving sustainable and meaningful progress.
              </p>
            </Reveal>
            {/* <button className={styles.learnButton}>Learn More</button> */}
          </div>
          <div className={`${styles.supportImg} imgWrapper`}>
            <img className="contentImg" src="Rectangle75.png" alt="" />
          </div>
        </div>

        <div className="contentContainer">
          <div className={`${styles.mentoringImg} imgWrapper`}>
            <img className="contentImg" src="visionPic.png" alt="" />
          </div>
          <div className="contentText">
            {' '}
            <h3>Our Vision</h3>
            <Reveal direction="right">
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
            <Reveal>
              <p>
                {' '}
                The Trust's vision is deeply rooted in the Rothschilds'
                commitment to community service and empowerment. Just as the
                Rothschilds used their gastronomic ventures to create local
                jobs, serve locally sourced ingredients, and foster
                personalized, community-oriented service, the Trust seeks to
                empower individuals within the service industry to be pioneers
                of change, making an impact both in and outside their field. The
                Trust's vision is anchored in its five cardinal values: Service,
                Hospitality, Passion, Fun, and Integrity. These values reflect
                the Rothschilds' ethos of selfless giving,
              </p>
            </Reveal>
            {/* <button className={styles.donateButton}>Learn More</button> */}
          </div>
        </div>
      </section>

      <section className={styles.sectionThree}>
        <div className={`${styles.join} contentContainer`}>
          <div className="contentText">
            <h3>Join Our Board</h3>
            <Reveal>
              <p>
                At The Rothschild Trust, we embrace an innovative funding
                approach that sets us apart from traditional trusts. Instead of
                solely relying on established trust funds, we actively engage in
                fundraising and form strategic alliances with individuals and
                organizations who share our goals and believe in our mission.
                Through planned and one-time giving, our partners play a pivotal
                role in the success of our incubator projects.
              </p>
            </Reveal>
            <Reveal direction="right">
              <p>
                {' '}
                This distinctive model enables us to remain adaptable and
                responsive to the ever-evolving realities and needs of the
                communities we serve. It empowers us to dynamically allocate
                resources where they are generating maximum impact. Our esteemed
                partners, from individuals to organizations, consciously decide
                to invest in creating better futures and become co-developers of
                change. Whether it's a one-time gift or a planned contribution,
                every donation propels us closer to our objectives, igniting
                innovation and driving sustainable and meaningful progress.
              </p>
            </Reveal>

            {/* <button className={styles.learnButton}>Learn More</button> */}
          </div>
          <div className={`${styles.joinImg} imgWrapper`}>
            <img className="contentImg" src="joinBoard.png" alt="" />
          </div>
        </div>

        <div className={`contentContainer ${styles.marginOff}`}>
          <div className={`${styles.careersImg} imgWrapper`}>
            <img className="contentImg" src="careers.png" alt="" />
          </div>
          <div className={`contentText ${styles.careersText}`}>
            <h3>Careers</h3>
            <Reveal direction="right">
              <p>
                We are committed to driving transformative change by fostering
                innovation and incubating ideas that make a real difference.
                We're seeking visionary leaders who are passionate about making
                a lasting impact to join our esteemed Board. As a board member,
                you'll play a crucial role in shaping our strategic direction,
                influencing our funding decisions, and championing the
                implementation of impactful projects. Our board members are more
                than just figureheads; they're catalysts for change. With your
                diverse experience, knowledge, and insights, you'll complement
                our dynamic board, adding a unique perspective and helping us
                steer our efforts toward the most promising, impactful
                initiatives.
              </p>
            </Reveal>
            <Reveal>
              <p>
                As part of The Rothschild Trust Board, you'll have the
                opportunity to influence our mission on a larger scale, helping
                us to incubate and foster ideas that will ignite meaningful
                change. This is more than a position; it's a chance to be part
                of a transformative journey. If you're inspired by our mission
                and excited by the prospect of helping to shape the future, we
                would love to hear from you.
              </p>
            </Reveal>
            {/* <button className={styles.donateButton}>Learn More</button> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
