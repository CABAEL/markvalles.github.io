import React, { useState, useEffect, useRef } from 'react';
import MUISwitch from './switch';
import light from '../img/light.png';
import { motion, useAnimation, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Mosquito from '../img/mosquito.png';

const MotionDiv = motion.div;

const LetThereBeLight = ({ handleToggleDim, dimmed }) => {
  const mosquitoControls = useAnimation();
  const containerRef = useRef(null);
  const mosquitoRef = useRef(null);

  const [isDead, setIsDead] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [shots, setShots] = useState([]);
  const [recoil, setRecoil] = useState(false);

  // Track window scroll position for smooth vertical trailing
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { damping: 20, stiffness: 90 });
  const scrollFollowY = useTransform(smoothScroll, [0, 2500], [0, 800]);

  // Wide-sweeping flight path across the extended area
  const wideOrbitPath = {
    x: [0, 110, 160, 70, -80, -160, -110, 0, 130, -140, 150, -130, 0],
    y: [0, -50, 30, 75, 65, 20, -50, -70, 50, 60, -45, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };

  // Entrance flight sequence: zips in from far off-page directly to the light
  const flyInFromOffScreen = async () => {
    setIsDead(false);
    await mosquitoControls.start({
      x: [-350, -220, -100, -30, 0],
      y: [220, 130, -40, 20, 0],
      opacity: [0, 1, 1, 1, 1],
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });
    if (!isDead) {
      mosquitoControls.start(wideOrbitPath);
    }
  };

  // Handle Gunshot Click & Precise Crosshair Hit Detection relative to Static Outer Box
  const handleContainerClick = (e) => {
    if (dimmed || !containerRef.current) return;

    // Calculate exact click coordinates directly from event
    const rect = containerRef.current.getBoundingClientRect();
    const currentPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const shotId = Date.now();

    // Trigger Gun recoil & Muzzle Flash effect
    setRecoil(true);
    setTimeout(() => setRecoil(false), 120);

    setShots((prev) => [...prev, { id: shotId, ...currentPos }]);
    setTimeout(() => {
      setShots((prev) => prev.filter((s) => s.id !== shotId));
    }, 250);

    // Calculate accuracy: distance between crosshair center & mosquito center
    if (!isDead && mosquitoRef.current) {
      const mosquitoRect = mosquitoRef.current.getBoundingClientRect();

      const mosquitoCenterX = mosquitoRect.left - rect.left + mosquitoRect.width / 2;
      const mosquitoCenterY = mosquitoRect.top - rect.top + mosquitoRect.height / 2;

      const distance = Math.hypot(
        currentPos.x - mosquitoCenterX,
        currentPos.y - mosquitoCenterY
      );

      // Hit registered if crosshair center is aligned within 22px of mosquito center
      if (distance <= 22) {
        setIsDead(true);
        mosquitoControls.start({
          y: 400,
          rotate: 180,
          opacity: 0,
          transition: {
            duration: 0.45,
            ease: "easeIn",
          },
        });
      }
    }
  };

  // Track cursor position inside the Static Outer Container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Respawn / initialize mosquito when light is turned ON
  useEffect(() => {
    if (!dimmed) {
      flyInFromOffScreen();
    } else {
      setIsDead(false);
    }
  }, [dimmed]);

  return (
    <Box
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onClick={handleContainerClick}
      onDragStart={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      sx={{
        width: '100%',
        position: 'relative',
        display: 'block',
        cursor: isHovering && !dimmed ? 'none' : 'default',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        overflow: 'visible',
      }}
    >
      {/* Light Blue Scope Crosshair Reticle */}
      {isHovering && !dimmed && (
        <Box
          component={motion.div}
          initial={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: recoil ? 1.35 : 1,
            x: "-50%",
            y: "-50%",
          }}
          transition={{ duration: 0.1 }}
          sx={{
            position: 'absolute',
            left: mousePos.x,
            top: mousePos.y,
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '2px solid rgba(56, 189, 248, 0.95)',
            boxShadow: recoil
              ? '0 0 22px rgba(56, 189, 248, 0.95), inset 0 0 15px rgba(255, 255, 255, 0.8)'
              : '0 0 14px rgba(56, 189, 248, 0.6), inset 0 0 10px rgba(56, 189, 248, 0.25)',
            pointerEvents: 'none',
            zIndex: 1005,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'brightness(110%)',
          }}
        >
          <Box sx={{ position: 'absolute', width: '100%', height: '1.5px', bgcolor: 'rgba(56, 189, 248, 0.9)' }} />
          <Box sx={{ position: 'absolute', width: '1.5px', height: '100%', bgcolor: 'rgba(56, 189, 248, 0.9)' }} />
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', border: '1px solid #38bdf8', bgcolor: 'rgba(56, 189, 248, 0.4)' }} />
        </Box>
      )}

      {/* Gunshot Muzzle Flash & Explosion Effects */}
      {shots.map((shot) => (
        <Box
          key={shot.id}
          component={motion.div}
          initial={{ scale: 0.3, opacity: 1, x: "-50%", y: "-50%" }}
          animate={{ scale: 1.8, opacity: 0, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          sx={{
            position: 'absolute',
            left: shot.x,
            top: shot.y,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffffff 15%, #38bdf8 45%, #0284c7 70%, rgba(56,189,248,0) 100%)',
            boxShadow: '0 0 25px #38bdf8, 0 0 10px #ffffff',
            pointerEvents: 'none',
            zIndex: 1008,
          }}
        />
      ))}

      {/* Wrapper to hold the lamp component and side label horizontally */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Horizontal Label on the Side */}
        {!dimmed && !isDead && (
          <Typography
            sx={{
              position: 'absolute',
              left: 'calc(45% - 180px)',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              fontFamily: 'inherit',
              color: 'text.primary',
              opacity: 0.3,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: 1001,
            }}
          >
            Try to hit the mosquito
          </Typography>
        )}

        {/* Swinging Motion Div for Hanging Lamp */}
        <MotionDiv
          initial={{ rotate: 0, y: 0 }}
          animate={{
            rotate: [-2.5, 2.5, -2.5],
            y: [0, 1.5, 0],
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          style={{
            transformOrigin: "top center",
            display: "inline-block",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: '250px',
              height: '240px',
              display: 'block',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              left: '50%',
              transform: 'translate(-50%, -25%)',
              overflow: 'visible',
            }}
          >
            <img
              src={light}
              alt="Hanging Lamp"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{
                borderTop: '5px solid #333333',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: dimmed ? 'brightness(40%) contrast(120%)' : 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitUserDrag: 'none',
                pointerEvents: 'none',
              }}
            />

            <AnimatePresence>
              {!dimmed && (
                <Box
                  component={motion.div}
                  style={{ y: scrollFollowY }}
                  sx={{
                    position: 'absolute',
                    top: '82%',
                    left: '48%',
                    width: '18px',
                    height: '18px',
                    zIndex: 1002,
                    pointerEvents: 'none',
                  }}
                >
                  <Box
                    ref={mosquitoRef}
                    component={motion.div}
                    initial={{ x: -350, y: 220, opacity: 0 }}
                    animate={mosquitoControls}
                    exit={{
                      x: 350,
                      y: -180,
                      opacity: 0,
                      transition: { duration: 0.3, ease: "easeIn" },
                    }}
                    sx={{
                      width: '18px',
                      height: '18px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                    }}
                  >
                    <img
                      src={Mosquito}
                      alt="Mosquito"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        WebkitUserDrag: 'none',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>
                </Box>
              )}
            </AnimatePresence>

            <MUISwitch
              checked={dimmed}
              onChange={handleToggleDim}
              sx={{ position: 'relative', float: 'right', zIndex: 1001 }}
            />
          </Box>
        </MotionDiv>
      </Box>
    </Box>
  );
};

export default LetThereBeLight;