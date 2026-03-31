import React, { useEffect, useState } from 'react';
import wallbg from '../img/wall4.png'
import { Grid, Box, Typography, Slide, ThemeProvider, CssBaseline } from '@mui/material';
import ExpList from './Experiences';
import HelmetTag from './Helmet';
import { motion } from "framer-motion"
const MotionTypography = motion(Typography);
import NameCard from './Namecard';
import LetThereBeLight from './Light';

import CertificationBoard from './CertBoard';
import walking from '../img/walking.gif'
import walkingpng from '../img/walking.png'
import galaxy from '../img/videoplayback2.mp4'
import Preloader from './Preloader';
import { AnimatePresence } from 'framer-motion';
import Gallery from './images';
import ProjectsSection from './Projects';
import Footer from './Footer';
import FloatingNav from './FloatingNav';
import theme from './theme';

const MotionDiv = motion.div;

// Transition for Dialog slide up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [loading, setLoading] = useState(true);
  const [dimmed, setDimmed] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 300);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const DimOverlay = ({ isVisible }) => (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '200vh',
        backgroundColor: 'rgba(51, 51, 51, 0.3)',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    />
  );

  const VidOverlay = ({ isVisible }) => (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          display: !isVisible ? 'none' : 'block',
        }}
      >
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '200vh',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      />
    </>
  );

  const handleToggleDim = (event) => {
    setDimmed(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      {!loading && (
        <>
          <HelmetTag />
          <VidOverlay isVisible={dimmed} />
          <DimOverlay isVisible={dimmed} />

          <Grid
            sx={{
              backgroundImage: `url(${!dimmed ? wallbg : ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh',
              width: '100%',
              filter: dimmed ? 'brightness(55%)' : 'brightness(100%)',
              position: 'relative',
              overflowX: 'hidden',
            }}
            container
            spacing={0}
          >
            <Grid size={{ xs: 12, md: 12, lg: 5 }} pt={8} pb={{ xs: 5 }} pl={0}>
              <Box color="white" textAlign="center">
                <NameCard dimmed={dimmed} />
                <CertificationBoard dimmed={dimmed} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <Grid container spacing={10}>
                <Grid size={{ lg: 2, xs: 12 }}>
                  <LetThereBeLight handleToggleDim={handleToggleDim} setDimmed={setDimmed} dimmed={dimmed} />
                </Grid>
                <Grid size={{ lg: 10, xs: 12 }}>
                  <MotionTypography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '4vh', sm: '5vh', md: '6vh', lg: '3vw' },
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#eee',
                      pt: { lg: 25, xs: 0 },
                    }}
                    animate={{
                      textShadow: ['1px 1px 2px #444', '2px 10px 8px #444', '1px 1px 2px #444'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  >
                    WORK EXPERIENCES
                  </MotionTypography>
                </Grid>

                <Grid size={12} id="experience">
                  <ExpList dimmed={dimmed} />
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ px: 2 }}>
              <Grid size={{ xs: 12, lg: 6 }} id="projects">
                <ProjectsSection />
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }} id="gallery">
                <Gallery />
              </Grid>
            </Grid>

            <Footer data={[walking, walkingpng]} dimmed={dimmed} />
          </Grid>

          <FloatingNav />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
