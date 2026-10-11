import React, { useState } from 'react';
import { CardMedia, Typography, Box, Chip, Avatar, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Verified, ChevronLeft, ChevronRight, OpenInFull } from '@mui/icons-material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import images
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

const certificates = [
  { img: intellishift, title: "Intellishift Certification", caption: "Successfully completed consulting work." },
  { img: incanta, title: "Incanta Milestone", caption: "Successfully completed consulting work." },
  { img: Ai, title: "AI Integration Workshop", caption: "Deep dive into modern AI tools and LLM architectures." },
  { img: itilv4, title: "ITIL v4 Foundation", caption: "Certified in IT service management best practices." },
  { img: itil_basic, title: "ITIL Framework Basics", caption: "Foundational training in IT service operations." },
  { img: port06, title: "AWS Certified Cloud Practitioner", caption: "CLF-C02 Cloud Concepts" },
  { img: dsse, title: "Dynamic Strategy Solutions Experts", caption: "DSSE COE" },
  { img: yempo, title: "Yempo", caption: "YEMPO COE" },
  { img: pcieerd, title: "DOST-PCIEERD", caption: "DOST-PCIEERD COE" },
  { img: optimo, title: "Optimo International", caption: "Optimo COE" },
  { img: port01, title: "ROAS", caption: "City Record office application system implemented" },
  { img: port02, title: "WEB Design Champion", caption: "College-level web design competition champion winner." },
  { img: port03, title: "7th IT Olympics", caption: "Bronze medalist on 2017 7th IT Olympics." },
  { img: port04, title: "WAIS Certification", caption: "Inventory Management System Prototype for Supply Management Section" },
  { img: port05, title: "8th IT Olympics", caption: "Certificate of Participation" },
  { img: dost1, title: "Smart City Webinar", caption: "Certificate of Attendance" },
  { img: blockchain, title: "Blockchain Training", caption: "Certificate of Completion" },
  { img: dbp, title: "DBP Service Corporation", caption: "Certificate of Employment" },
  { img: internship, title: "Laravel Development Internship", caption: "DOST-PCIEERD software engineering internship certificate." },
  { img: careerpath, title: "Career Path Certification", caption: "Certificate of Participation" },
  { img: diploma, title: "Academic Diploma", caption: "Bachelor of Science in Computer Science diploma." },
];

