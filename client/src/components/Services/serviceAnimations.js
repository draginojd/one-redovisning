// Shared framer-motion animation configs for service cards
export const servicesContainer = (delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      delay,
      staggerChildren: 0.095,
      ease: [0.22, 0.9, 0.24, 1]
    }
  }
});

export const serviceItem = {
  hidden: { opacity: 0, y: 26, scale: 0.96, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0)', transition: { duration: 0.58, ease: [0.22, 0.9, 0.24, 1] } },
  hover: { y: -4, transition: { duration: 0.28, ease: 'easeOut' } }
};

// Slight variant for showcase (smaller move)
export const serviceItemShowcase = {
  hidden: { opacity: 0, y: 28, scale: 0.88, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0)', transition: { type: 'spring', stiffness: 62, damping: 14, mass: 0.7 } },
  hover: { y: -4, transition: { type: 'spring', stiffness: 180, damping: 16 } }
};

// Reduced motion fallback allows instant display
export const reducedMotionImmediate = { hidden: { opacity: 0 }, visible: { opacity: 1 } };