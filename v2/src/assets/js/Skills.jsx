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

const markerColors = [
  '#0284c7', // Marker Blue
  '#16a34a', // Marker Green
  '#d97706', // Marker Orange
  '#9333ea', // Marker Purple
  '#dc2626', // Marker Red
  '#0d9488', // Marker Teal
  '#4f46e5', // Marker Indigo
];

const getSkillIcon = (title) => {
  const icons = {
    'Core Languages & Frameworks': <Code sx={{ fontSize: '1rem' }} />,
    'Frontend': <Web sx={{ fontSize: '1rem' }} />,
    'Databases & Caching': <Storage sx={{ fontSize: '1rem' }} />,
    'Agentic AI & Automation': <SmartToy sx={{ fontSize: '1rem' }} />,
    'Infrastructure & Deployment': <CloudQueue sx={{ fontSize: '1rem' }} />,
    'QA, Testing & Operations': <BugReport sx={{ fontSize: '1rem' }} />,
    'Methodologies & SDLC': <AccountTree sx={{ fontSize: '1rem' }} />,
  };
  return icons[title] || <Code sx={{ fontSize: '1rem' }} />;
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
        'Github Copilot',
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

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography
          variant="h4"
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
         sx={{ color: "#D0D0D0", fontWeight: 500, fontSize: "0.78rem",pb: 1 }}
        >
          Core technologies, modern frameworks, and automation tools I leverage
        </Typography>
        <Chip
          label={`${skillGroups.length} Technical Domains`}
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            bgcolor: 'transparent',
            fontWeight: 700,
            fontSize: '0.65rem',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            height: '22px',
          }}
          variant="outlined"
        />
      </Box>

      {/* Shiny Whiteboard Surface Container (No Cards) */}
      <Box
        sx={{
          bgcolor: '#ffffff',
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,244,248,1) 100%),
            radial-gradient(#e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 24px 24px',
          border: '6px solid #cbd5e1',
          borderRadius: '5px',
          p: { xs: 2.5, sm: 4 },
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.9), inset 0 -4px 12px rgba(0, 0, 0, 0.05)',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {skillGroups.map(({ title, items }, index) => {
          const markerColor = markerColors[index % markerColors.length];
          return (
            <MotionBox
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10px' }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              sx={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                p: 1,
              }}
            >
              {/* Category Header with Marker Color */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                <Box
                  sx={{
                    color: markerColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: `drop-shadow(0 1px 1px ${markerColor}33)`,
                  }}
                >
                  {getSkillIcon(title)}
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 900,
                    color: markerColor,
                    fontSize: '0.9rem',
                    fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif',
                    letterSpacing: '0.3px',
                    textShadow: `0 0 1px ${markerColor}44`,
                  }}
                >
                  {title}
                </Typography>
              </Box>

              {/* Inline Comma-Separated Marker Text */}
              <Typography
                variant="body2"
                sx={{
                  color: '#334155',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  fontWeight: 700,
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif',
                  pl: 3.5,
                }}
              >
                {items.join(', ')}
              </Typography>
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;