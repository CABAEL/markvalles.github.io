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
import { getAccent } from './designTokens';

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

  const textShadowStyle = '0px 2px 4px rgba(0, 0, 0, 0.9)';

  return (
    <Box sx={{ py: 4, px: { xs: 1, sm: 2 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight="800"
          gutterBottom
          sx={{
            color: '#FFFFFF',
            textShadow: textShadowStyle,
            letterSpacing: '0.5px',
          }}
        >
          Technical Infrastructure & Skills
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: '#FFFFFF',
            textShadow: textShadowStyle,
            opacity: 0.9,
          }}
        >
          Technologies, automation tools, and frameworks I leverage
        </Typography>
        <Chip
          label={`${skillGroups.length} Technical Domains`}
          sx={{
            color: '#FFFFFF',
            borderColor: 'rgba(255,255,255,0.3)',
            bgcolor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(4px)',
            textShadow: textShadowStyle,
            boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
            fontWeight: 600,
          }}
          variant="outlined"
        />
      </Box>

      {/* Grid Layout Matrix */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {skillGroups.map(({ title, items }, index) => {
          const accent = getAccent(index);

          return (
            <MotionBox
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              sx={{
                position: 'relative',
                p: 2.5,
                borderRadius: '12px',
                borderLeft: `3px solid ${accent}`,
                background: `linear-gradient(90deg, ${accent}10 0%, rgba(255, 255, 255, 0.02) 100%)`,
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: `linear-gradient(90deg, ${accent}20 0%, rgba(255, 255, 255, 0.04) 100%)`,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {/* Category Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2 }}>
                <Box
                  sx={{
                    color: accent,
                    display: 'flex',
                    alignItems: 'center',
                    filter: `drop-shadow(0px 0px 6px ${accent})`,
                  }}
                >
                  {getSkillIcon(title)}
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textShadow: textShadowStyle,
                    fontSize: '1rem',
                    letterSpacing: '0.2px',
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
                      py: 0.6,
                      borderRadius: '6px',
                      bgcolor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(4px)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: accent,
                        bgcolor: `${accent}22`,
                        boxShadow: `0 0 8px ${accent}44`,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFFFFF',
                        textShadow: textShadowStyle,
                        fontWeight: 500,
                        fontSize: '0.825rem',
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;