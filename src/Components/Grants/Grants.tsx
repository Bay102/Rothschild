import '/src/App.css';
import styles from './grants.module.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { CardItem } from '../CardItem/CardItem';
import { RouteReveal } from '../Framer/RouteReveal';
import MailChimpForm from '../MailChimp/MailChimpForm';

export const Grants = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <RouteReveal>
        <section className={`${styles.heroImg} hero`}>
          <div className={`${styles.intro}`}>
            <h2>
              Unlock Opportunities and Amplify Your Impact With Our
              Comprehensive Grants Program Designed To Fuel Your Innovative
              Initiatives.
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
      <section className={styles.form}>
        <MailChimpForm />
      </section>
      <section className={`iconContainer ${styles.iconWrapper}`}>
        <h3>Our Process</h3>
        <div className={`${styles.cards}`}>
          <CardItem
            imageSrc="/class.svg"
            title="Forming Relationships"
            description="Our initial step involves establishing a strong alliance with partners based on their alignment with our mission and goals. "
            className="grantCards"
          />
          <CardItem
            imageSrc="/sport.svg"
            title="Discovering shared interests"
            description="Through open dialogue and information exchange, we identify areas where our objectives converge, setting the stage for mutual cooperation."
            className="grantCards"
          />
          <CardItem
            imageSrc="/abacus.svg"
            title="Forecasting"
            description="Prior to formally drafting a grant proposal, we collaborate with the partner to carefully conduct a gap analysis and craft an impact forecast. This involves predicting the proposed project's potential social, economic, and environmental outcomes."
            className="grantCards"
          />
          <CardItem
            imageSrc="/Homework.svg"
            title="Developing a grant approval"
            description="Armed with a clear understanding of shared interests, we collaborate in developing a robust grant proposal that outlines the project, its objectives, execution plan, and potential impact."
            className="grantCards"
          />
          <CardItem
            imageSrc="/history.svg"
            title="Due diligence and vetting"
            description="A thorough vetting process ensues, where we scrutinize the proposal for its viability, sustainability, and potential to deliver on the stipulated objectives. Additionally, we verify that the individual and organization adhere to legal and ethical standards, ensuring utmost integrity."
            className="grantCards"
          />
          <CardItem
            imageSrc="/calendar.svg"
            title="Decision making a board approved"
            description="The grant proposal is presented to our board for final approval. Their decision is based on the project's merits, alignment with our goals, and potential for impactful change."
            className="grantCards"
          />
          <CardItem
            imageSrc="/Diploma.svg"
            title="Grant award"
            description="Upon obtaining board approval, the grant is awarded to the partner organization for the execution of the project."
            className="grantCards"
          />
          <CardItem
            imageSrc="/Research.svg"
            title="Impact reports and analysis"
            description="The final stage of our process involves the grantees' regular submission of impact reports. These reports are meticulously analyzed to evaluate the project's effectiveness and to chart the course for future initiatives."
            className="grantCards"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};
