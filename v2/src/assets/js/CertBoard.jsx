import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion correctly
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
import { Margin } from '@mui/icons-material';

const images = [
  port06,dsse, yempo, pcieerd, optimo, port01, port02, port03, port04, port05,
  dost1, blockchain, dbp, internship, careerpath, diploma
];

const CertificationBoard = ({ dimmed }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Grid container spacing={1} p={{xs:5,lg:7}}>
      {images.map((image, i) => (
        <Grid item xs={6} sm={4} md={2.5} key={i}>
          <motion.div
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{
              cursor: 'pointer',
              border: '1px solid #111',
              borderRadius: '0px',
              overflow: 'hidden',
              boxShadow: dimmed ? 'none' : '-5px 4px 3px 3px #444',
            }}
            whileHover={{
              scale: 1.1,  // Scale up when hovered
              transition: { duration: 0.3 }, // Smooth transition
            }}
          >
            <img
              src={image}
              alt={`Certification ${i + 1}`}
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        </Grid>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </Grid>
  );
};

export default CertificationBoard;
