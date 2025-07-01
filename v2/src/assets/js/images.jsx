import React, { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import it_o1 from '../img/it_olympics/1.jpg' 
import it_o2 from '../img/it_olympics/2.jpg' 
import it_o3 from '../img/it_olympics/3.jpg' 

import opt1 from '../img/Optimo/1.jpg'

import blockchain2 from '../img/blockchain/2.jpg'
import blockchain3 from '../img/blockchain/3.jpg'
import blockchain4 from '../img/blockchain/4.jpg'
import blockchain5 from '../img/blockchain/5.jpg'

import spms1 from '../img/trainings/1.jpg'
import spms2 from '../img/trainings/2.jpg'
import spms3 from '../img/trainings/3.jpg'
import spms5 from '../img/trainings/5.jpg'

import dost1 from '../img/DOST/1.jpg'
import dost2 from '../img/DOST/2.jpg'

import sbc1 from '../img/sbc/1.jpg'

const images = [
  {
    src: sbc1,
    description: "Security Bank Corporation - Squad 1 Engineers coffee break with: Sir Roger, Robin and Jerald.",
  },
  {
    src: dost1,
    description: "Team BBQ Dinner pic.",
  },
  {
    src: dost2,
    description: "DOST-PCIEERD IT/SD Dept team",
  },
  {
    src: blockchain3,
    description: "With Paytaca CEO Mr. Joemar Taganna, awarding me as 2nd placer for blockchain voting system prototype",
  },
  {
    src: blockchain4,
    description: "Block chain app presentation.",
  },
  {
    src: blockchain5,
    description: "Top 3 blockchain activity performer. I am second placer",
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
    src: it_o1,
    description: "IT olympics bronze medalist with partner Joe Abas",
  },
  {
    src: opt1,
    description: "Optimo International, with our CEO John Rankins",
  },
  {
    src: it_o3,
    description: "IT olympics bronze medalist with partner Joe Abas",
  },
  {
    src: it_o2,
    description: "2nd event 8th IT olympics 2018 with new partner and proctor Ms. Grace Condez",
  },

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
    <Box sx={{ p: 2 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {paginatedImages.map((image, index) => (
          <Box key={index} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <Box
              component="img"
              src={image.src}
              alt={`Gallery ${index}`}
              onClick={() => handleImageClick(index)}
              sx={{
                width: "100%",
                cursor: "pointer",
                transition: "0.3s",
                borderRadius: 2,
                "&:hover": { opacity: 0.85 },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#ccc",
                mt: 0.5,
                px: 0.5,
                fontSize: "0.85rem",
              }}
            >
              {image.description}
            </Typography>
          </Box>
        ))}
      </Masonry>

      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(images.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ace",
              borderColor: "#38bdf8",
            },
            "& .Mui-selected": {
              bgcolor: "#aaa",
              color: "#ffff",
              "&:hover": {
                bgcolor: "#0ea5e9",
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
          slide: ({ slide, rect }) => (
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
