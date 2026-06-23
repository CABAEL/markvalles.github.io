import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
const MotionCard = motion(Card);

// Import your images
import dsse from '../img/dsse.jpg';
import yempo from '../img/yempo.png';
import pcieerd from '../img/pcieerd_coe.jpg';
import optimo from '../img/optimo.png';
import port01 from '../img/port01.jpg';
import port02 from '../img/port02.jpg';
import port03 from '../img/port03.jpg';
import port04 from '../img/port04.jpg';
import port05 from '../img/port05.jpg';
import port06 from '../img/port06.jpg';
import internship from '../img/internship.jpg';
import dbp from '../img/dbp.jpg';
import blockchain from '../img/blockchain.jpg';
import careerpath from '../img/careerpath.jpg';
import dost1 from '../img/dost1.png';
import diploma from '../img/diploma.png';
import itil_basic from '../img/itil.png';

import incanta from '../img/incanta.png';
import itilv4 from '../img/itilv4.png';
import Ai from '../img/ai.png';
import intellishift from '../img/intellishift_sti.jpg';

const images = [
  intellishift,incanta, Ai, itilv4, itil_basic, port06, dsse, yempo, pcieerd, optimo, port01, port02, port03, port04, port05,
  dost1, blockchain, dbp, internship, careerpath, diploma
];

const CertificationBoard = ({ dimmed }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  const thumbnailsPerPage = 5;
  const totalPages = Math.ceil(images.length / thumbnailsPerPage);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const handleMainImageClick = () => {
    setOpen(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getCurrentThumbnails = () => {
    const startIndex = currentPage * thumbnailsPerPage;
    const endIndex = startIndex + thumbnailsPerPage;
    return images.slice(startIndex, endIndex).map((image, i) => ({
      image,
      originalIndex: startIndex + i
    }));
  };

  return (
    <Box sx={{ p: { xs: 2, lg: 2 } }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            color: '#ffff',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Certifications & Achievements
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: '#D0D0D0' }}>
          Professional credentials and recognition milestones
        </Typography>
        <Chip
          icon={<Verified />}
          label={`${images.length} Certifications`}
          sx={{
            color: '#B0B0B0',
            borderColor: '#B0B0B0'
          }}
          variant="outlined"
          size="small"
        />
      </Box>

      {/* Main Display Area */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            onClick={handleMainImageClick}
            sx={{
              cursor: 'pointer',
              maxWidth: 400,
              bgcolor: dimmed ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(240, 240, 240, 0.3)',
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardMedia
              component="img"
              image={images[selectedIndex]}
              alt={`Certification ${selectedIndex + 1}`}
              sx={{
                height: { xs: 250, sm: 300 },
                objectFit: 'cover',
              }}
            />
          </Card>
        </motion.div>
      </Box>

      {/* Thumbnail Selector with Pagination */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        {/* Navigation and Thumbnails */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 2,
          justifyContent: 'center',
        }}>
          {/* Previous Button */}
          <IconButton
            onClick={handlePrevPage}
            sx={{
              color: '#FFFFFF',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Thumbnails Container */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            justifyContent: 'center',
            minWidth: 340, // 5 thumbnails * 60px + gaps
          }}>
            {getCurrentThumbnails().map(({ image, originalIndex }, i) => (
              <motion.div
                key={originalIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  onClick={() => handleThumbnailClick(originalIndex)}
                  sx={{
                    cursor: 'pointer',
                    width: 60,
                    height: 60,
                    bgcolor: dimmed ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: selectedIndex === originalIndex ? '2px solid #F0F0F0' : '2px solid transparent',
                    opacity: selectedIndex === originalIndex ? 1 : 0.7,
                    '&:hover': {
                      opacity: 1,
                      boxShadow: '0 4px 12px rgba(240, 240, 240, 0.4)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Certification ${originalIndex + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNextPage}
            sx={{
              color: '#FFFFFF',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Page Indicator */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentPage(i)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: currentPage === i ? '#555' : 'rgba(85, 85, 85, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#555',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedIndex}
        slides={images.map((img) => ({ src: img }))}
      />
    </Box>
  );
};

export default CertificationBoard;
