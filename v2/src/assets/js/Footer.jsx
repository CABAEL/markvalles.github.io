import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Stack, IconButton, Divider, GlobalStyles } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion(Box);

// ── Walker on a rotating half planet ─────────────────────────────────────────
const GIF_BOX_H = 70;        // px, height of the walking gif's box
const GIF_PAD = 16;          // px, padding around the gif
const FEET_NUDGE = 0;        // px
const PLANET_R = 80;         // px, planet radius
const WALK_SPEED = 30;       // px/s
const GROUND_FLOWS = "left"; 
const FEET_Y = GIF_BOX_H - GIF_PAD + FEET_NUDGE;
const ROTATE_SECONDS = (2 * Math.PI * PLANET_R) / WALK_SPEED;
const RIM_PAD = 6;           // px
const MILESTONES = [
  { deg: 10, r: 1.6 },
  { deg: 52, r: 2.0, ring: true },
  { deg: 97, r: 2.4 },
  { deg: 141, r: 2.8 },
  { deg: 186, r: 3.2, ring: true },
  { deg: 233, r: 3.6 },
  { deg: 281, r: 4.0 },
  { deg: 326, r: 4.4, ring: true },
];

// <planet-art>
const PlanetArt = () => {
  const R = PLANET_R;
  const rim = R - 1.5;
  const polar = (deg, radius) => {
    const a = (deg * Math.PI) / 180;
    return { x: R + radius * Math.sin(a), y: R - radius * Math.cos(a) };
  };
  return (
    <svg width={R * 2} height={R * 2} viewBox={`0 0 ${R * 2} ${R * 2}`} style={{ display: "block" }} focusable="false">
      <circle cx={R} cy={R} r={rim} fill="rgba(255, 255, 255, 0.04)" />
      <circle cx={R} cy={R} r={R - 9} fill="none" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 7" />
      {Array.from({ length: 60 }, (_, i) => {
        const five = i % 5 === 0;
        const a = polar(i * 6, R - 15);
        const b = polar(i * 6, R - (five ? 24 : 19));
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={five ? "rgba(255, 255, 255, 0.6)" : "rgba(148, 163, 184, 0.25)"}
            strokeWidth={five ? 1.5 : 1}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={R} cy={R} r={rim} fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" />
      {MILESTONES.map((m, i) => {
        const p = polar(m.deg, rim);
        return m.ring ? (
          <circle key={i} cx={p.x} cy={p.y} r={m.r} fill="#222327" stroke="#ffffff" strokeWidth="1.2" />
        ) : (
          <circle key={i} cx={p.x} cy={p.y} r={m.r} fill="#ffffff" />
        );
      })}
    </svg>
  );
};
// </planet-art>

const HalfPlanet = () => {
  const reduceMotion = useReducedMotion();
  const fade = "radial-gradient(ellipse 75% 100% at 50% 0%, #000 45%, transparent 100%)";
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        left: 0,
        top: FEET_Y - 1.5 - RIM_PAD,
        width: PLANET_R * 2,
        height: PLANET_R + RIM_PAD,
        overflow: "hidden",
        WebkitMaskImage: fade,
        maskImage: fade,
        pointerEvents: "none",
      }}
    >
      <MotionBox
        animate={reduceMotion ? undefined : { rotate: GROUND_FLOWS === "left" ? -360 : 360 }}
        transition={{ duration: ROTATE_SECONDS, ease: "linear", repeat: Infinity }}
        sx={{ position: "absolute", top: RIM_PAD, left: 0, width: PLANET_R * 2, height: PLANET_R * 2 }}
      >
        <PlanetArt />
      </MotionBox>
    </Box>
  );
};

// ── Credits roll with Typewriter Effect ──────────────────────────────────────
const CREDITS_SECONDS = 15;
const CREDITS_FADE = "linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)";

const CreditsText = () => (
  <Stack spacing={3} alignItems="center" sx={{ textAlign: "center", px: 1 }}>
    <Typography 
      className="typewriter-text"
      sx={{ 
        color: "#ffffff", 
        fontWeight: 600, 
        fontSize: "0.95rem", 
        lineHeight: 1.5, 
        letterSpacing: "0.04em", 
        fontFamily: '"Courier New", Courier, monospace',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderRight: '2px solid #3b82f6',
        animation: 'typing 4s steps(40, end), blink-caret 0.75s step-end infinite',
        mx: 'auto',
      }}
    >
      Thanks for scrolling down here!
    </Typography>
    <Typography sx={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.8, fontFamily: '"Courier New", Courier, monospace' }}>
      You might’ve noticed a wierd details along the way, I love experimenting and staying creative.
    </Typography>
    <Typography sx={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.8, fontFamily: '"Courier New", Courier, monospace' }}>
      Sometimes I might overdo it, sometimes I hit the mark, but that human touch is what keeps building things fun in this age of AI.
    </Typography>
    <Typography sx={{ color: "#60a5fa", fontWeight: 500, fontSize: "0.9rem", lineHeight: 1.6, fontFamily: '"Courier New", Courier, monospace', textShadow: '0 0 8px rgba(96, 165, 250, 0.4)' }}>
      Truly appreciate you taking the time to visit!
    </Typography>
  </Stack>
);

