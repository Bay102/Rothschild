import { NavLink } from 'react-router-dom';
import styles from './privacyPolicy.module.css';

export const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <NavLink className={styles.close} to={'/'}>
        X Close
      </NavLink>
      <h3> Privacy Policy</h3>
      <h4>Last Updated: 09/25/2023</h4>
      <p>
        1. Introduction
        <br />
        Welcome to Rothschild Trust. We respect your privacy and are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your personal data when you
        visit our website and use our services. By accessing or using our
        website, you consent to the practices described in this Privacy Policy.
        If you do not agree with this Privacy Policy, please do not use our
        website or services.
        <br />
        <br />
        2. Information We Collect
        <br />
        We may collect various types of information from you, including:
        Personal Information: Information that can be used to identify you, such
        as your name, email address, postal address, and phone number.
        Non-Personal Information: Information that does not personally identify
        you, such as your IP address, browser type, and usage data.
        <br />
        <br />
        3. How We Use Your Information
        <br />
        We may use your information for the following purposes: To provide and
        maintain our website and services. To improve our website and services.
        To respond to your inquiries and provide customer support. To send you
        updates, newsletters, and marketing materials, where permitted by law.
        To detect and prevent fraudulent activities. To comply with legal
        obligations.
        <br />
        <br />
        4. Disclosure of Your Information
        <br />
        We may share your information with third parties under the following
        circumstances: With service providers who help us operate our website
        and provide services. To comply with legal obligations or protect our
        rights, privacy, safety, or property. In connection with a business
        transaction, such as a merger or acquisition. With your consent or as
        otherwise permitted or required by law.
        <br />
      </p>
      <p>
        <br />
        5. Cookies and Tracking Technologies
        <br />
        We may use cookies and similar tracking technologies to collect
        information about your usage of our website. You can manage your cookie
        preferences through your browser settings.
        <br />
        <br />
        6. Security
        <br />
        We implement reasonable security measures to protect your information
        from unauthorized access, disclosure, alteration, or destruction.
        However, please be aware that no method of online transmission or
        storage is 100% secure.
        <br />
        <br />
        7. Your Choices You have
        <br />
        the right to access, correct, or delete your personal information. You
        can also opt-out of receiving marketing communications from us.
        <br />
        <br />
        8.Children's Privacy
        <br />
        Our website is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        are a parent or guardian and believe that your child has provided us
        with personal information, please contact us.
        <br />
        <br />
        9. Changes to This Privacy Policy
        <br />
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the "Last Updated" date will be revised.
        <br />
        <br />
        10. Contact Us
        <br />
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at [Contact Information].
      </p>
    </div>
  );
};
