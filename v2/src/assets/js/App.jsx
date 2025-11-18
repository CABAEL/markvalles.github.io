import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// --- 404 GLITCH ONLY ---
const Dev404Glitch = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    style={{
      position: "fixed",
      top: "40%",
      left: 0,
      width: "100%",
      textAlign: "center",
      zIndex: 9999,
      pointerEvents: "none",
      fontFamily: "monospace",
    }}
  >
    <h1
      className="glitch404"
      data-text="404 — Under maintenance."
      style={{
        fontSize: "4vw",
        fontWeight: "900",
        color: "#fff",
        textShadow: "0 0 15px #ff0099",
        margin: 0
      }}
    >
      404 — Under maintenance.
    </h1>

    <style>{`
      body {
        background: #000;
        overflow: hidden;
      }

      .glitch404 {
        position: relative;
        display: inline-block;
        animation: skew-glitch 1.6s infinite linear alternate-reverse;
      }

      .glitch404::before,
      .glitch404::after {
        content: attr(data-text);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }

      .glitch404::before {
        left: 2px;
        text-shadow: -2px 0 #00eaff;
        animation: glitch-anim 1.8s infinite linear alternate-reverse;
      }

      .glitch404::after {
        left: -2px;
        text-shadow: -2px 0 #ff00c8;
        animation: glitch-anim2 1.8s infinite linear alternate-reverse;
      }

      @keyframes glitch-anim {
        0% { clip-path: inset(0 0 10% 0); }
        20% { clip-path: inset(40% 0 40% 0); }
        40% { clip-path: inset(20% 0 60% 0); }
        60% { clip-path: inset(80% 0 5% 0); }
        80% { clip-path: inset(35% 0 45% 0); }
        100% { clip-path: inset(0 0 10% 0); }
      }

      @keyframes glitch-anim2 {
        0% { clip-path: inset(80% 0 5% 0); }
        20% { clip-path: inset(10% 0 75% 0); }
        40% { clip-path: inset(0 0 10% 0); }
        60% { clip-path: inset(35% 0 45% 0); }
        80% { clip-path: inset(60% 0 20% 0); }
        100% { clip-path: inset(80% 0 5% 0); }
      }

      @keyframes skew-glitch {
        0%   { transform: skew(0deg); }
        20%  { transform: skew(2deg); }
        40%  { transform: skew(-3deg); }
        60%  { transform: skew(1deg); }
        80%  { transform: skew(-1deg); }
        100% { transform: skew(0deg); }
      }
    `}</style>
  </motion.div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ONLY SHOW 404 GLITCH */}
      <Dev404Glitch />
    </ThemeProvider>
  );
}

export default App;
