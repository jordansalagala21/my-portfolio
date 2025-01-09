import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <Box
      className="hero-background"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Animated Heading */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          mb: 2,
          fontFamily: "'Jersey 15', sans-serif", // Apply Jersey 15 font
          letterSpacing: "2px", // Optional: Add some spacing for style
        }}
      >
        <Typewriter
          words={[
            "Hi, I'm Jordan!",
            "Welcome to My Portfolio!",
            "Why was the computer cold 🥶?",
            "Because it left its Windows open! 😄",
          ]}
          loop={false}
          cursor
          cursorStyle="_"
        />
      </Typography>

      {/* Animated Subheading */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
            mb: 4,
          }}
        >
          CS student graduating in 2025, passionate about coding, cybersecurity,
          fitness, and sports.
        </Typography>
      </motion.div>

      {/* Animated Button */}
      <Button
        variant="contained"
        size="large"
        href="#Projects"
        sx={{
          backgroundColor: "#ff6a95",
          color: "#fff",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "30px",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "#ff8bad",
            boxShadow: "0px 4px 20px rgba(255, 106, 149, 0.6)",
          },
          boxShadow: "0 4px 15px rgba(255, 106, 149, 0.4)",
        }}
      >
        {/* Button Text */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          View My Work
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
            style={{
              marginLeft: "8px",
              display: "inline-block",
            }}
          >
            🚀
          </motion.div>
        </motion.div>

        {/* Floating Glow Effect */}
        <motion.div
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
            zIndex: 0,
          }}
        />
      </Button>
    </Box>
  );
};

export default Hero;
