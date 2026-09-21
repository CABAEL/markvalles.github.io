import React, { useEffect, useState } from 'react';
import wallbg from '../img/wall4.png';
import { Grid, Box, Typography, Slide, ThemeProvider, CssBaseline, Divider } from '@mui/material';
import ExpList from './Experiences';
import HelmetTag from './Helmet';
import { motion } from "framer-motion";
const MotionTypography = motion(Typography);
import NameCard from './Namecard';
import LetThereBeLight from './Light';

import CertificationBoard from './CertBoard';
import Skills from './Skills';
import walking from '../img/walking.gif';
import walkingpng from '../img/walking.png';
import galaxy from '../img/videoplayback2.mp4';
import Preloader from './Preloader';
import { AnimatePresence } from 'framer-motion';
import Gallery from './images';
import ProjectsSection from './Projects';
import Footer from './Footer';
import FloatingNav from './FloatingNav';
import theme from './theme';

const MotionDiv = motion.div;

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

  const SectionDivider = () => (
    <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mx: { xs: 2, md: 6 }, my: 2 }} />
  );

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
            {/* Left Column: Light hanging directly above centered NameCard */}
<Grid size={{ xs: 12, md: 12, lg: 5 }} pt={0} pb={{ xs: 15 }} id="about">
  <Box color="white" display="flex" flexDirection="column" alignItems="center">
    {/* Hanging Light Fixture */}
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <LetThereBeLight handleToggleDim={handleToggleDim} setDimmed={setDimmed} dimmed={dimmed} />
    </Box>

    {/* NameCard directly centered beneath light */}
    <Box 
      sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        px: 2 
      }}
    >
      <NameCard dimmed={dimmed} />
    </Box>
  </Box>
</Grid>

            {/* Right Column: Work Experiences */}
            <Grid size={{ xs: 12, md: 12, lg: 7 }} pt={{ lg: 8, xs: 2 }}>
              <Box sx={{ px: { xs: 2, md: 4 } }}>
<MotionTypography
  variant="h1"
  sx={{
    fontSize: { xs: '4vh', sm: '5vh', md: '6vh', lg: '3vw' },
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#eee',
    mb: 4,
  }}
  animate={{
    textShadow: [
      '5px 4px 8px #444',
      '-5px 4px 8px #444',
      '5px 4px 8px #444',
    ],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
  }}
>
  WORK EXPERIENCES
</MotionTypography>

                <Box id="experience">
                  <ExpList dimmed={dimmed} />
                </Box>
              </Box>
            </Grid>

            <Grid size={12} id="projects" sx={{ px: 2, pb: 4 }}>
              <ProjectsSection />
            </Grid>

            <Grid size={12}>
              <SectionDivider />
            </Grid>

            <Grid size={12} id="projects" sx={{ px: 2, pb: 4 }}>
              <CertificationBoard dimmed={dimmed} />
            </Grid>

            <Grid size={12} id="skills" sx={{ px: 2 }}>
              <Skills dimmed={dimmed} />
            </Grid>

            <Grid size={12}>
              <SectionDivider />
            </Grid>

            <Grid size={12} id="gallery" sx={{ px: 2 }}>
              <Gallery />
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