import React from 'react';
import { motion } from 'framer-motion';

const Transition = ({ OgComponent }) => {
  return (
    <section>
      <OgComponent />
      <motion.div
        style={{ position: 'fixed', top: 0, left: 0, width: '100%',
                 height: '100vh', background: '#0f00f0f', transformOrigin: 'bottom'   }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Fix: use 'transition' instead of 'Transition'
      />

      <motion.div
                style={{ position: 'fixed', top: 0, left: 0, width: '100%',
                height: '100vh', background: '#0f00f0f', transformOrigin: 'top'   }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Fix: use 'transition' instead of 'Transition'
      />
    </section>
  );
};

export default Transition;