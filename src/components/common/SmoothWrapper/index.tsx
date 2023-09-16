import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ISmoothWrapper {
  children: ReactNode;
}

export const SmoothWrapper: React.FC<ISmoothWrapper> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};
