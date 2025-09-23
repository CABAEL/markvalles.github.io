import { Box, Button, Stack, Typography, Avatar, Chip, Divider } from '@mui/material';
import { LinkedIn, Email, Phone, Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import mypic from '../img/me.png';
import Resume from '../resume/Mark_Valles.pdf';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

const NameCard = ({ dimmed }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        maxWidth: 420,
        mx: "auto",
        mt: 3,
        mb: 5,
        textAlign: 'center',
        p: 4,
        borderRadius: 0,
        boxShadow: dimmed
        ? '0 8px 24px rgba(0, 0, 0, 1)'
        : '0px 0px 0px rgba(0, 0, 0, 0.3)',
      }}
    >
      <MotionAvatar
        src={mypic}
        alt="Mark Valles"
        whileHover={{ scale: 1.05 }}
        sx={{
          width: 120,
          height: 120,
          mx: 'auto',
          mb: 2,
          border: '3px solid rgba(255,255,255,0.6)',
          boxShadow: dimmed
            ? '0 8px 24px rgba(0, 0, 0, 0.6)'
            : '0 8px 24px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(8px)',
        }}
      />

      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 1,
          color: dimmed ? '#FFFFFF' : '#ffff',
          textShadow: dimmed ? '0 2px 4px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        Mark Valles
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
        <Chip
          label="System Analyst"
          size="small"
          sx={{
            color: '#222',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(6px)',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        />
        <Chip
          label="Fullstack Developer"
          size="small"
          sx={{
            color: '#222',
            backgroundColor: 'rgba(240, 240, 240, 0.8)',
            backdropFilter: 'blur(6px)',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(250, 250, 250, 1)',
            },
          }}
        />
      </Stack>

      <Divider
        sx={{
          my: 2,
          borderColor: 'rgba(255, 255, 255, 0.25)',
        }}
      />

      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Email
            sx={{
              color: dimmed ? '#EAEAEA' : '#333',
            }}
            fontSize="small"
          />
          <Typography
            variant="body2"
            sx={{
              color: dimmed ? '#EAEAEA' : '#ffff',
            }}
          >
            vallesmark15@gmail.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Phone
            sx={{
              color: dimmed ? '#EAEAEA' : '#333',
            }}
            fontSize="small"
          />
          <Typography
            variant="body2"
            sx={{
              color: dimmed ? '#EAEAEA' : '#fff',
            }}
          >
            +63 956 443 3716
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button
            variant="contained"
            startIcon={<Download />}
            href={Resume}
            target="_blank"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#222',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#fff',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              },
            }}
          >
            Resume
          </Button>

          <Button
            variant="outlined"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/mark-valles-bb7251246/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.6)',
              color: dimmed ? '#FFF' : '#222',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(6px)',
              fontWeight: 500,
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.9)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export default NameCard;
