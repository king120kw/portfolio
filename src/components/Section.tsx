import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", delay = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
