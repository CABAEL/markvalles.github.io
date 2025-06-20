import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';

const MotionDiv = motion.div;

const Preloader = () => {
  return (
    <MotionDiv
      key="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#222',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={60} thickness={5} style={{color:'#eee'}}/>
    </MotionDiv>
  );
};

export default Preloader;
