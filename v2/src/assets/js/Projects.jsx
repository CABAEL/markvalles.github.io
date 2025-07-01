import React from "react";
import {
  Typography,
  Link,
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  Box,
  Container,
} from "@mui/material";

const projects = [
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

const ProjectsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md" sx={{ color: "#f1f5f9", minHeight: "100vh" }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        fontWeight="bold"
        gutterBottom
        pb={4}
        sx={{pt:5}}
      >
        Top Project Experiences
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {projects.map((project, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "text-end",
            }}
          >
            <Box
              sx={{
                width: {lg:"200px",xs:"100%"},
                bgcolor: "#333",
                color: "#f1f5f9",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#38bdf8", fontWeight: 500, mb: 0.5 }}
              >
                {project.type}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#f8fafc", mb: 0.5 }}
              >
                {project.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#cbd5e1", mb: 1 }}
              >
                {project.description}
              </Typography>

              {project.link ? (
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    color: "#38bdf8",
                    borderColor: "#38bdf8",
                    textTransform: "none",
                    mt: "auto",
                    "&:hover": {
                      bgcolor: "#38bdf8",
                      color: "#0f172a",
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
                <Typography variant="caption" color="error" fontWeight="bold">
                  {project.linkText}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsList;
