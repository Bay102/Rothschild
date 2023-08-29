import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import styles from './news.module.css'

export const News = () => {

   return (
      <div className={styles.container}>
         <Navbar />
         <Footer />
      </div>
   )
}
