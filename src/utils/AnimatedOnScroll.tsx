"use client";

import { motion, TargetAndTransition, useInView, VariantLabels } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { fadeUp, fadeLeft, zoomIn } from './animations';

interface AnimatedOnScrollProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeLeft' | 'zoomIn';
  once?: boolean;
  duration?: number;
  delay?: number;
  whileHover?: TargetAndTransition | VariantLabels;
}

const getVariant = (variant?: string) => {
  switch (variant) {
    case 'fadeUp':
      return fadeUp;
    case 'fadeLeft':
      return fadeLeft;
    case 'zoomIn':
      return zoomIn;
    default:
      return fadeLeft; 
  }
};

const AnimatedOnScroll = ({ children, variant, once = true, duration = 0.9, delay = 0, whileHover, }: AnimatedOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, margin: "-100px 0px -100px 0px" });
  console.log('isInView:', isInView);

  const animationVariants = getVariant(variant);

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay }}
      whileHover={whileHover} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
