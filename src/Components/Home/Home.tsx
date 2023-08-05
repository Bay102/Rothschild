import { Navbar } from '../Navbar/Navbar'
import styles from './home.module.css'

export const Home = () => {

   return (
     <div className={styles.homeContainer}>
      <div><Navbar /></div>
      
      <h1>THE ROTHSCHILD TRUST</h1>
     </div>
   )
}