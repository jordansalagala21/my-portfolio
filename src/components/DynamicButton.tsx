import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const DynamicButton: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(255, 106, 149, 0.8)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#ff6a95",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#ff8bad",
          },
          boxShadow: "0 4px 15px rgba(255, 106, 149, 0.5)",
        }}
        endIcon={
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 8, 0] }} // Slight horizontal wiggle
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            🚀
          </motion.div>
        }
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          View My Work
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default DynamicButton;
