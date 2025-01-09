import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const educationTimeline = [
  {
    year: "2025",
    degree: "Bachelor's in Computer Applications",
    institution: "Manipal University Jaipur",
  },
  {
    year: "2022",
    degree: "High School Diploma",
    institution: "Nasr Boys School",
  },
];

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "20px",
        margin: "20px auto",
        maxWidth: "1400px",
        overflow: "hidden",
      }}
    >
      {/* About Me Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={5}>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Avatar
              alt="Jordan"
              src="/assets/Jordan.jpeg" // Replace with your image path
              sx={{
                width: 200,
                height: 200,
                margin: "0 auto",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.5)",
                border: "4px solid #ff6a95",
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={7}>
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
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
                words={["About Me 🥝"]}
                loop={false}
                cursor
                cursorStyle="_"
              />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Hi there! I’m a Computer Science student graduating in 2025,
              exploring the exciting world of cybersecurity. I’ve built projects
              in Django, worked with Java, and gained hands-on experience with
              React and TypeScript during an internship. When I’m not coding,
              you’ll find me on the cricket field playing professionally or
              training to become a hybrid athlete. Let’s connect and share
              ideas!”
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Education Timeline */}
      <Box sx={{ marginTop: "50px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
              words={["My Education Journey⏳"]}
              loop={false}
              cursor
              cursorStyle="_"
            />
          </Typography>
        </motion.div>

        {/* Vertical Line */}

        {/* Timeline Items */}
        <Box sx={{ position: "relative", margin: "0 auto", maxWidth: "800px" }}>
          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{
                scale: 1.05,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              {/* Connector Point */}

              {/* Timeline Card */}
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "left",
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                  width: "60%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#ff6a95" }}
                >
                  {item.year}
                </Typography>
                <Typography variant="subtitle1">{item.degree}</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {item.institution}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
