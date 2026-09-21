import React from "react";
import {
  Typography,
  Link,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { motion as Motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CodeIcon from "@mui/icons-material/Code";
import thesis from "../pdf/THESIS_WTSK.pdf";
import wais from "../pdf/WAIS_MANUAL.pdf";

const projectsData = [
  {
    type: "MAX AI VOICE ASSISTANT",
    name: "MAX AI",
    description:
      "AI Assistant hosted using LM Studio, integrated with Node.js and Python for voice interaction.",
    link: "https://github.com/CABAEL/max_ai",
    linkText: "View Repo",
    mediaType: "code",
  },
  {
    type: "HR Management System",
    name: "HRMS",
    description:
      "For sale to Customize, HR system for small teams—includes employee profiles, DTR, and payroll.",
    link: "https://github.com/CABAEL/HRMS.git",
    linkText: "View Repo",
    mediaType: "code",
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
  },
  {
    type: "Document Management System",
    name: "QRSYS",
    description:
      "Secure document management with unique QR codes for fast access and verification, roles, and password protection.",
    link: "https://github.com/CABAEL/qrsys",
    linkText: "View Repo",
    mediaType: "code",
  },
  {
    type: "Testing Tool",
    name: "WTSK - WEB TESTING STARTER KIT",
    description:
      "Thesis project where I was the main developer and concept creator, made with PHP and Selenium PHP plugin.",
    link: thesis,
    linkText: "View PDF",
    mediaType: "pdf",
  },
  {
    type: "Blockchain Voting System",
    name: "Voting System",
    description:
      "2nd place in a training activity competition. Built with Vue, Solidity, and Remix.",
    link: "https://github.com/CABAEL/blockchain_voting_system",
    linkText: "View Repo",
    mediaType: "code",
  },
  {
    type: "DOST-PCIEERD Agency Tracker",
    name: "Strategic Performance Management System",
    description:
      "Agency system to track targets and productivity with semester reports.",
    link: "",
    linkText: "Hosted under private domain",
    mediaType: "private",
  },
  {
    type: "Inventory Management",
    name: "WAIS - WAREHOUSE AUTOMATED INVENTORY SYSTEM",
    description:
      "Full stack outsourced project for PNP SMS OFFICE Inventory Prototype Software.",
    link: wais,
    linkText: "View PDF",
    mediaType: "pdf",
  },
  {
    type: "Record Management",
    name: "Record Office Application Solution",
    description:
      "Successfully implemented for record office sector of Taguig City Hall. Presented by my co-dev Mr. Rasdi Kasim.",
    link: "https://www.dailymotion.com/embed/video/x7ushww",
    linkText: "Watch Demo Video",
    iframeUrl: "https://www.dailymotion.com/embed/video/x7ushww",
    mediaType: "video",
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
  },
];

// Sort array so items with available links come first
const projects = [...projectsData].sort((a, b) => {
  if (a.link && !b.link) return -1;
  if (!a.link && b.link) return 1;
  return 0;
});

const ProjectsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl" sx={{ color: "#FFFFFF", py: 4 }}>
      {/* Title & Header */}
      <Box sx={{ textAlign: "center", mb: 6 ,mt: 3}}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="800"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 1,
            color: '#ffff',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#D0D0D0", fontWeight: 500 }}
        >
          Showcasing interactive previews, live software systems, and open-source repos
        </Typography>
      </Box>

      {/* Pinterest Masonry Column Container */}
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          columnGap: "24px",
          width: "100%",
        }}
      >
        {projects.map((project, index) => {
          return (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.04 }}
              style={{
                breakInside: "avoid",
                marginBottom: "24px",
                display: "inline-block",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  bgcolor: "#121318",
                  border: "1px solid #2A2C36",
                  borderLeft: "4px solid #4A4D5A",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.22s ease-in-out",
                  "&:hover": {
                    bgcolor: "#181A20",
                    borderColor: "#3F4250",
                    borderLeftColor: "#FFFFFF",
                    boxShadow: "0 8px 28px rgba(0, 0, 0, 0.7)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Embedded Media Preview Section (iFrames & Badges) */}
                {project.iframeUrl ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: project.mediaType === "video" ? "200px" : "240px",
                      bgcolor: "#050507",
                      borderBottom: "1px solid #2A2C36",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={project.iframeUrl}
                      title={project.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        pointerEvents: project.mediaType === "video" ? "auto" : "none",
                      }}
                    />
                    <Chip
                      icon={
                        project.mediaType === "video" ? (
                          <PlayCircleOutlineIcon sx={{ fontSize: "14px !important", color: "#FFF" }} />
                        ) : (
                          <OpenInNewIcon sx={{ fontSize: "12px !important", color: "#FFF" }} />
                        )
                      }
                      label={project.mediaType === "video" ? "Live Video" : "Live Preview"}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        height: "24px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        bgcolor: "#121318",
                        color: "#FFFFFF",
                        border: "1px solid #3F4250",
                      }}
                    />
                  </Box>
                ) : (
                  /* Visual Banner for Non-iFrame Items */
                  <Box
                    sx={{
                      px: 2.5,
                      pt: 2.5,
                      pb: 0.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Chip
                      icon={
                        project.mediaType === "pdf" ? (
                          <PictureAsPdfIcon sx={{ fontSize: "13px !important", color: "#A0A5B5" }} />
                        ) : (
                          <CodeIcon sx={{ fontSize: "13px !important", color: "#A0A5B5" }} />
                        )
                      }
                      label={project.mediaType.toUpperCase()}
                      size="small"
                      sx={{
                        height: "22px",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#C5C8D0",
                        bgcolor: "#1C1E26",
                        border: "1px solid #2A2C36",
                      }}
                    />
                  </Box>
                )}

                {/* Card Content */}
                <Box sx={{ p: 2.5, pt: project.iframeUrl ? 2 : 1 }}>
                  <Typography
                    sx={{
                      color: "#9396A0",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      mb: 0.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {project.type}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#FFFFFF",
                      mb: 1,
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#C5C8D0",
                      mb: 2.5,
                      lineHeight: 1.55,
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Action Link Button */}
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 2,
                        py: 0.75,
                        borderRadius: "6px",
                        color: "#FFFFFF",
                        bgcolor: "#222530",
                        border: "1px solid #3F4250",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#2E3242",
                          borderColor: "#FFFFFF",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {project.linkText}
                      <OpenInNewIcon sx={{ fontSize: "0.85rem" }} />
                    </Link>
                  ) : (
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#6C707E",
                        fontWeight: 600,
                        fontStyle: "italic",
                      }}
                    >
                      {project.linkText}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Motion.div>
          );
        })}
      </Box>
    </Container>
  );
};

export default ProjectsList;