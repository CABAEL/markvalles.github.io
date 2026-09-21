import React, { useState, useEffect } from 'react';
import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { KeyboardArrowUp, Person, Work, Code, Photo } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionFab = motion(Fab);

const FloatingNav = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    { icon: <Person />, name: 'About', onClick: () => scrollToSection('about') },
    { icon: <Work />, name: 'Experience', onClick: () => scrollToSection('experience') },
    { icon: <Code />, name: 'Projects', onClick: () => scrollToSection('projects') },
    { icon: <Photo />, name: 'Gallery', onClick: () => scrollToSection('gallery') },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="Section navigation"
        icon={<SpeedDialIcon />}
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          zIndex: 1300,
          '& .MuiFab-primary': {
            bgcolor: '#15161a',
            border: '1px solid rgba(255,255,255,0.12)',
            '&:hover': { bgcolor: '#1e1f24' },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            sx={{
              bgcolor: '#15161a',
              color: '#EDEDED',
              '&:hover': { bgcolor: '#1e1f24' },
            }}
          />
        ))}
      </SpeedDial>

      {showScrollTop && (
        <MotionFab
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1300,
            bgcolor: '#15161a',
            border: '1px solid rgba(255,255,255,0.12)',
            '&:hover': { bgcolor: '#1e1f24' },
          }}
        >
          <KeyboardArrowUp />
        </MotionFab>
      )}
    </>
  );
};

export default FloatingNav;
