import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  direction?: string;
}

export const Reveal = ({ children, direction }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  const animationVariants = {
    hidden: { opacity: 0, y: 0, x: direction === 'right' ? +250 : -150 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1.5, delay: 0.15, mass: 0.4, when: 'beforeChildren' },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');  //> starts animation 
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={mainControls}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
