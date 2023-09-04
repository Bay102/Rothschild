import '/src/App.css'
import styles from './ourwork.module.css'
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"

export const OurWork = () => {

   return (
      <div className={styles.container}>
         <Navbar />
         <Footer />
      </div>
   )
}
