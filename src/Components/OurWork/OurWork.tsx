import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import styles from './ourwork.module.css'
import '/src/App.css'

export const OurWork = () => {

   return (
      <div className={styles.container}>
         <Navbar />
         <Footer />
      </div>
   )
}
