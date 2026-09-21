import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { motion as Motion } from 'framer-motion';
import { getAccent } from './designTokens';

const MotionBox = Motion(Box);

const ExpList = ({ dimmed }) => {
  const textShadowStyle = '0px 2px 4px rgba(101, 101, 101, 0.9)';
  const blackTextShadow = '0px 1px 2px rgba(0, 0, 0, 0.8)';
  const darkTextColor = '#c4d3ee';

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
      role: "",
      dates: "July 8, 2020 – Aug 31, 2020"
    },
    {
      company: "Healthcare representative BPO (TaskUs)",
      role: "",
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
      company: "Freelance Web Developer since 2017"
    }
  ];

  return (
    <Box
      sx={{
        p: 1,
        width: '100%',
        columnCount: { xs: 1, md: 2 }, // 1 column on small screens, 2 on desktop
        columnGap: 3, // space between left and right column
      }}
    >
      {experiences.map((exp, i) => {
        const accent = getAccent(i);

        return (
          <MotionBox
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            sx={{
              py: 2,
              px: 1.5,
              width: '100%',
              display: 'inline-block', // Prevents card breaking across column boundaries
              breakInside: 'avoid',
              boxSizing: 'border-box',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.03)',
              },
            }}
          >
            {/* Top Content */}
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: darkTextColor,
                    fontSize: '0.95rem',
                    lineHeight: 1.3,
                    textShadow: blackTextShadow,
                    wordBreak: 'break-word',
                  }}
                >
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: darkTextColor,
                        textDecoration: 'none',
                      }}
                    >
                      {exp.company}
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
                      bgcolor: `${accent}33`,
                      borderColor: accent,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      textShadow: textShadowStyle,
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.6)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </Box>

              {exp.role && (
                <Typography
                  variant="body2"
                  sx={{
                    color: '#FFFFFF',
                    textShadow: textShadowStyle,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    mt: 0.5,
                  }}
                >
                  {exp.role}
                </Typography>
              )}
            </Box>

            {/* Bottom Dates */}
            {exp.dates && (
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textShadow: textShadowStyle,
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  mt: 1,
                }}
              >
                {exp.dates}
              </Typography>
            )}
          </MotionBox>
        );
      })}
    </Box>
  );
};

export default ExpList;