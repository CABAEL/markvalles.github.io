import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 3,
        px: 2,
        background: "linear-gradient(90deg, #1f2937, #374151)", // gray-800 to gray-700
        color: "#e5e7eb", // gray-200
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
        Designed by <strong style={{ color: "#fff" }}>Mark Valles</strong> | Made with React ⚛️
      </Typography>
    </Box>
  );
};

export default Footer;
