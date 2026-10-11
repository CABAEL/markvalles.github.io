import { motion } from 'framer-motion';
import { Box, Typography, LinearProgress, GlobalStyles } from '@mui/material';

const MotionDiv = motion.div;
const MotionBox = motion(Box);

const Preloader = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          '@keyframes vhsScanline': {
            '0%': { backgroundPosition: '0 0' },
            '100%': { backgroundPosition: '0 120px' },
          },
        }}
      />
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
          // Vintage dark TV chassis gradient matching your theme
          background: 'linear-gradient(180deg, #383a40 0%, #222327 100%)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle CRT scanline overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
            backgroundSize: '100% 4px',
            pointerEvents: 'none',
            zIndex: 1,
            animation: 'vhsScanline 6s linear infinite',
            opacity: 0.7,
          }}
        />

        <MotionBox
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 4, position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#f8fafc',
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.2)',
              mb: 1,
            }}
          >
            DESIGNED BY: MARK VALLES
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#94a3b8',
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            &gt; LOADING PORTFOLIO...
          </Typography>
        </MotionBox>

        <Box sx={{ width: '280px', mb: 2, position: 'relative', zIndex: 2 }}>
          <LinearProgress
            sx={{
              height: 8,
              borderRadius: '2px',
              backgroundColor: '#0a0908',
              border: '1px solid #44403c',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.9)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#e2e8f0',
                borderRadius: '1px',
                boxShadow: '0 0 8px rgba(255,255,255,0.4)',
              },
            }}
          />
        </Box>

        <MotionDiv
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#cbd5e1',
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: '0.05em',
            }}
          >
            INITIALIZING DISPLAY...
          </Typography>
        </MotionDiv>
      </MotionDiv>
    </>
  );
};

export default Preloader;