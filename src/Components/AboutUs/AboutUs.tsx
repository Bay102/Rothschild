import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import styles from './aboutUs.module.css'

export const AboutUs = () => {

   return (
      <div className={styles.container}>
         <div className={styles.section}>
         <Navbar />
      
         </div>
         <Footer />
      </div>
   )
}