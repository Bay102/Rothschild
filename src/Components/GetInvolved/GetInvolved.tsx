import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import styles from './getInvolved.module.css'

export const GetInvolved = () => {

   return (
      <div className={styles.container}>
         <div className={styles.section}>
         <Navbar />

         </div>
         <Footer />
      </div>
   )
}
