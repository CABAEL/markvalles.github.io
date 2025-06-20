// DimOverlay.jsx
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const DimOverlay = () => (
  <MotionDiv
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1 ,
      pointerEvents: 'none',
    }}
  />
);

export default DimOverlay;