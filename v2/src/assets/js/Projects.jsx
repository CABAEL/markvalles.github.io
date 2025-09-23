import React from "react";
import {
  Typography,
  Link,
  Button,
  Grid,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from 'framer-motion';

const projects = [
  {
    type: "MAX AI VOICE ASSISTANT",
    name: "MAX AI",
    description:
      "AI Assistant hosted using LM Studio, integrated with Node.js and Python for voice interaction.",
    link: "https://github.com/CABAEL/max_ai",
    linkText: "View Repo",
  },
  {
    type: "HR Management System",
    name: "HRMS",
    description:
      "For sale to Customize, HR system for small teams—includes employee profiles, DTR, and payroll.",
    link: "https://github.com/CABAEL/HRMS.git",
    linkText: "View Repo",
  },
  {
    type: "Sales Software",
    name: "The Sales Machine",
    description:
      "Creating API and organizing controllers for the backend using Code Igniter and jQuery for Frontend.",
    link: "https://thesalesmachine.com/",
    linkText: "Visit Site",
  },
  {
    type: "Document Management System",
    name: "QRSYS",
    description:
      "Secure document management with unique QR codes for fast access and verification, roles, and password protection.",
    link: "https://github.com/CABAEL/qrsys",
    linkText: "View Repo",
  },
  {
    type: "Testing Tool",
    name: "WTSK - WEB TESTING STARTER KIT",
    description:
      "Thesis project where I was the main developer and concept creator, made with PHP and Selenium PHP plugin.",
    link: "projects/THESIS_WTSK.pdf",
    linkText: "View PDF",
  },
  {
    type: "Blockchain Voting System",
    name: "Voting System",
    description:
      "2nd place in a training activity competition. Built with Vue, Solidity, and Remix.",
    link: "https://github.com/CABAEL/blockchain_voting_system",
    linkText: "View Repo",
  },
  {
    type: "DOST-PCIEERD Agency Tracker",
    name: "Strategic Performance Management System",
    description:
      "Agency system to track targets and productivity with semester reports.",
    link: "",
    linkText: "Hosted under private domain",
  },
  {
    type: "Inventory Management",
    name: "WAIS - WAREHOUSE AUTOMATED INVENTORY SYSTEM",
    description:
      "Full stack outsourced project for PNP SMS OFFICE Inventory Prototype Software.",
    link: "projects/WAIS_MANUAL.pdf",
    linkText: "View PDF",
  },
  {
    type: "Record Management",
    name: "Record Office Application Solution",
    description:
      "Successfully implemented for record office sector of Taguig City Hall. Presented by my co-dev Mr. Rasdi Kasim.",
    link: "https://www.dailymotion.com/embed/video/x7ushww",
    linkText: "Watch Demo Video",
  },
];



const getProjectBackgroundColor = () => {
  // Use the first card design for all cards
  return 'linear-gradient(135deg, #333232ff 0%, #0e0e11ff 50%, #141218ff 100%)';
};

const getProjectAccentColor = () => {
  // Use the first card accent color for all cards
  return '#F0F0F0';
};

const ProjectsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md" sx={{ color: "#FFFFFF", minHeight: "auto" }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ pt: 5,
          color: '#ffff',
          textShadow: '1px 1px 2px #000',
        }}
      >
        Featured Projects
      </Typography>
      <Typography 
        variant="h6" 
        align="center"
        sx={{ mb: 4, color: '#F0F0F0' }}
      >
        Showcasing innovative solutions and technical expertise
      </Typography>
      
      <Grid container spacing={1} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Box
                sx={{
                  width: { lg: "240px", md: "220px", xs: "100%" },
                  background: getProjectBackgroundColor(),
                  color: "#FFFFFF",
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                  '&:hover': {
                    boxShadow: `0 12px 32px rgba(0, 0, 0, 0.4), 0 0 20px ${getProjectAccentColor()}20`,
                    transform: 'translateY(-4px)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '40px',
                    height: '40px',
                    background: `radial-gradient(circle at center, ${getProjectAccentColor()}40, transparent 70%)`,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${getProjectAccentColor()}, transparent)`,
                    opacity: 0.6,
                  },
                }}
              >
              <Typography
                variant="caption"
                sx={{ 
                  color: getProjectAccentColor(), 
                  fontWeight: 600, 
                  mb: 0.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {project.type}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#FFFFFF", mb: 0.5 }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#B0B0B0", mb: 1 }}
              >
                {project.description}
              </Typography>
              {project.link ? (
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    color: getProjectAccentColor(),
                    borderColor: getProjectAccentColor(),
                    textTransform: "none",
                    mt: "auto",
                    fontWeight: 500,

                    transition: 'all 0.3s ease',
                    "&:hover": {
                      bgcolor: getProjectAccentColor(),
                      color: "#333333",
                      transform: 'scale(1.05)',
                      boxShadow: `0 4px 12px ${getProjectAccentColor()}40`,
                    },
                  }}
                  component={Link}
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                >
                  {project.linkText}
                </Button>
              ) : (
                <Typography variant="caption" sx={{ color: "#707070", fontWeight: "bold" }}>
                  {project.linkText}
                </Typography>
              )}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsList;
