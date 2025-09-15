import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/*
 * AnimatedText
 * Splits provided text into words and animates them with a subtle upward fade-in.
 * Props:
 *  - as: heading/tag to render (default 'span')
 *  - text: string to animate
 *  - delay: initial delay before animation starts
 *  - align: text alignment class override
 */
export function AnimatedText({ as: Tag = 'span', text, delay = 0, align, className = '' }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <Tag className={className}>{text}</Tag>;

  const words = text.split(/\s+/);

  const container = {
    hidden: { opacity: 0 },
    visible: (d = 0) => ({
      opacity: 1,
      transition: {
        delay: d,
        staggerChildren: 0.045,
      }
    })
  };

  const child = {
    hidden: { y: 18, opacity: 0, filter: 'blur(4px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0)', transition: { duration: 0.52, ease: [0.22, 0.9, 0.24, 1] } }
  };

  return (
    <motion.span
      className={`animated-text inline-block ${className}`}
      style={{ display: 'inline-block' }}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="animated-word"
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          variants={child}
        >{w + (i < words.length - 1 ? ' ' : '')}</motion.span>
      ))}
    </motion.span>
  );
}
