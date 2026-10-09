import { Box, Button, Stack, Typography, Avatar, Chip, Divider, Link } from '@mui/material';
import { LinkedIn, Email, Phone, Download, YouTube } from '@mui/icons-material';
import { motion } from 'framer-motion';
import mypic from '../img/me.png';
import me_sleep from '../img/me_sleep.png';
import ytProfile from '../img/the-bored-dad-dev-profile.png';
import Resume from '../resume/Mark_Valles_v2.pdf';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

const NameCard = ({ dimmed }) => {
  return (
    <>
      <style>
        {`
          @keyframes vhsScanline {
            0% { background-position: 0 0; }
            100% { background-position: 0 120px; }
          }
          @keyframes vhsTrackingGlitch {
            0% { transform: translateY(0); opacity: 0.1; }
            2% { transform: translateY(-15px); opacity: 0.35; }
            4% { transform: translateY(10px); opacity: 0.2; }
            6% { transform: translateY(0); opacity: 0.1; }
            70% { transform: translateY(0); opacity: 0.1; }
            72% { transform: translateY(20px); opacity: 0.4; }
            74% { transform: translateY(-5px); opacity: 0.25; }
            76% { transform: translateY(0); opacity: 0.1; }
            100% { transform: translateY(0); opacity: 0.1; }
          }
          @keyframes crtScanSweep {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1000%); }
          }
        `}
      </style>
      
      {/* Outer Widescreen Monitor Platform Station */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 620,
          mx: 'auto',
          mb: 0,
          pb: 0,
          px: { xs: 1.5, sm: 0 },
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 9999,
          opacity: dimmed ? 0.45 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {/* Main Widescreen Landscape Monitor Head Unit */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            width: '100%',
            p: { xs: 2, sm: 3.5 },
            bgcolor: '#d1d5db',
            borderRadius: 0,
            boxShadow: `
              0 0 50px rgba(96, 165, 250, 0.45),
              0 20px 40px rgba(0, 0, 0, 0.4),
              inset 2px 2px 4px rgba(255, 255, 255, 0.7),
              inset -2px -2px 6px rgba(0, 0, 0, 0.45),
              inset 6px 6px 12px rgba(0, 0, 0, 0.25)
            `,
            border: '1px solid #101318',
            position: 'relative',
            overflow: 'hidden',
            // VHS scanline texture
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(rgba(18, 16, 16, 0) 90%, rgba(0, 0, 0, 0.18) 90%)',
              backgroundSize: '100% 4px',
              pointerEvents: 'none',
              zIndex: 20,
              animation: 'vhsScanline 6s linear infinite',
              opacity: 0.6,
            },
            // VHS tracking distortion bar overlay
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40px',
              background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.25), rgba(0, 255, 255, 0.15), transparent)',
              pointerEvents: 'none',
              zIndex: 21,
              animation: 'vhsTrackingGlitch 5s ease-in-out infinite',
            }
          }}
        >
          {/* CRT TV Top-to-Bottom Thin Monochrome Scanning Light Bar */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '24px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(100, 116, 139, 0.1) 100%)',
              pointerEvents: 'none',
              zIndex: 25,
              animation: 'crtScanSweep 2s linear infinite',
            }}
          />

          {/* Internal Landscape Split-Pane Workspace Grid (Strictly row layout across all screens to keep landscape form) */}
          <Box 
            sx={{ 
              position: 'relative', 
              zIndex: 1,
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: 1.5, sm: 3 },
              alignItems: 'flex-start',
            }}
          >
            {/* Left Pane: Identity, Avatar & Roles */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                minWidth: { xs: '110px', sm: '180px' },
                flexShrink: 0,
              }}
            >
              {dimmed ? (
                <MotionAvatar
                  src={me_sleep}
                  alt="Mark Valles"
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    width: { xs: 75, sm: 110 },
                    height: { xs: 75, sm: 110 },
                    mb: 1,
                    borderRadius: 0,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                />
              ) : (
                <MotionAvatar
                  src={mypic}
                  alt="Mark Valles"
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    width: { xs: 75, sm: 110 },
                    height: { xs: 75, sm: 110 },
                    mb: 1,
                    borderRadius: 0,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                />
              )}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontSize: { xs: '0.95rem', sm: '1.25rem' },
                  color: '#111827',
                  textShadow: '0 1px 0 rgba(255,255,255,0.6)',
                  lineHeight: 1.2,
                }}
              >
                Mark Valles
              </Typography>

              {/* Stacked Vertical Chips for Left Sidebar */}
              <Stack 
                direction="column" 
                spacing={0.5} 
                alignItems="center"
                width="100%"
              >
                <Chip
                  label="System Analyst"
                  size="small"
                  clickable={false}
                  component="div"
                  sx={{
                    width: '100%',
                    height: { xs: '20px', sm: '24px' },
                    fontSize: { xs: '0.65rem', sm: '0.75rem' },
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: 0,
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="Fullstack Dev"
                  size="small"
                  clickable={false}
                  component="div"
                  sx={{
                    width: '100%',
                    height: { xs: '20px', sm: '24px' },
                    fontSize: { xs: '0.65rem', sm: '0.75rem' },
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: 0,
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="AI Engineer"
                  size="small"
                  clickable={false}
                  component="div"
                  sx={{
                    width: '100%',
                    height: { xs: '20px', sm: '24px' },
                    fontSize: { xs: '0.65rem', sm: '0.75rem' },
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: 0,
                    fontWeight: 600,
                  }}
                />
              </Stack>
            </Box>

            {/* Vertical Divider for Widescreen Partition */}
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                borderColor: 'rgba(55, 65, 81, 0.35)',
                my: 0.5,
              }} 
            />

            {/* Right Pane: Contacts, YouTube Channel Banner & Action Buttons */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                flexGrow: 1,
                width: '100%',
                gap: { xs: 1.25, sm: 2 },
                justifyContent: 'center',
                minWidth: 0,
              }}
            >
              {/* YouTube Channel Banner */}
              <Link
                href="https://www.youtube.com/@TheBoredDadDev"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  p: { xs: 1, sm: 1.5 },
                  borderRadius: 0,
                  bgcolor: 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.7)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Avatar
                  src={ytProfile}
                  alt="The Bored Dad Dev"
                  sx={{ width: { xs: 28, sm: 38 }, height: { xs: 28, sm: 38 }, borderRadius: 0, border: 'none' }}
                />
                <Box sx={{ textAlign: 'left', flexGrow: 1, minWidth: 0 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#111827', lineHeight: 1.1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }} noWrap>
                    The Bored Dad Dev
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#4b5563', fontSize: { xs: '0.65rem', sm: '0.75rem' } }} noWrap>
                    youtube.com/@TheBoredDadDev
                  </Typography>
                </Box>
                <YouTube sx={{ color: '#dc2626', fontSize: { xs: '20px', sm: '26px' }, flexShrink: 0 }} />
              </Link>

              {/* Contact Information Group */}
              <Stack spacing={0.75} sx={{ px: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ color: '#1f2937', fontSize: { xs: '16px', sm: '20px' } }} />
                  <Typography variant="body2" sx={{ color: '#1f2937', fontWeight: 500, fontSize: { xs: '0.7rem', sm: '0.875rem' } }} noWrap>
                    vallesmark15@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ color: '#1f2937', fontSize: { xs: '16px', sm: '20px' } }} />
                  <Typography variant="body2" sx={{ color: '#1f2937', fontWeight: 500, fontSize: { xs: '0.7rem', sm: '0.875rem' } }} noWrap>
                    +63 956 443 3716
                  </Typography>
                </Box>
              </Stack>

              {/* Action Buttons */}
              <Stack direction="row" spacing={1} pt={0.5}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Download sx={{ fontSize: { xs: '14px', sm: '20px' } }} />}
                  href={Resume}
                  target="_blank"
                  fullWidth
                  sx={{
                    backgroundColor: '#111827',
                    color: '#ffffff',
                    borderRadius: 0,
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    py: { xs: 0.5, sm: 1 },
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor: '#1f2937',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  Resume
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<LinkedIn sx={{ color: '#0a66c2', fontSize: { xs: '14px', sm: '20px' } }} />}
                  href="https://www.linkedin.com/in/mark-valles-bb7251246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{
                    borderColor: '#374151',
                    color: '#111827',
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', sm: '0.875rem' },
                    py: { xs: 0.5, sm: 1 },
                    '&:hover': {
                      borderColor: '#111827',
                      backgroundColor: 'rgba(17, 24, 39, 0.08)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </Box>
        </MotionBox>

        {/* Monitor Neck Stand */}
        <Box
          sx={{
            width: '64px',
            height: '24px',
            bgcolor: '#374151',
            borderLeft: '2px solid #1f2937',
            borderRight: '2px solid #1f2937',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
            mb: 0,
          }}
        />

        {/* Platform Desktop Base Mount */}
        <Box
          sx={{
            width: '340px',
            height: '16px',
            bgcolor: '#1f2937',
            border: '2px solid #111827',
            borderRadius: 0,
            boxShadow: '0 10px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            mb: 0,
          }}
        />
      </Box>
    </>
  );
};

export default NameCard;