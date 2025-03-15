// components/Animation/AnimatedSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}