const CreditsRoll = () => {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [lap, setLap] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setLap((n) => n + 1);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reduceMotion) {
    return (
      <Box sx={{ width: "100%", maxWidth: 420, mx: "auto" }}>
        <CreditsText />
      </Box>
    );
  }

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes footerCreditsRoll": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--credits-h)))" },
          },
          "@keyframes typing": {
            from: { width: "0%" },
            to: { width: "100%" },
          },
          "@keyframes blink-caret": {
            "from, to": { borderColor: "transparent" },
            "50%": { borderColor: "#3b82f6" },
          },
        }}
      />
      <Box
        ref={rootRef}
        sx={(theme) => ({
          "--credits-h": "190px",
          [theme.breakpoints.up("lg")]: { "--credits-h": "230px" },
          position: { xs: "relative", lg: "absolute" },
          right: { lg: 0 },
          bottom: { lg: 0 },
          width: { xs: "100%", lg: 300 },
          maxWidth: 420,
          mx: { xs: "auto", lg: 0 },
          height: "var(--credits-h)",
          overflow: "hidden",
          WebkitMaskImage: CREDITS_FADE,
          maskImage: CREDITS_FADE,
          "&:hover > div": { animationPlayState: "paused" },
        })}
      >
        <Box
          key={lap}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "100%",
            willChange: "transform",
            animation: `footerCreditsRoll ${CREDITS_SECONDS}s linear infinite`,
            animationPlayState: inView ? "running" : "paused",
          }}
        >
          <CreditsText />
        </Box>
      </Box>
    </>
  );
};

const Footer = ({ dimmed, data }) => {
  console.log(data);
  return (
    <MotionBox
      component="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        width: "100%",
        py: 6,
        px: 2,
        backgroundColor: "#222327",
        backgroundImage: "linear-gradient(180deg, #383a40 0%, #222327 100%)",
        color: "#FFFFFF",
        mt: 8,
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={4} alignItems="center">
          {/* Social Links with Gray, White & Dark Blue Theme */}
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://www.linkedin.com/in/mark-valles-bb7251246/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#e2e8f0',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                '&:hover': {
                  bgcolor: '#3b82f6',
                  color: '#ffffff',
                  boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedIn />
            </IconButton>
            
            <IconButton
              href="https://github.com/CABAEL"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#e2e8f0',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                '&:hover': {
                  bgcolor: '#3b82f6',
                  color: '#ffffff',
                  boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub />
            </IconButton>
            
            <IconButton
              href="mailto:vallesmark15@gmail.com"
              sx={{
                color: '#e2e8f0',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                '&:hover': {
                  bgcolor: '#3b82f6',
                  color: '#ffffff',
                  boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Email />
            </IconButton>
          </Stack>

          <Divider sx={{ width: '100%', borderColor: '#1f2024' }} />

          {/* Footer Text */}
          <Stack spacing={1} alignItems="center">
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 600,
                color: '#f8fafc',
                fontFamily: '"Courier New", Courier, monospace',
                letterSpacing: '0.05em',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Designed & Built by Mark Valles
            </Typography>
            
            <Typography variant="caption" sx={{ color: '#94a3b8', fontFamily: '"Courier New", Courier, monospace' }}>
              © 2017 - {new Date().getFullYear()} Mark Valles Portfolio. All rights reserved.
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: PLANET_R * 2,
                maxWidth: "100%",
                height: FEET_Y + PLANET_R,
                mt: 5,
                mb: 2,
                mx: "auto",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <HalfPlanet />

              {/* soft white/blue glow where soles meet the ground */}
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: FEET_Y - 6,
                  width: 84,
                  height: 12,
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse at center, rgba(96,165,250,0.3) 0%, rgba(96,165,250,0) 70%)",
                }}
              />

              <Box
                component="img"
                src={!dimmed ? data[0] : data[1]}
                alt="WALK WITH ME"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxSizing: "border-box",
                  height: GIF_BOX_H,
                  padding: `${GIF_PAD}px`,
                  filter: "brightness(600%) drop-shadow(0 0 2px rgba(255,255,255,0.8))",
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 1,
                }}
              />
            </Box>

          </Stack>

          {/* Credits-style thank-you note */}
          <CreditsRoll />
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Footer;