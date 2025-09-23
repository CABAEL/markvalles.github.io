import { motion } from 'framer-motion';
import { Box, Typography, LinearProgress } from '@mui/material';

const MotionDiv = motion.div;
const MotionBox = motion(Box);

const Preloader = () => {
  return (
    <MotionDiv
      key="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MotionBox
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ textAlign: 'center', mb: 4 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #38bdf8, #ffffffff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
          }}
        >
          Mark Valles
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Portfolio Loading...
        </Typography>
      </MotionBox>

      <Box sx={{ width: '300px', mb: 2 }}>
        <LinearProgress
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: 'rgba(148, 163, 184, 0.2)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(45deg, #0e5a7aff, #0f0e7aff)',
              borderRadius: 3,
            },
          }}
        />
      </Box>

      <MotionDiv
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Preparing your experience...
        </Typography>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Preloader;
