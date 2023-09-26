import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
interface Props {
  children: JSX.Element;
}

export const RevealHeader = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  const animationVariants = {
    hidden: {
      opacity: 0,
      // scale: 0.5,
      x: -900,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.2 },
    },
    exit: { x: -600, opacity: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('exit');
    }
  }, [isInView, mainControls]);

  return (
    <AnimatePresence>
      <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={mainControls}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
