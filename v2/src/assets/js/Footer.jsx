import React from "react";
import { Box, Typography, Container, Stack, IconButton, Divider } from "@mui/material";
import { LinkedIn, GitHub, Email, Favorite } from "@mui/icons-material";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = ({ dimmed, data}) => {
  console.log(data);
  return (
    <MotionBox
      component="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        width: "100%",
        py: 6,
        px: 2,
        backgroundColor: "#2A2A2A",
        color: "#FFFFFF",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          {/* Social Links */}
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://www.linkedin.com/in/mark-valles-bb7251246/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#F0F0F0',
                bgcolor: 'rgba(240, 240, 240, 0.1)',
                '&:hover': {
                  bgcolor: '#F0F0F0',
                  color: '#333333',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedIn />
            </IconButton>
            
            <IconButton
              href="https://github.com/CABAEL"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#F0F0F0',
                bgcolor: 'rgba(240, 240, 240, 0.1)',
                '&:hover': {
                  bgcolor: '#F0F0F0',
                  color: '#333333',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub />
            </IconButton>
            
            <IconButton
              href="mailto:vallesmark15@gmail.com"
              sx={{
                color: '#F0F0F0',
                bgcolor: 'rgba(240, 240, 240, 0.1)',
                '&:hover': {
                  bgcolor: '#F0F0F0',
                  color: '#333333',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Email />
            </IconButton>
          </Stack>

          <Divider sx={{ width: '100%', borderColor: '#B0B0B0' }} />

          {/* Footer Text */}
          <Stack spacing={1} alignItems="center">
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 500,
                color: '#FFFFFF',
              }}
            >
              Designed & Built by Mark Valles
            </Typography>
            
            <Typography variant="caption" sx={{ color: '#B0B0B0' }}>
              © 2025 Mark Valles. All rights reserved.
            </Typography>


            <Box
              sx={{
                position: 'relative',
                bottom: 0,
                height: 70,
                opacity: 1,
                mt: 5,
                mb: 2,
                p: 2,
                filter: 'brightness(500%)',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 1,
                mx: 'auto'
              }}
              component="img"
              src={!dimmed ? data[0] : data[1]}
              alt="WALK WITH ME"
            />

          </Stack>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Footer;
