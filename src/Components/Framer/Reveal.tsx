import { motion, useAnimation, useInView } from 'framer-motion';
import {  useEffect, useRef } from 'react';

interface Props  {
   children: JSX.Element
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(true);

      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 0, x: -450 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};
