import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Stack, Grid } from '@mui/material';
import { Code, Storage, Build, BugReport, Computer, Brush } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const getSkillIcon = (title) => {
  const icons = {
    'Popular Web Development Stack': <Code />,
    'Back-end & API': <Storage />,
    'Dev Tools & Workflow': <Build />,
    'Testing & Deployment': <BugReport />,
    'IT & Support': <Computer />,
    'Media & Content': <Brush />,
  };
  return icons[title] || <Code />;
};

const getSkillColor = (title) => {
  const colors = {
    'Popular Web Development Stack': 'primary',
    'Back-end & API': 'secondary',
    'Dev Tools & Workflow': 'success',
    'Testing & Deployment': 'warning',
    'IT & Support': 'info',
    'Media & Content': 'error',
  };
  return colors[title] || 'primary';
};

const About = ({ dimmed }) => {
  const skillGroups = [
    {
      title: 'Popular Web Development Stack',
      items: ['JavaScript (JS)', 'HTML / CSS', 'React', 'PHP', 'Laravel', 'Bootstrap', 'jQuery'],
    },
    {
      title: 'Back-end & API',
      items: ['RESTful API', 'NodeJs', 'ExpressJS', 'MongoDB', 'CodeIgniter', 'Yii2', 'Redis'],
    },
    {
      title: 'Dev Tools & Workflow',
      items: ['Git', 'Bitbucket', 'SourceTree', 'Git Kraken', 'Postman', 'FTP / SSH / SFTP', 'Web hosting'],
    },
    {
      title: 'Testing & Deployment',
      items: ['Test case creation', 'Test Driven Development', 'Smart Contract deployment (Remix)', 'Deployment/Hosting', 'Local server setup for web apps'],
    },
    {
      title: 'IT & Support',
      items: ['PC networking (wired/wireless)', 'Basic PC troubleshooting', 'PC formatting and setup', 'Printer networking'],
    },
    {
      title: 'Media & Content',
      items: ['Multimedia editing (Adobe Suite, Audacity)', 'FL studio', 'Canva'],
    },
  ];

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: '#F0F0F0' }}
        >
          Technical Skills
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: '#D0D0D0' }}>
          Technologies and tools I work with
        </Typography>
        <Chip 
          label={`${skillGroups.length} Skill Categories`}
          sx={{ 
            color: '#B0B0B0',
            borderColor: '#B0B0B0'
          }}
          variant="outlined"
        />
      </Box>

      <Grid container spacing={2}>
        {skillGroups.map(({ title, items }, index) => (
          <Grid item xs={12} sm={6} key={title}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              sx={{
                height: '100%',
                bgcolor: dimmed ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#F0F0F0',
                  boxShadow: '0 4px 16px rgba(240, 240, 240, 0.2)',
                },
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box
                    sx={{
                      p: 0.8,
                      borderRadius: 1,
                      bgcolor: '#707070',
                      color: 'white',
                      mr: 1.5,
                    }}
                  >
                    {getSkillIcon(title)}
                  </Box>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="bold" 
                    sx={{ fontSize: '1rem', color: '#F0F0F0' }}
                  >
                    {title}
                  </Typography>
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={0.6}>
                  {items.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: '#D0D0D0',
                        borderColor: '#707070',
                        fontSize: '0.75rem',
                        height: '26px',
                        '&:hover': {
                          bgcolor: '#F0F0F0',
                          color: '#333333',
                          borderColor: '#F0F0F0',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
