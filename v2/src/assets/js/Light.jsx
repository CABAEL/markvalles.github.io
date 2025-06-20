import MUISwitch from './switch';
import light from '../img/light.png'
import { motion } from "framer-motion"
import Box from '@mui/material/Box';    

const MotionDiv = motion.div;


const LetThereBeLight = ({handleToggleDim,dimmed}) => {

    return (
        <MotionDiv
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: 1,
                y: ["0vh", "-1vh", "0vh"]
            }}
            transition={{
                opacity: { duration: 0.5 }, // controls the fade-in and scale-up duration
                scale: { duration: 0.5 },
                y: { delay: 0.5, duration: 5, repeat: Infinity, repeatType: "loop" } // delay ensures the jump starts after the initial animation
            }}
        >

            <Box
                sx={{
                    width: '250px',
                    height: '250px',
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-50%, -25%)',
                    mt:2
                }}
            >
                <img src={light} alt="Image" style={{borderTop:'5px solid #222',width: '100%', height: '100%', objectFit: 'contain', filter: dimmed ? 'brightness(40%) contrast(120%)' : 'none', }} />
                <MUISwitch checked={dimmed} onChange={handleToggleDim} sx={{ position: 'relative', float: 'right', zIndex: 1001 }} />
            </Box>

        </MotionDiv>
    )

}

export default LetThereBeLight