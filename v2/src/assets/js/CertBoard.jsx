import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box, Chip, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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

  const thumbnailsPerPage = 5;
  const totalPages = Math.ceil(certificates.length / thumbnailsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
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
    <Box sx={{ p: { xs: 1, sm: 3 }, width: '100%', maxWidth: '1200px', mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
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
        <Typography 
          sx={{ color: "#D0D0D0", fontWeight: 500, fontSize: "0.78rem",pb: 1 }}
        >
          Professional credentials and recognition milestones
        </Typography>
        <Chip
          icon={<Verified />}
          label={`${certificates.length} Certifications`}
          sx={{
            color: '#B0B0B0',
            borderColor: '#B0B0B0',
          }}
          variant="outlined"
          size="small"
        />
      </Box>

      {/* Split Layout: Main Post on Left, Paginated Thumbnail List on Right */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        {/* Left Side: Active Framed Post */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            style={{ width: '100%', height: '100%', display: 'flex' }}
          >
            <Card
              sx={{
                width: '100%',
                bgcolor: '#121318',
                borderRadius: '12px',
                border: '1px solid #2A2C36',
                boxShadow: dimmed
                  ? '0 10px 30px rgba(0, 0, 0, 0.9)'
                  : '0 16px 40px rgba(0, 0, 0, 0.7)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Post Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, pb: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar
                    src={activeCert.img}
                    alt="Mark Valles"
                    sx={{ width: 36, height: 36, border: '2px solid rgba(255,255,255,0.2)' }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      mark_valles <Verified sx={{ fontSize: '0.9rem', color: '#94a3b8' }} />
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8E92A4' }}>
                      Verified Credential
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Framed Wall Image Display Container */}
              <Box
                onClick={() => setOpen(true)}
                sx={{
                  cursor: 'pointer',
                  bgcolor: '#0a0a0e',
                  p: { xs: '8px', sm: '16px' },
                  borderTop: '6px solid #281e17',
                  borderBottom: '6px solid #281e17',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={activeCert.img}
                  alt={activeCert.title}
                  sx={{
                    width: '100%',
                    height: { xs: 260, sm: 360, md: 400 },
                    objectFit: 'contain',
                    bgcolor: '#0f0f13',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.01)',
                    },
                  }}
                />
              </Box>

              {/* Caption */}
              <Box sx={{ px: 2, py: 2.5 }}>
                <Typography variant="body2" sx={{ color: '#D0D4E0', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: '#FFFFFF', mr: 1 }}>
                    mark_valles
                  </Box>
                  {activeCert.caption}
                </Typography>
              </Box>
            </Card>
          </motion.div>
        </Box>

        {/* Right Side: Paginated Thumbnail Column (5 per page, neutral gray styling) */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            bgcolor: '#121318',
            borderRadius: '12px',
            border: '1px solid #2A2C36',
            p: 2.5,
            boxShadow: dimmed
              ? '0 10px 30px rgba(0, 0, 0, 0.9)'
              : '0 16px 40px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Thumbnails Stack */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {getCurrentThumbnails().map(({ item, originalIndex }) => {
              const isSelected = selectedIndex === originalIndex;
              return (
                <motion.div key={originalIndex} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Card
                    onClick={() => setSelectedIndex(originalIndex)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1.25,
                      cursor: 'pointer',
                      bgcolor: isSelected ? 'rgba(255, 255, 255, 0.05)' : '#181920',
                      border: isSelected ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid #2A2C36',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    {/* Thumbnail Frame */}
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        bgcolor: '#0a0a0e',
                        p: '2px',
                        borderTop: '2px solid #281e17',
                        borderBottom: '2px solid #281e17',
                        borderRadius: '4px',
                        overflow: 'hidden',
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

                    {/* Thumbnail Info */}
                    <Box sx={{ overflow: 'hidden', flexGrow: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: isSelected ? 700 : 500,
                          color: isSelected ? '#FFFFFF' : '#cbd5e1',
                          fontSize: '0.88rem',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8E92A4',
                          fontSize: '0.78rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.caption}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
          </Box>

          {/* Pagination Controls Footer */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pt: 2.5,
              mt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <IconButton
              onClick={handlePrevPage}
              sx={{
                color: '#FFFFFF',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                px: 1.5,
                py: 0.5,
                fontSize: '0.85rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ChevronLeft sx={{ fontSize: '1.1rem', mr: 0.5 }} /> Prev
            </IconButton>

            {/* Page Dots / Indicator */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  sx={{
                    width: currentPage === i ? 20 : 6,
                    height: 6,
                    borderRadius: '3px',
                    bgcolor: currentPage === i ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNextPage}
              sx={{
                color: '#FFFFFF',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                px: 1.5,
                py: 0.5,
                fontSize: '0.85rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Next <ChevronRight sx={{ fontSize: '1.1rem', ml: 0.5 }} />
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