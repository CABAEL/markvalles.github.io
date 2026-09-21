import MUISwitch from './switch';
import light from '../img/light.png';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';

const MotionDiv = motion.div;

const LetThereBeLight = ({ handleToggleDim, dimmed }) => {
  return (
    <MotionDiv
      initial={{ rotate: 0, y: 0 }}
      animate={{
        rotate: [-2.5, 2.5, -2.5],
        y: [0, 1.5, 0],
      }}
      transition={{
        rotate: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      style={{
        transformOrigin: "top center", // Pivots rotation from top ceiling edge
        display: "inline-block",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: '250px',
          height: '240px',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          left: '50%',
          transform: 'translate(-50%, -25%)',
        }}
      >
        <img
          src={light}
          alt="Hanging Lamp"
          style={{
            borderTop: '5px solid #333333',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: dimmed ? 'brightness(40%) contrast(120%)' : 'none',
          }}
        />
        <MUISwitch
          checked={dimmed}
          onChange={handleToggleDim}
          sx={{ position: 'relative', float: 'right', zIndex: 1001 }}
        />
      </Box>
    </MotionDiv>
  );
};

export default LetThereBeLight;