const CertificationBoard = ({ dimmed }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const thumbnailsPerPage = 10;
  const totalPages = Math.ceil(certificates.length / thumbnailsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleSelectCert = (index) => {
    if (index === selectedIndex || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsFlipping(false);
    }, 300);
  };

  const getCurrentThumbnails = () => {
    const startIndex = currentPage * thumbnailsPerPage;
    const endIndex = startIndex + thumbnailsPerPage;
    return certificates.slice(startIndex, endIndex).map((item, i) => ({
      item,
      originalIndex: startIndex + i,
    }));
  };

  const activeCert = certificates[selectedIndex];

  return (
    <Box sx={{ p: { xs: 1, sm: 3 }, width: '100%', maxWidth: '980px', mx: 'auto' }}>
      {/* Title Header */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 0.25,
            color: 'rgb(225, 234, 243)',
            textShadow: '1px 1px 2px #000',
            fontSize: { xs: "1.3rem", sm: "1.6rem" },
          }}
        >
          Certifications & Achievements
        </Typography>
        <Typography 
          variant="body2"
          sx={{ color: "#D0D0D0", fontWeight: 500, fontSize: "0.78rem", pb: 5 }}
        >
          Overhead dark desk view • Flip pages to view credentials
        </Typography>
        <Chip
          icon={<Verified />}
          label={`${certificates.length} Credentials`}
          sx={{ color: '#e2e8f0', borderColor: '#334155', bgcolor: '#0f172a' }}
          variant="outlined"
          size="small"
        />
      </Box>

      {/* Main Dark Wooden Table Surface (No Hard Borders) */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#121110',
          background: `
            radial-gradient(circle at 50% 25%, rgba(41, 37, 35, 0.6) 0%, rgba(15, 14, 13, 0.95) 90%),
            linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)
          `,
          boxShadow: dimmed
            ? '0 20px 40px rgba(0, 0, 0, 0.95)'
            : '0 30px 60px rgba(0, 0, 0, 0.85), inset 0 1px 3px rgba(255, 255, 255, 0.08)',
          p: { xs: 2, sm: 4 },
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle Recessed Pencil Groove on Dark Desk */}
        <Box
          sx={{
            width: '65%',
            height: { xs: '6px', sm: '10px' },
            mx: 'auto',
            mb: { xs: 2, sm: 3 },
            bgcolor: '#090807',
            borderRadius: '8px',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.04)',
          }}
        />

        {/* Desk Surface Layout Grid (Notebook + Static Yellow Mongol Pencil) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, sm: 3 },
            position: 'relative',
          }}
        >
          {/* Main Spiral Notebook Sheet */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              bgcolor: '#fbfaf7',
              borderRadius: '6px 14px 14px 6px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.55), 0 5px 15px rgba(0, 0, 0, 0.3)',
              pl: { xs: 4, sm: 5 },
              pr: { xs: 2, sm: 3 },
              py: { xs: 2.5, sm: 3.5 },
            }}
          >
            {/* Spiral Wire Binding (Left Edge) */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '8px', sm: '12px' },
                top: '12px',
                bottom: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 10,
              }}
            >
              {[...Array(14)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: '16px', sm: '22px' },
                    height: { xs: '7px', sm: '9px' },
                    bgcolor: '#27272a',
                    background: 'linear-gradient(180deg, #71717a 0%, #18181b 50%, #52525b 100%)',
                    borderRadius: '4px',
                    boxShadow: '2px 3px 4px rgba(0,0,0,0.5)',
                    ml: '-10px',
                  }}
                />
              ))}
            </Box>

            {/* Notebook Header Tag */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, pb: 1, borderBottom: '1px dashed #e4e4e7' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle2" sx={{ fontFamily: '"Courier New", Courier, monospace', fontWeight: 700, color: '#3f3f46', fontSize: '0.85rem' }}>
                  mark_valles.doc [{selectedIndex + 1}/{certificates.length}]
                </Typography>
              </Box>
              <IconButton onClick={() => setOpen(true)} size="small" sx={{ color: '#71717a', '&:hover': { color: '#000' } }}>
                <OpenInFull sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>

            {/* Certificate Page Frame with Page-Turn / Slide Transition */}
            <Box
              onClick={() => setOpen(true)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                minHeight: { xs: 260, sm: 360 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence mode="wait">
                {!isFlipping && (
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: 40, rotateY: 8 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -40, rotateY: -8 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', transformOrigin: 'left center' }}
                  >
                    <Box
                      sx={{
                        p: 0.5,
                        bgcolor: '#ffffff',
                        borderRadius: '2px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        width: '100%',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={activeCert.img}
                        alt={activeCert.title}
                        sx={{
                          width: '100%',
                          height: { xs: 220, sm: 320, md: 350 },
                          objectFit: 'contain',
                          bgcolor: '#fafafa',
                        }}
                      />
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>

            {/* Handwritten Style Caption */}
            <Box sx={{ mt: 2, pt: 1, borderTop: '1px solid #f4f4f5' }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"Courier New", Courier, monospace',
                  fontWeight: 600,
                  color: '#27272a',
                  fontSize: { xs: '0.78rem', sm: '0.86rem' },
                }}
              >
                <Box component="span" sx={{ color: '#2563eb', fontWeight: 700, mr: 1 }}>
                  ► {activeCert.title}:
                </Box>
                {activeCert.caption}
              </Typography>
            </Box>
          </Box>

          {/* Static Classic Yellow Mongol Pencil (Fixed, no hover movement) */}
          <Box
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: '14px',
                height: '210px',
                bgcolor: '#eab308', // Classic yellow Mongol pencil finish
                borderRadius: '2px',
                boxShadow: '4px 6px 12px rgba(0,0,0,0.6), inset -2px 0 3px rgba(0,0,0,0.3)',
                position: 'relative',
              }}
            >
              {/* Silver Ferrule Band */}
              <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '15px', bgcolor: '#94a3b8', borderRadius: '2px 2px 0 0' }} />
              {/* Pink Eraser */}
              <Box sx={{ position: 'absolute', top: '-9px', width: '100%', height: '9px', bgcolor: '#f43f5e', borderRadius: '3px 3px 0 0' }} />
              {/* Sharpened Wood Tip */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: 0,
                  width: 0,
                  height: 0,
                  borderLeft: '7px solid transparent',
                  borderRight: '7px solid transparent',
                  borderTop: '16px solid #fde047',
                }}
              />
              {/* Graphite Lead Tip */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '4px',
                  width: 0,
                  height: 0,
                  borderLeft: '3px solid transparent',
                  borderRight: '3px solid transparent',
                  borderTop: '7px solid #18181b',
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom Desk Groove Tray (Thumbnail Selector) */}
        <Box
          sx={{
            mt: 3,
            p: 2,
            bgcolor: '#0a0908',
            borderRadius: '12px',
            boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.9)',
          }}
        >
          {/* Thumbnails Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(5, 1fr)', sm: 'repeat(10, 1fr)' },
              gap: 1,
            }}
          >
            {getCurrentThumbnails().map(({ item, originalIndex }) => {
              const isSelected = selectedIndex === originalIndex;
              return (
                <motion.div key={originalIndex} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
                  <Box
                    onClick={() => handleSelectCert(originalIndex)}
                    sx={{
                      cursor: 'pointer',
                      bgcolor: '#1c1917',
                      p: '2px',
                      borderRadius: '4px',
                      border: isSelected ? '2px solid #38bdf8' : '1px solid transparent',
                      boxShadow: isSelected ? '0 0 8px rgba(56, 189, 248, 0.4)' : 'none',
                      overflow: 'hidden',
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: isSelected ? 1 : 0.55,
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2px',
                      }}
                    />
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* Tray Pagination Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pt: 1.5,
              mt: 1.5,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <IconButton
              onClick={handlePrevPage}
              size="small"
              sx={{
                color: '#e2e8f0',
                bgcolor: '#1c1917',
                borderRadius: '4px',
                px: 1.2,
                py: 0.3,
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                '&:hover': { bgcolor: '#292524' },
              }}
            >
              <ChevronLeft sx={{ fontSize: '1rem', mr: 0.2 }} /> Prev Page
            </IconButton>

            {/* Pagination Indicators */}
            <Box sx={{ display: 'flex', gap: 0.8, alignItems: 'center' }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  sx={{
                    width: currentPage === i ? 16 : 6,
                    height: 6,
                    borderRadius: '3px',
                    bgcolor: currentPage === i ? '#38bdf8' : '#44403c',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNextPage}
              size="small"
              sx={{
                color: '#e2e8f0',
                bgcolor: '#1c1917',
                borderRadius: '4px',
                px: 1.2,
                py: 0.3,
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                '&:hover': { bgcolor: '#292524' },
              }}
            >
              Next Page <ChevronRight sx={{ fontSize: '1rem', ml: 0.2 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Lightbox for Fullscreen Zoom */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedIndex}
        slides={certificates.map((item) => ({ src: item.img }))}
      />
    </Box>
  );
};

export default CertificationBoard;