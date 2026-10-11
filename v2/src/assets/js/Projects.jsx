import React, { useState, useEffect } from "react";
import {
  Typography,
  Link,
  Box,
  useTheme,
  useMediaQuery,
  Modal,
  IconButton,
  Backdrop,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { motion as Motion, AnimatePresence } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import thesis from "../pdf/THESIS_WTSK.pdf";
import wais from "../pdf/WAIS_MANUAL.pdf";

const projectsData = [
  {
    type: "Productivity Utility",
    name: "Idle Police",
    description:
      "Lightweight Windows background app designed to eliminate idle distractions and maintain flow state. Runs in the system tray tracking inactivity via Windows API, triggering a full-screen siren overlay with audio if idle threshold is exceeded, and silencing instantly upon mouse/keyboard movement.",
    link: "https://github.com/CABAEL/idle_police",
    linkText: "View Repo",
    youtubeUrl: "https://www.youtube.com/embed/HUP7mSn2w-E",
    mediaType: "youtube",
    spineColor: "#1a2a3a",
    tilt: 0,
  },
  {
    type: "Browser Game",
    name: "Mostquito",
    description:
      "Are you bored like me? Try swatting away an army of mosquitoes before they crash your browser! It's a browser game: no need to install, no need to login! Best to play in PC but you can try it in mobile too! However, playing in mobile is a bit easy. Test your reaction time and patience, LOL! Apparently, I'm not even that good at it even though I built the game. You can download your stats image to share your score.",
    link: "https://cabael.github.io/mostquito.github.io/",
    linkText: "Play Game",
    youtubeUrl: "https://www.youtube.com/embed/JqyGV9NjSe4",
    verticalMedia: true,
    mediaType: "youtube",
    spineColor: "#1a1a3a",
    tilt: -2,
  },
  {
    type: "MAX AI VOICE ASSISTANT",
    name: "MAX AI",
    description:
      "AI Assistant hosted using LM Studio, integrated with Node.js and Python for voice interaction.",
    link: "https://github.com/CABAEL/max_ai",
    linkText: "View Repo",
    mediaType: "code",
    spineColor: "#3a1a1a",
    tilt: 2,
  },
  {
    type: "HR Management System",
    name: "HRMS",
    description:
      "For sale to Customize, HR system for small teams—includes employee profiles, DTR, and payroll.",
    link: "https://github.com/CABAEL/HRMS.git",
    linkText: "View Repo",
    mediaType: "code",
    spineColor: "#1a3a2a",
    tilt: -2,
  },
  {
    type: "Sales Software",
    name: "The Sales Machine",
    description:
      "Creating API and organizing controllers for the backend using Code Igniter and jQuery for Frontend.",
    link: "https://thesalesmachine.com/",
    linkText: "Visit Site",
    iframeUrl: "https://thesalesmachine.com/",
    mediaType: "iframe",
    spineColor: "#3a3a1a",
    tilt: 3,
  },
  {
    type: "Document Management System",
    name: "QRSYS",
    description:
      "Secure document management with unique QR codes for fast access and verification, roles, and password protection.",
    link: "https://github.com/CABAEL/qrsys",
    linkText: "View Repo",
    mediaType: "code",
    spineColor: "#2a1a3a",
    tilt: -3,
  },
  {
    type: "Testing Tool",
    name: "WTSK - WEB TESTING STARTER KIT",
    description:
      "Thesis project where I was the main developer and concept creator, made with PHP and Selenium PHP plugin.",
    link: thesis,
    linkText: "View PDF",
    mediaType: "pdf",
    spineColor: "#3a2a1a",
    tilt: -2,
  },
  {
    type: "DOST-PCIEERD Agency Tracker",
    name: "Strategic Performance Management System",
    description:
      "Agency system to track targets and productivity with semester reports.",
    link: "",
    linkText: "Hosted under private domain",
    mediaType: "private",
    spineColor: "#1a3a3a",
    tilt: 3,
  },
  {
    type: "Blockchain Voting System",
    name: "Voting System",
    description:
      "2nd place in a training activity competition. Built with Vue, Solidity, and Remix.",
    link: "https://github.com/CABAEL/blockchain_voting_system",
    linkText: "View Repo",
    mediaType: "code",
    spineColor: "#3a1a2a",
    tilt: -3,
  },
  {
    type: "Inventory Management",
    name: "WAIS - WAREHOUSE AUTOMATED INVENTORY SYSTEM",
    description:
      "Full stack outsourced project for PNP SMS OFFICE Inventory Prototype Software.",
    link: wais,
    linkText: "View PDF",
    mediaType: "pdf",
    spineColor: "#2a3a1a",
    tilt: 2,
  },
  {
    type: "Company Website",
    name: "Peacemaker Filmworks East",
    description:
      "WordPress site for a specialty camera team and service provider to the Canadian film & television industry.",
    link: "https://peacemakerfilmworkseast.com/",
    linkText: "Visit Site",
    iframeUrl: "https://peacemakerfilmworkseast.com/",
    mediaType: "iframe",
    spineColor: "#202028",
    tilt: -2,
  },
];

const projects = [...projectsData].sort((a, b) => {
  if (a.name === "Idle Police") return -1;
  if (b.name === "Idle Police") return 1;
  if (a.link && !b.link) return -1;
  if (!a.link && b.link) return 1;
  return 0;
});

const ProjectsList = ({ dimmed }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [isLightOn, setIsLightOn] = useState(!dimmed);

  useEffect(() => {
    setIsLightOn(!dimmed);
  }, [dimmed]);

  const handleOpenModal = (project, e) => {
    if (e.target.closest("a")) return;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box sx={{ color: "#FFFFFF", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ textAlign: "center", mb: 1.5, width: "100%" }}>
        <Typography
          fontWeight="800"
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 0.25,
            color: 'rgb(225, 234, 243)',
            textShadow: '1px 1px 2px #000',
            fontSize: { xs: "1.3rem", sm: "1.6rem" },
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#D0D0D0", fontWeight: 500, fontSize: "0.78rem", pb: 5 }}
        >
          Explore code repositories and live systems organized on the developer bookshelf
        </Typography>
      </Box>

      {/* Wider Single-Tier Shelf Cabinet Container */}
      <Box
        sx={{
          position: "relative",
          bgcolor: isLightOn ? "#1c1c24" : "#0a0a0e",
          border: "5px solid #281e17",
          borderRadius: "12px",
          p: { xs: 2, sm: 3 },
          boxShadow: isLightOn
            ? "0 15px 40px rgba(0, 0, 0, 0.8), inset 0 30px 30px rgba(186, 230, 253, 0.08)"
            : "0 15px 40px rgba(0, 0, 0, 0.95), inset 0 0 30px rgba(0,0,0,0.8)",
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          overflow: "visible",
          width: "100%",
          maxWidth: { xs: "100%", sm: "700px", md: "800px" }, 
          mx: "auto",
        }}
      >
        {/* Light switch control */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 14,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            bgcolor: "rgba(0,0,0,0.4)",
            px: 1.25,
            py: 0.25,
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <WbIncandescentIcon
            sx={{
              fontSize: "0.95rem",
              color: isLightOn ? "#38bdf8" : "#6c707e",
              filter: isLightOn ? "drop-shadow(0 0 4px #38bdf8)" : "none",
              transition: "all 0.3s ease",
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={isLightOn}
                onChange={(e) => setIsLightOn(e.target.checked)}
                size="small"
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#38bdf8" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#0ea5e9" },
                }}
              />
            }
            label=""
            sx={{ m: 0 }}
          />
        </Box>

        {/* Overhead Light Glow */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: "5px",
            bgcolor: isLightOn ? "#e0f2fe" : "transparent",
            boxShadow: isLightOn ? "0 6px 20px 6px rgba(186, 230, 253, 0.35)" : "none",
            borderRadius: "50%",
            transition: "all 0.4s ease",
          }}
        />

        {/* Single Shelf Row Container */}
        <Box sx={{ position: "relative", overflow: "visible", pt: 2.5, pb: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "14px",
              alignItems: "flex-end",
              px: 1,
              overflowX: "auto",
              py: 1,
              /* Custom scrollbar to match shelf theme */
              '&::-webkit-scrollbar': {
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'rgba(0,0,0,0.3)',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: '#3d2e24',
                borderRadius: '3px',
                '&:hover': {
                  bgcolor: '#523e31',
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                style={{ flexShrink: 0, overflow: "visible" }}
              >
                <Box
                  onClick={(e) => handleOpenModal(project, e)}
                  component={Motion.div}
                  animate={{ rotate: project.tilt }}
                  whileHover={{
                    y: -18,
                    x: 0,
                    scale: 1.04,
                    rotate: 0,
                    zIndex: 50,
                    boxShadow: isLightOn
                      ? "12px 16px 28px rgba(0,0,0,0.9)"
                      : "6px 10px 18px rgba(0,0,0,0.95)",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  sx={{
                    width: { xs: "44px", sm: "52px" },
                    height: { xs: "220px", sm: "270px" },
                    bgcolor: project.spineColor,
                    borderRadius: "2px 4px 2px 2px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderLeft: "3px solid rgba(255,255,255,0.22)",
                    boxShadow: isLightOn
                      ? "2px 4px 10px rgba(0,0,0,0.7), inset -2px 0 6px rgba(0,0,0,0.5)"
                      : "1px 3px 8px rgba(0,0,0,0.9), inset -2px 0 8px rgba(0,0,0,0.8)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0.5,
                    position: "relative",
                    overflow: "hidden",
                    transformOrigin: "bottom center",
                    transformStyle: "preserve-3d",
                    filter: isLightOn ? "brightness(100%)" : "brightness(65%)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      height: "100%",
                      py: 0.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: "#FFFFFF",
                        fontSize: { xs: "0.55rem", sm: "0.64rem" },
                        lineHeight: 1.2,
                        letterSpacing: "0.3px",
                        textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.name}
                    </Typography>
                  </Box>
                </Box>
              </Motion.div>
            ))}
          </Box>

          {/* Bottom Shelf Wooden Base Plank */}
          <Box
            sx={{
              height: "18px",
              bgcolor: "#281e17",
              borderTop: "1px solid #3d2e24",
              borderBottom: "4px solid #14100d",
              boxShadow: "0 4px 10px rgba(0,0,0,0.8)",
              mt: 1.5,
              mx: -3,
              mb: -2.5,
            }}
          />
        </Box>
      </Box>

      {/* Project Details Modal */}
      <Modal
        open={Boolean(selectedProject)}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 350,
            sx: { bgcolor: "rgba(5, 5, 7, 0.85)", backdropFilter: "blur(6px)" },
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <AnimatePresence>
          {selectedProject && (
            <Box
              component={Motion.div}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "550px" },
                maxHeight: "90vh",
                overflowY: "auto",
                bgcolor: "#121318",
                border: "1px solid #3F4250",
                borderLeft: "6px solid #38bdf8",
                borderRadius: "14px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
                p: { xs: 2.5, sm: 3.5 },
                color: "#FFFFFF",
                outline: "none",
                my: "auto",
              }}
            >
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  color: "#9396A0",
                  "&:hover": { color: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              <Typography
                sx={{
                  color: "#38bdf8",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  mb: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                }}
              >
                {selectedProject.type}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#FFFFFF",
                  mb: 2,
                  fontSize: "1.35rem",
                }}
              >
                {selectedProject.name}
              </Typography>

              {(selectedProject.youtubeUrl || selectedProject.iframeUrl) && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: selectedProject.verticalMedia ? { xs: "380px", sm: "440px" } : "260px",
                    bgcolor: "#050507",
                    borderRadius: "8px",
                    border: "1px solid #2A2C36",
                    overflow: "hidden",
                    mb: 2.5,
                  }}
                >
                  {selectedProject.youtubeUrl ? (
                    <iframe
                      src={selectedProject.youtubeUrl}
                      title={selectedProject.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", border: "none" }}
                    />
                  ) : (
                    <iframe
                      src={selectedProject.iframeUrl}
                      title={selectedProject.name}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", border: "none" }}
                    />
                  )}
                </Box>
              )}

              <Typography
                variant="body1"
                sx={{
                  color: "#D0D4E0",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {selectedProject.description}
              </Typography>

              {selectedProject.link && (
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    px: 2.5,
                    py: 1,
                    borderRadius: "6px",
                    color: "#FFFFFF",
                    bgcolor: "#222530",
                    border: "1px solid #3F4250",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.22s ease",
                    "&:hover": {
                      bgcolor: "#2E3242",
                      borderColor: "#FFFFFF",
                    },
                  }}
                >
                  {selectedProject.linkText}
                  <OpenInNewIcon sx={{ fontSize: "0.9rem" }} />
                </Link>
              )}
            </Box>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
};

export default ProjectsList;