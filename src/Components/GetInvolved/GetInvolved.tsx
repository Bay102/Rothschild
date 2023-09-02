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
      <section className={styles.sectionTwo}>
        <div className={styles.supportUsContainer}>
          <div className={styles.supportLeft}>
            {' '}
            <h3>Support Us</h3>
            <p>
              At The Rothschild Trust, we embrace an innovative funding approach that
              sets us apart from traditional trusts. Instead of solely relying on
              established trust funds, we actively engage in fundraising and form
              strategic alliances with individuals and organizations who share our
              goals and believe in our mission. Through planned and one-time giving,
              our partners play a pivotal role in the success of our incubator
              projects.
              <br />
              <br />
              This distinctive model enables us to remain adaptable and responsive to
              the ever-evolving realities and needs of the communities we serve. It
              empowers us to dynamically allocate resources where they are generating
              maximum impact. Our esteemed partners, from individuals to
              organizations, consciously decide to invest in creating better futures
              and become co-developers of change. Whether it's a one-time gift or a
              planned contribution, every donation propels us closer to our
              objectives, igniting innovation and driving sustainable and meaningful
              progress.
            </p>
            {/* <button className={styles.learnButton}>Learn More</button> */}
          </div>
          <div className={styles.supportRight}></div>
        </div>
        <div className={styles.mentoringContainer}>
          <div className={styles.mentoringLeft}></div>
          <div className={styles.mentoringRight}>
            {' '}
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
        </div>
      </section>

      <section className={styles.sectionThree}></section>
      <Footer />
    </div>
  );
};
