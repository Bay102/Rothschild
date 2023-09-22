import { motion } from 'framer-motion';
interface Props {
  children: JSX.Element;
}

export const RouteReveal = ({ children }: Props) => {
  const routeAnimation = {
    hidden: {
      // x: -1225,
      opacity: 0.75,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0, duration: 0.6, ease: 'easeIn' },
    },
    exit: {
      x: '-100vw',
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <>
      <motion.div variants={routeAnimation} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </>
  );
};
