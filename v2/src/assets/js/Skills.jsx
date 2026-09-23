import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import {
  Code,
  Web,
  Storage,
  SmartToy,
  CloudQueue,
  BugReport,
  AccountTree,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const getSkillIcon = (title) => {
  const icons = {
    'Core Languages & Frameworks': <Code fontSize="small" />,
    'Frontend': <Web fontSize="small" />,
    'Databases & Caching': <Storage fontSize="small" />,
    'Agentic AI & Automation': <SmartToy fontSize="small" />,
    'Infrastructure & Deployment': <CloudQueue fontSize="small" />,
    'QA, Testing & Operations': <BugReport fontSize="small" />,
    'Methodologies & SDLC': <AccountTree fontSize="small" />,
  };
  return icons[title] || <Code fontSize="small" />;
};

const About = ({ dimmed }) => {
  const skillGroups = [
    {
      title: 'Core Languages & Frameworks',
      items: [
        'PHP (Laravel / CodeIgniter / Yii2 / ProcessMaker)',
        'TypeScript',
        'JavaScript (NextJs / Node.js / Express.js)',
        'Python (FastAPI)',
        'Java (SpringBoot)',
      ],
    },
    {
      title: 'Frontend',
      items: ['React', 'Vue.js', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
      title: 'Databases & Caching',
      items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Valkey'],
    },
    {
      title: 'Agentic AI & Automation',
      items: [
        'Claude',
        'Gemini',
        'GPT API',
        'LM Studio',
        'ElevenLabs',
        'Twilio',
        'Zapier',
        'Make',
        'Monday.com',
      ],
    },
    {
      title: 'Infrastructure & Deployment',
      items: ['Docker', 'Apache', 'Nginx', 'Render', 'Supabase'],
    },
    {
      title: 'QA, Testing & Operations',
      items: [
        'Test Driven Development (TDD)',
        'Selenium Test Automation',
        'Remix Smart Contract Deployment',
        'Network & Hardware Provisioning',
      ],
    },
    {
      title: 'Methodologies & SDLC',
      items: ['Agile Scrum', 'Waterfall', 'Full SDLC Lifecycle'],
    },
  ];

  // Masculine Slate / Steel Color Palette
  const darkBg = '#333333';
  const steelAccent = '#94A3B8'; // Slate/Steel blue-grey for subtle highlights
  const headerText = '#E2E8F0';  // Cool light grey heading
  const subText = '#94A3B8';     // Muted steel subtitle text
  const chipBg = '#222222';      // Deep charcoal pill background

  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, sm: 4 },
        borderRadius: '12px',
        bgcolor: darkBg,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h4"
          fontWeight="800"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 1,
            color: '#ffff',
            textShadow: '1px 1px 2px #000',
          }}
        >
          Technical Infrastructure & Skills
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2.5,
            color: subText,
            fontSize: '0.95rem',
            fontWeight: 500,
            letterSpacing: '0.3px',
          }}
        >
          Technologies, automation tools, and frameworks I leverage
        </Typography>
        <Chip
          label={`${skillGroups.length} Technical Domains`}
          sx={{
            color: steelAccent,
            borderColor: 'rgba(148, 163, 184, 0.3)',
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
          variant="outlined"
        />
      </Box>

      {/* Grid Layout Matrix */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
        }}
      >
        {skillGroups.map(({ title, items }, index) => (
          <MotionBox
            key={title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            sx={{
              position: 'relative',
              pl: 2,
              borderLeft: `3px solid ${steelAccent}`,
            }}
          >
            {/* Category Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
              <Box
                sx={{
                  color: steelAccent,
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                  p: 0.7,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {getSkillIcon(title)}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: headerText,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                {title}
              </Typography>
            </Box>

            {/* Tag / Pill Grid */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    bgcolor: chipBg,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: steelAccent,
                      bgcolor: '#2A2A2A',
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#CBD5E1',
                      fontWeight: 500,
                      fontSize: '0.8rem',
                      letterSpacing: '0.2px',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

export default About;