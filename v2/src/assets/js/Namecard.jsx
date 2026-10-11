import { useState } from 'react';
import { Box, Button, Stack, Typography, Avatar, Chip, Divider, Link, Dialog, IconButton } from '@mui/material';
import { LinkedIn, Email, Phone, Download, YouTube, Close as CloseIcon, PowerSettingsNew } from '@mui/icons-material';
import { motion } from 'framer-motion';
import mypic from '../img/me.png';
import me_sleep from '../img/me_sleep.png';
import ytProfile from '../img/the-bored-dad-dev-profile.png';
import Resume from '../resume/Mark_Valles_v2.pdf';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

const NameCard = ({ dimmed }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [powerOn, setPowerOn] = useState(true);
  const [animatingKey, setAnimatingKey] = useState(0);
  const activeImage = dimmed ? me_sleep : mypic;

  const handlePowerToggle = () => {
    setPowerOn((prev) => !prev);
    setAnimatingKey((prev) => prev + 1);
  };

  return (
    <>
      <style>
        {`
          @keyframes vhsScanline {
            0% { background-position: 0 0; }
            100% { background-position: 0 120px; }
          }
          @keyframes vhsTrackingGlitch {
            0% { transform: translateY(0); opacity: 0.15; }
            2% { transform: translateY(-15px); opacity: 0.35; }
            4% { transform: translateY(10px); opacity: 0.25; }
            6% { transform: translateY(0); opacity: 0.15; }
            70% { transform: translateY(0); opacity: 0.15; }
            72% { transform: translateY(20px); opacity: 0.4; }
            74% { transform: translateY(-5px); opacity: 0.25; }
            76% { transform: translateY(0); opacity: 0.15; }
            100% { transform: translateY(0); opacity: 0.15; }
          }
          @keyframes crtScanSweep {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(14%); }
          }
          @keyframes crtTurnOn {
            0% {
              filter: brightness(0) contrast(0);
              transform: scaleY(0.002) scaleX(0.08);
              opacity: 0;
            }
            40% {
              filter: brightness(2.5) contrast(1.5);
              transform: scaleY(0.06) scaleX(1.02);
              opacity: 1;
            }
            70% {
              filter: brightness(1.2) contrast(1.1);
              transform: scaleY(1.02) scaleX(1);
              opacity: 1;
            }
            100% {
              filter: brightness(1) contrast(1);
              transform: scaleY(1) scaleX(1);
              opacity: 1;
            }
          }
          @keyframes crtTurnOff {
            0% {
              filter: brightness(1) contrast(1);
              transform: scaleY(1) scaleX(1);
              opacity: 1;
            }
            30% {
              filter: brightness(2) contrast(1.5);
              transform: scaleY(0.04) scaleX(1.05);
              opacity: 1;
            }
            75% {
              filter: brightness(4) contrast(2);
              transform: scaleY(0.002) scaleX(0.15);
              opacity: 0.9;
            }
            100% {
              filter: brightness(0) contrast(0);
              transform: scaleY(0) scaleX(0);
              opacity: 0;
            }
          }
        `}
      </style>
      
      {/* Outer Wrapper Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 680,
          pl: { xs: 0, sm: 4, md: 6 },
          mx: { xs: 'auto', lg: 0 },
          mb: 0,
          pb: 0,
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 9999,
          opacity: dimmed ? 0.45 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {/* Main CRT Television Chassis Cabinet */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            width: '100%',
            p: { xs: 1.5, sm: 2.5, md: 3 },
            bgcolor: '#2b2c30',
            background: 'linear-gradient(180deg, #383a40 0%, #222327 100%)',
            borderRadius: '12px',
            border: '2px solid #141518',
            boxShadow: `
              0 35px 30px rgba(0, 0, 0, 0.4),
              inset 2px 2px 3px rgba(255, 255, 255, 0.1),
              inset -4px -4px 8px rgba(0, 0, 0, 0.8)
            `,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Deep Sunken Bezel Framing the CRT Tube Glass */}
          <Box
            sx={{
              p: { xs: 1.25, sm: 2 },
              bgcolor: '#1b1c20',
              borderRadius: '8px',
              border: '3px solid #111215',
              boxShadow: `
                inset 8px 8px 16px rgba(0, 0, 0, 0.95),
                inset -6px -6px 12px rgba(255, 255, 255, 0.05),
                0 2px 4px rgba(0, 0, 0, 0.6)
              `,
              position: 'relative',
            }}
          >
            {/* The CRT Screen Tube Base */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                bgcolor: powerOn ? '#d1d5db' : '#aeb5a2',
                transition: 'background-color 0.3s ease',
                borderRadius: '7px / 22px',
                overflow: 'hidden',
                border: '4px solid #111215',
                boxShadow: `
                  inset 0 0 50px rgba(0, 0, 0, 0.7),
                  inset 0 0 15px rgba(0, 0, 0, 0.9),
                  0 0 10px rgba(0, 0, 0, 0.8)
                `,
              }}
            >
              {/* Animated Screen Content Wrapper */}
              <Box
                key={animatingKey}
                sx={{
                  p: { xs: 1.25, sm: 2, md: 2.5 },
                  position: 'relative',
                  width: '100%',
                  opacity: powerOn ? 1 : 0,
                  animation: powerOn
                    ? 'crtTurnOn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    : 'crtTurnOff 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%)',
                    backgroundSize: '100% 4px',
                    pointerEvents: 'none',
                    zIndex: 20,
                    animation: 'vhsScanline 6s linear infinite',
                    opacity: 0.6,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40px',
                    background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), rgba(0, 255, 255, 0.15), transparent)',
                    pointerEvents: 'none',
                    zIndex: 21,
                    animation: 'vhsTrackingGlitch 5s ease-in-out infinite',
                  },
                }}
              >
                {/* CRT Refresh Wave Sweep */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 86%, rgba(255,255,255,0.08) 92%, rgba(255,255,255,0.22) 98%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none',
                    zIndex: 25,
                    willChange: 'transform',
                    animation: 'crtScanSweep 2.8s linear infinite',
                  }}
                />

                {/* Internal Split-Pane Layout */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: { xs: 1, sm: 1.5, md: 2 },
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
                      minWidth: { xs: '85px', sm: '125px', md: '145px' },
                      flexShrink: 0,
                    }}
                  >
                    <MotionAvatar
                      src={activeImage}
                      alt="Mark Valles"
                      onClick={() => setPreviewOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        width: { xs: 60, sm: 85, md: 95 },
                        height: { xs: 60, sm: 85, md: 95 },
                        mb: 0.75,
                        borderRadius: 0,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(8px)',
                        cursor: 'pointer',
                      }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mb: 0.75,
                        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.15rem' },
                        color: '#111827',
                        textShadow: '0 1px 0 rgba(255,255,255,0.8)',
                        lineHeight: 1.2,
                      }}
                    >
                      Mark Valles
                    </Typography>

                    <Stack direction="column" spacing={0.4} alignItems="center" width="100%">
                      <Chip
                        label="System Analyst"
                        size="small"
                        clickable={false}
                        component="div"
                        sx={{
                          width: '100%',
                          height: { xs: '18px', sm: '22px' },
                          fontSize: { xs: '0.58rem', sm: '0.68rem' },
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
                          height: { xs: '18px', sm: '22px' },
                          fontSize: { xs: '0.58rem', sm: '0.68rem' },
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
                          height: { xs: '18px', sm: '22px' },
                          fontSize: { xs: '0.58rem', sm: '0.68rem' },
                          color: '#ffffff',
                          backgroundColor: '#1f2937',
                          borderRadius: 0,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                  </Box>

                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: 'rgba(55, 65, 81, 0.35)',
                      my: 0.5,
                    }}
                  />

                  {/* Right Pane: Contacts & YouTube Banner */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      width: '100%',
                      gap: { xs: 0.75, sm: 1.25 },
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
                        gap: { xs: 0.5, sm: 1 },
                        p: { xs: 0.5, sm: 0.75 },
                        px: { xs: 0.75, sm: 1 },
                        borderRadius: 0,
                        bgcolor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.95)',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      <Avatar
                        src={ytProfile}
                        alt="The Bored Dad Dev"
                        sx={{
                          width: { xs: 24, sm: 30 },
                          height: { xs: 24, sm: 30 },
                          borderRadius: 0,
                          border: 'none',
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ textAlign: 'left', flexGrow: 1, minWidth: 0 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#0f172a',
                            lineHeight: 1.1,
                            fontSize: { xs: '0.65rem', sm: '0.78rem' },
                          }}
                          noWrap
                        >
                          The Bored Dad Dev
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#334155',
                            fontSize: { xs: '0.55rem', sm: '0.65rem' },
                            display: 'block',
                            lineHeight: 1.1,
                          }}
                          noWrap
                        >
                          youtube.com/@TheBoredDadDev
                        </Typography>
                      </Box>
                      <YouTube sx={{ color: '#dc2626', fontSize: { xs: '16px', sm: '22px' }, flexShrink: 0 }} />
                    </Link>

                    {/* Contact Info (Fully Readable Gmail) */}
                    <Stack spacing={0.5} sx={{ px: 0.25 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0 }}>
                        <Email sx={{ color: '#1f2937', fontSize: { xs: '14px', sm: '18px' }, flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#1f2937',
                            fontWeight: 600,
                            fontSize: { xs: '0.62rem', sm: '0.75rem', md: '0.8rem' },
                            letterSpacing: '-0.01em',
                            wordBreak: 'break-all',
                            lineHeight: 1.2,
                          }}
                        >
                          vallesmark15@gmail.com
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0 }}>
                        <Phone sx={{ color: '#1f2937', fontSize: { xs: '14px', sm: '18px' }, flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#1f2937',
                            fontWeight: 600,
                            fontSize: { xs: '0.62rem', sm: '0.75rem', md: '0.8rem' },
                            letterSpacing: '-0.01em',
                          }}
                          noWrap
                        >
                          +63 956 443 3716
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={0.75} pt={0.25}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Download sx={{ fontSize: { xs: '12px', sm: '16px' } }} />}
                        href={Resume}
                        target="_blank"
                        fullWidth
                        sx={{
                          backgroundColor: '#111827',
                          color: '#ffffff',
                          borderRadius: 0,
                          fontWeight: 600,
                          fontSize: { xs: '0.62rem', sm: '0.75rem' },
                          py: { xs: 0.3, sm: 0.6 },
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          '&:hover': {
                            backgroundColor: '#1f2937',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        Resume
                      </Button>

                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LinkedIn sx={{ color: '#0a66c2', fontSize: { xs: '12px', sm: '16px' } }} />}
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
                          fontSize: { xs: '0.62rem', sm: '0.75rem' },
                          py: { xs: 0.3, sm: 0.6 },
                          '&:hover': {
                            borderColor: '#111827',
                            backgroundColor: 'rgba(17, 24, 39, 0.08)',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        LinkedIn
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom Control Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 1.5,
              pt: 1,
              px: 1,
              borderTop: '2px solid #1c1d21',
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: { xs: 60, sm: 90 },
                  height: '22px',
                  bgcolor: '#18191c',
                  borderRadius: '3px',
                  border: '1px solid #111215',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  p: '3px',
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <Box key={i} sx={{ height: '2px', bgcolor: '#2e3036' }} />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: '2px', height: '6px' }}>
                {['#ef4444', '#f59e0b', '#10b981', '#3b82f6'].map((color) => (
                  <Box key={color} sx={{ width: '8px', height: '100%', bgcolor: color, borderRadius: '1px' }} />
                ))}
              </Box>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  bgcolor: '#100303',
                  border: '1px solid #2a1111',
                  borderRadius: '2px',
                  px: 1,
                  py: 0.25,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography variant="caption" sx={{ color: powerOn ? '#ef4444' : '#331111', fontFamily: 'monospace', fontWeight: 'bold' }}>
                  CH 15
                </Typography>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: powerOn ? '#ef4444' : '#3d0c0c',
                    boxShadow: powerOn ? '0 0 6px #ef4444' : 'none',
                  }}
                />
              </Box>

              <Button
                size="small"
                variant="contained"
                onClick={handlePowerToggle}
                startIcon={<PowerSettingsNew sx={{ fontSize: '14px !important' }} />}
                sx={{
                  bgcolor: '#1c1d21',
                  color: '#9ca3af',
                  fontSize: '0.65rem',
                  fontFamily: 'monospace',
                  borderRadius: '4px',
                  border: '1px solid #374151',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: '#2b2c30', color: '#ffffff' },
                }}
              >
                PWR
              </Button>
            </Stack>
          </Box>
        </MotionBox>
      </Box>

      {/* Image Preview Lightbox Dialog */}
      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        maxWidth="md"
        PaperProps={{
          sx: {
            bgcolor: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 0,
            overflow: 'hidden',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton
            onClick={() => setPreviewOpen(false)}
            sx={{ color: '#ffffff', '&:hover': { color: '#9ca3af' } }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          component="img"
          src={activeImage}
          alt="Mark Valles Preview"
          sx={{
            width: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: 0,
          }}
        />
      </Dialog>
    </>
  );
};

export default NameCard;