import styles from './cardItem.module.css';

interface CardItemProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

export const CardItem: React.FC<CardItemProps> = (props) => {
  const { className, imageSrc, title, description } = props;

  return (
    <div className={className}>
      <img className={styles.grantIcon} src={imageSrc} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
