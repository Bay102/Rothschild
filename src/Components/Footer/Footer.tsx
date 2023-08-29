import styles from './footer.module.css'

export const Footer = ( ) => {

   return (
    <div className={styles.footerContainer}>
      <div className={styles.one}>
         <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
         <p>Creating stronger communities. <br /> Building a better you</p>
      </div>
      <div className={styles.two}>
         <li>Home</li>
         <li>About</li>
         <li>Our Work</li>
         <li>Grants</li>
         <li>Get Involved</li>
         <li>News</li>
         <li>Contact Us</li>
         <li>Terms and Service</li>
         <li>Privacy Policy</li>
      </div>
      <div className={styles.three}>
         <button className={styles.donateButton}>Donate</button>
      </div>
    </div>
   )
}