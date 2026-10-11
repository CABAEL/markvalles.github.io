import React, { useState } from "react";
import { Box, Pagination, Typography, Chip } from "@mui/material";
import { Photo } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import it_o1 from '../img/it_olympics/1.jpg';
import it_o2 from '../img/it_olympics/2.jpg';
import it_o3 from '../img/it_olympics/3.jpg';

import opt1 from '../img/Optimo/1.jpg';

import blockchain2 from '../img/blockchain/2.jpg';

import spms1 from '../img/trainings/1.jpg';

import dost1 from '../img/DOST/1.jpg';
import dost2 from '../img/DOST/2.jpg';

import sbc1 from '../img/sbc/1.jpg';
import sbc2 from '../img/sbc/2.jpeg';

import sirgolfo from '../img/sirgolfo.jpg';

const images = [
  {
    src: sbc2,
    description: "Security Bank Corporation - Team building, listening to security bank CTO Prakash Mahajan speech.",
  },
  {
    src: sbc1,
    description: "Security Bank Corporation - Squad 1 Engineers coffee break with: Sir Roger, Robin and Jerald.",
  },
  {
    src: dost1,
    description: "DOST_PCIEERD Team BBQ Dinner pic.",
  },
  {
    src: dost2,
    description: "DOST-PCIEERD IT/SD Dept team",
  },
  {
    src: blockchain2,
    description: "Blockchain event closing party.",
  },
  {
    src: spms1,
    description: "System presentation to end user",
  },
  {
    src: opt1,
    description: "Optimo International, with our CEO John Rankins",
  },
  {
    src: it_o1,
    description: "IT olympics bronze medalist with partner Joe Abas",
  },
  {
    src: sirgolfo,
    description: "Picture with sir Golfo, my client for the WAIS project",
  },
  {
    src: it_o3,
    description: "IT olympics bronze medalist with partner Joe Abas",
  },
  {
    src: it_o2,
    description: "2nd event 8th IT olympics 2018 with new partner and proctor Ms. Grace Condez",
  }
];

const itemsPerPage = 8;

export default function PinterestGalleryWithLightboxDescription() {
  const [page, setPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handleImageClick = (index) => {
    setCurrentIndex(startIndex + index);
    setLightboxOpen(true);
  };

  return (
    <Box sx={{ py: 4, px: 2, minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            pt: 5,
            color: '#ffff',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Photo Gallery
        </Typography>
        <Typography
          sx={{ color: "#D0D0D0", fontWeight: 500, fontSize: "0.78rem", pb: 1 }}
        >
          Memorable moments and professional experiences
        </Typography>
        <Chip
          icon={<Photo />}
          label={`${images.length} Photos`}
          sx={{
            color: '#B0B0B0',
            borderColor: '#B0B0B0'
          }}
          variant="outlined"
        />
      </Box>

      {/* Pinterest-style Masonry Grid */}
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
          {paginatedImages.map((image, index) => (
            <Box
              key={index}
              onClick={() => handleImageClick(index)}
              sx={{
                backgroundColor: '#fefefe',
                p: '12px 12px 20px 12px', // Authentic Polaroid proportions
                borderRadius: '2px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px) rotate(1deg)',
                  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.5)',
                  zIndex: 2,
                },
              }}
            >
              {/* Photo Area: Fixed Square Aspect Ratio to avoid stretching */}
              <Box
                component="img"
                src={image.src}
                alt={`Gallery ${index}`}
                sx={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  display: "block",
                  backgroundColor: "#222",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                }}
              />

              {/* Bottom Handwritten Caption Area with Text Clamp */}
              <Box sx={{ mt: 1.5, minHeight: '42px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#2b2b2b",
                    fontFamily: '"Caveat", "Brush Script MT", cursive, sans-serif',
                    fontSize: "0.95rem",
                    lineHeight: 1.25,
                    textAlign: 'center',
                    px: 0.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Masonry>
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(images.length / itemsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#B0B0B0",
              borderColor: "#131010ff",
              "&:hover": {
                bgcolor: "rgba(176, 176, 176, 0.1)",
                borderColor: "#B0B0B0",
              },
            },
            "& .Mui-selected": {
              bgcolor: "#707070",
              color: "#FFFFFF",
              borderColor: "#131010ff",
              "&:hover": {
                bgcolor: "#B0B0B0",
              },
            },
          }}
        />
      </Box>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={currentIndex}
        render={{
          slide: ({ slide }) => (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
            >
              <img
                src={slide.src}
                alt=""
                style={{
                  maxWidth: "90%",
                  maxHeight: "80%",
                  objectFit: "contain",
                }}
              />
              {slide.description && (
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    color: "#fff",
                    textAlign: "center",
                    background: "rgba(0,0,0,0.6)",
                    borderRadius: 1,
                    px: 2,
                    py: 1,
                    fontSize: "0.95rem",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  {slide.description}
                </Typography>
              )}
            </Box>
          ),
        }}
      />
    </Box>
  );
}