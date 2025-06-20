import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

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
    <Box
      id="about"
      sx={{
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.8,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#ddd', fontWeight: 'bold', mb: 3, textShadow: !dimmed ? '1px 1px 1px #444' : 'none' }}
      >
        Skilled and able to work with the following:
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
        }}
      >
        {skillGroups.map(({ title, items }) => (
          <Box key={title}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5, color: '#aaa' }}>
              {title}
            </Typography>
            <List dense disablePadding sx={{ pl: 2 }}>
              {items.map((item, i) => (
                <ListItem key={i} sx={{ py: 0.5 }}>
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: '1.6vh' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
