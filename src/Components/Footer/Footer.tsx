import styles from './footer.module.css'

export const Footer = ( ) => {

   return (
    <div className={styles.footerContainer}>
      <div className={styles.one}>
         <div className={styles.logo}>THE ROTHSCHILD TRUST</div>
         <p>Creating stronger communities. <br /> Building a better you</p>
      </div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>
      <br />
      <hr />
    </div>
   )
}