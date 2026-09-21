import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion as Motion } from 'framer-motion';

const MotionListItem = Motion(ListItem);

const ExpList = ({ dimmed }) => {
  const textShadowStyle = '0px 2px 4px rgba(0, 0, 0, 0.9)';

  const experiences = [
    {
      company: "Ascendion (Previously Collabera Digital)",
      link: "https://ascendion.com/what-we-do/",
      role: "Fullstack Engineer",
      dates: "Aug 19, 2024 - Present",
      current: true,
    },
    {
      company: "DYNAMIC STRATEGY SOLUTIONS EXPERTS CORPORATION",
      link: "https://dsseservices.com/about",
      role: "Intermediate PHP Developer",
      dates: "Nov 28, 2022 - May 31, 2024"
    },
    {
      company: "YEMPO",
      link: "https://www.yempo-solutions.com/",
      role: "PHP Developer",
      dates: "Oct 04, 2022 - Nov 18, 2022"
    },
    {
      company: "DOST-PCIEERD",
      link: "https://pcieerd.dost.gov.ph/",
      role: "Information System Analyst II",
      dates: "Jan 4, 2022 – Sep 30, 2022"
    },
    {
      company: "DBP Service Corporation (Client assignment: DOST-PCIEERD)",
      link: "https://pcieerd.dost.gov.ph/",
      role: "Project Technical Specialist I",
      dates: "Oct 5, 2021 – Dec 31, 2021"
    },
    {
      company: "Optimo International",
      link: "https://dev.optimointernational.com/who-we-are/",
      role: "PHP Developer",
      dates: "Nov 3, 2020 – Oct 1, 2021"
    },
    {
      company: "7rivers Frontend Developer (Project Based)",
      link: "https://7rivers.ph/",
      role: "Frontend Developer",
      dates: "July 8, 2020 – Aug 31, 2020"
    },
    {
      company: "Healthcare representative BPO (TaskUs)",
      role: "Customer Service Representative",
      dates: "June 19, 2019 – Dec 31, 2019"
    },
    {
      company: "PNP CAMP BAGONG DIWA (WAIS) Prototype Developer Outsourced",
      role: "PHP Developer",
      dates: "Oct 12, 2018 – Dec 15, 2018"
    },
    {
      company: "DOST (DEPARTMENT OF SCIENCE AND TECHNOLOGY) - PCIEERD INTERN",
      role: "Laravel Developer",
      dates: "June 30, 2017 – Aug 31, 2017"
    },
    {
      company: "Freelance Web Developer",
      dates: "2017 – Present"
    }
  ];

  return (
    <Box sx={{ position: 'relative', px: { xs: 1, sm: 2 }, py: 1 }}>
      {/* Left Timeline Guide Line */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          bottom: 24,
          left: { xs: 20, sm: 28 },
          width: '2px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 100%)',
          zIndex: 0,
        }}
      />

      <List disablePadding>
        {experiences.map((exp, i) => {
          return (
            <MotionListItem
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              sx={{
                position: 'relative',
                zIndex: 1,
                py: 2,
                pl: { xs: 5, sm: 6 },
                pr: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: 1.5,
                borderRadius: '8px',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.04)',
                },
              }}
            >
              {/* Timeline Indicator Node */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '13px', sm: '21px' },
                  top: { xs: '24px', md: '50%' },
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  bgcolor: '#0d0e12',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::after': {
                    content: '""',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                  },
                }}
              />

              {/* Main Info */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textShadow: textShadowStyle,
                      fontSize: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#FFFFFF',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {exp.company}
                        <OpenInNewIcon
                          sx={{
                            fontSize: '0.85rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.9))',
                          }}
                        />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </Typography>

                  {exp.current && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        height: '20px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        textShadow: textShadowStyle,
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)',
                      }}
                    />
                  )}
                </Box>

                {exp.role && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.5 }}>
                    <WorkOutlineIcon sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textShadow: textShadowStyle,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                      }}
                    >
                      {exp.role}
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Right Side: Date Pill */}
              {exp.dates && (
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textShadow: textShadowStyle,
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '999px',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {exp.dates}
                </Typography>
              )}
            </MotionListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ExpList;