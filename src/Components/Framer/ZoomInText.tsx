import { motion } from 'framer-motion';
interface Props {
  children: JSX.Element;
}

export const ZoomInText = ({ children }: Props) => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.65 },
    },
  };

  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </>
  );
};
