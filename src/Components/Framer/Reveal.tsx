import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from 'framer-motion';
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
    hidden: { opacity: 0, y: 0, x: direction === 'right' ? +200 : -200 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.25,
        // mass: 0.4,
        // when: 'beforeChildren',
      },
    },
    // exit: { x: direction === 'right' ? -300 : +300, opacity: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('exit');
    }
  }, [isInView, mainControls]);

  return (
    <>
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
    </>
  );
};
