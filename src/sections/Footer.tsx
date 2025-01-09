import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "rgba(0, 0, 0, 0.0)", // Transparent black background
          color: "rgba(255, 255, 255, 0.89)", // Light text color
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Jordan Salagala. All Rights Reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "5px",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.81)",
          }}
        >
          Designed with ❤️ using React, TypeScript, and Material UI.
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Footer;
