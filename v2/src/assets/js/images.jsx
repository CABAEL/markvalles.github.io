import React, { useState } from "react";
import { Box, Pagination, Typography, Chip } from "@mui/material";
import { Photo } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import it_o1 from '../img/it_olympics/1.jpg'
import it_o2 from '../img/it_olympics/2.jpg'
import it_o3 from '../img/it_olympics/3.jpg'

import opt1 from '../img/Optimo/1.jpg'

import blockchain2 from '../img/blockchain/2.jpg'


import spms1 from '../img/trainings/1.jpg'


import dost1 from '../img/DOST/1.jpg'
import dost2 from '../img/DOST/2.jpg'

import sbc1 from '../img/sbc/1.jpg'
import sbc2 from '../img/sbc/2.jpeg'
//import sbc3 from '../img/sbc/3.jpeg'

import sirgolfo from '../img/sirgolfo.jpg'

const images = [
  {
    src: sbc2,
    description: "Security Bank Corporation - Team building, listening to security bank CTO Prakash Mahajan speech. ",
  },
  // {
  //   src: sbc3,
  //   description: "Security Bank Corporation - Engineers group picture.",
  // },    
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

const itemsPerPage = 6;

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
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ pt: 5,
            color: '#ffff',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Photo Gallery
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: '#D0D0D0' }}>
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

      <Masonry columns={{ xs: 1, sm: 2 }} spacing={1}>
        {paginatedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              overflow: "hidden",
              bgcolor: 'rgba(239, 240, 211, 0.3)',
              backdropFilter: 'blur(100px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={`Gallery ${index}`}
              onClick={() => handleImageClick(index)}
              sx={{
                width: "100%",
                cursor: "pointer",
                filter: 'sepia(100%) brightness(0.4)',
                transition: 'filter 0.6s ease',
                "&:hover": {
                  filter: 'sepia(0%) brightness(1.1)',
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#D0D0D0",
                p: 1.5,
                fontSize: "0.8rem",
                lineHeight: 1.4,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              {image.description}
            </Typography>
          </Box>
        ))}
      </Masonry>

      <Box display="flex" justifyContent="center" mt={3}>
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
                backgroundColor: "#000",
              }}
            >
              <img
                src={slide.src}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
              {slide.description && (
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    color: "#fff",
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: 1,
                    px: 1,
                    py: 0.5,
                    fontSize: "0.9rem",
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
