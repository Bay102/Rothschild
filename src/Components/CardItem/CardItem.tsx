import styles from './cardItem.module.css'

interface CardItemProps {
   imageSrc: string;
   title: string;
   description: string;
 }

export const CardItem: React.FC<CardItemProps> = (props) => {
   const { imageSrc, title, description } = props;

   return (
      <div className={styles.cardContainer}>
         <img src={imageSrc} alt="" />
         <h4>{title}</h4>
         <p>{description}</p>
      </div>
   )
}