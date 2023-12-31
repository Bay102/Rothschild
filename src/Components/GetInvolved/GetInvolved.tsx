import '/src/App.css';
import styles from './getInvolved.module.css';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Reveal } from '../Framer/Reveal';
import { RouteReveal } from '../Framer/RouteReveal';
import { RevealHeader } from '../Framer/RevealHeader';

export const GetInvolved = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <RouteReveal>
        <section className={`${styles.heroImg} hero`}>
          <div className={styles.buttons}>
            <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
              <button className="donateButton">Donate</button>
            </a>
            <a href="https://us21.list-manage.com/contact-form?u=7cad91f31e2da880ec14378c5&form_id=85645ca2c39c60e399aa1fc9ace599dc">
              <button className="connectButton">Connect With Us</button>
            </a>
          </div>
        </section>
      </RouteReveal>
      <section className={styles.sectionTwo}>
        <div className={`${styles.support} contentContainer`}>
          <div className="contentText">
            <Reveal>
              <h3>Support Us</h3>
            </Reveal>
            <p>
              At The Rothschild Trust, we embrace an innovative funding approach
              that sets us apart from traditional trusts. Instead of solely
              relying on established trust funds, we actively engage in
              fundraising and form strategic alliances with individuals and
              organizations who share our goals and believe in our mission.
              Through planned and one-time giving, our partners play a pivotal
              role in the success of our incubator projects.
            </p>
            <br />
            <p>
              This distinctive model enables us to remain adaptable and
              responsive to the ever-evolving realities and needs of the
              communities we serve. It empowers us to dynamically allocate
              resources where they are generating maximum impact. Our esteemed
              partners, from individuals to organizations, consciously decide to
              invest in creating better futures and become co-developers of
              change. Whether it's a one-time gift or a planned contribution,
              every donation propels us closer to our objectives, igniting
              innovation and driving sustainable and meaningful progress.
              <br />
              <a href="https://pages.donately.com/rothschildtrustcorp/form/frm_c23e2080004f">
                <button className="donateButton">Donate</button>
              </a>
            </p>
          </div>
          <div className={`${styles.supportImg} imgWrapper`}>
            <img className="contentImg" src="Rectangle75.png" alt="" />
          </div>
        </div>

        <div className="contentContainer">
          <div className={`${styles.mentoringImg} imgWrapper`}>
            <img className="contentImg" src="/mentoring.png" alt="" />
          </div>
          <div className="contentText">
            <RevealHeader>
              <h3>Mentoring</h3>
            </RevealHeader>
            <p>
              We believe in the power of collective wisdom. Our unique grant and
              incubator structure facilitates a mentorship program that pairs
              mentors with our grantees and partners. This pairing denotes a
              valuable exchange of knowledge, insights, and experience. Mentors
              provide subject matter expertise, strategic guidance, and
              continual support, ensuring that our partners and grantees are
              well-equipped to navigate the complexities of their projects. By
              acting as a sounding board, mentors foster an environment that
              encourages free thinking, creativity, and innovation. This
              mentorship relationship significantly amplifies the likelihood of
              success and yields more impactful outcomes.
            </p>
            <br />
            <p>
              If you are a seasoned professional, passionate about driving
              change, and eager to share your knowledge and experience, we
              invite you to join us in this transformative journey. As a mentor,
              you will find the experience rewarding and fulfilling, knowing
              that your guidance has the potential to ignite meaningful change.
              Contact us at trust@rothschildlawrence.com to learn more about our
              mentorship program and how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionThree}>
        <div className={`${styles.join} contentContainer`}>
          <div className="contentText">
            <Reveal>
              <h3>Join Our Board</h3>
            </Reveal>
            <p>
              We are committed to driving transformative change by fostering
              innovation and incubating ideas that make a real difference. We're
              seeking visionary leaders who are passionate about making a
              lasting impact to join our esteemed Board. As a board member,
              you'll play a crucial role in shaping our strategic direction,
              influencing our funding decisions, and championing the
              implementation of impactful projects. Our board members are more
              than just figureheads; they're catalysts for change. With your
              diverse experience, knowledge, and insights, you'll complement our
              dynamic board, adding a unique perspective and helping us steer
              our efforts toward the most promising, impactful initiatives.
            </p>
            <br />
            <p>
              As part of The Rothschild Trust Board, you'll have the opportunity
              to influence our mission on a larger scale, helping us to incubate
              and foster ideas that will ignite meaningful change. This is more
              than a position; it's a chance to be part of a transformative
              journey. If you're inspired by our mission and excited by the
              prospect of helping to shape the future, we would love to hear
              from you.
            </p>
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
            <RevealHeader>
              <h3>Careers</h3>
            </RevealHeader>
            <p>
              We're always looking for passionate, innovative individuals ready
              to make a positive impact. If you're looking to build a rewarding
              and meaningful career, we'd love to hear from you. We offer
              various positions spanning project management, grant
              administration, mentorship programs, and strategic planning. As a
              team member, you'll be able to create innovative projects with
              significant societal impact.
            </p>
            <br />
            <p>
              We believe in fostering a diverse, inclusive environment. The
              Rothschild Trust is an Equal Opportunity Employer. We welcome
              candidates from all backgrounds, especially those with lived
              experience in our focus areas, previously incarcerated
              individuals, or those with family members affected by the justice
              system, healthcare inequities, or poverty. We highly value
              work-life balance and strive to offer our employees ample
              opportunities for personal and professional growth throughout
              their tenure with us.
            </p>
            <br />
            <p>
              If you're ready to be a part of a team making a concrete
              difference in the world, we welcome you to explore our current job
              openings. We offer competitive compensation, a supportive work
              environment, opportunities for personal and professional growth,
              and the chance to be a part of a transformative journey. Ready to
              embark on a career with impact? Together, let's change the world,
              one project at a time.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
