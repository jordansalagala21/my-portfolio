import React, { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Hostel Management System",
    description:
      "The Hostel Management System is a Django web app for efficient hostel management. It handles hostel/room/bed registration, student admission, bed allocation, occupancy tracking, and provides insightful analytics.",
    technologies: [
      { name: "Django", logo: "/assets/django.svg" },
      { name: "Python", logo: "/assets/python.svg" },
      { name: "html", logo: "/assets/html.jpg" },
      { name: "javascript", logo: "/assets/js.png" },
    ],
    github: "https://github.com/jordansalagala21/Hostel-Management-System",
  },
  {
    title: "Event Management System",
    description:
      "This Django web app facilitates event management, including user registration, event creation, ticket booking, vendor management, and volunteer registration. It features authentication, data visualization, and SMS notifications for ticket confirmation",
    technologies: [
      { name: "Django", logo: "/assets/django.svg" },
      { name: "Python", logo: "/assets/python.svg" },
      { name: "html", logo: "/assets/html.jpg" },
      { name: "javascript", logo: "/assets/js.png" },
    ],
    github: "https://github.com/jordansalagala21/EventManagementSystem",
  },
  {
    title: "GymTribe",
    description:
      "GymTribe is a social fitness web app designed to help users find and connect with like-minded gym-goers based on their workout preferences.",
    technologies: [
      { name: "react", logo: "/assets/react.svg" },
      { name: "materialui", logo: "/assets/materialui.png" },
      { name: "vite", logo: "/assets/vite.jpeg" },
      { name: "firebase", logo: "/assets/firebase.png" },
    ],
    github: "https://github.com/jordansalagala21/EventManagementSystem",
    live: "https://gym-tribe-kappa.vercel.app",
  },
];

const certifications = [
  {
    name: "Oracle Certified Java SE 8 Programmer",
    organization: "Oracle",
    date: "December 2024",
    credential:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5EF174C68AA841AB1C9493C22AC9B88FF831DEED5FA48EAC0FC7F367B8D9C6BD",
  },
  {
    name: "Oracle SQL Databases Specialization",
    organization: "Coursera",
    date: "October 2022",
    credential:
      "https://www.coursera.org/account/accomplishments/specialization/HW7KYNW2YJ4H",
  },
];

const skills = [
  {
    name: "Java",
    proficiency: 90,
    logo: "/assets/java.svg", // Replace with your image paths
  },
  {
    name: "React",
    proficiency: 85,
    logo: "/assets/react.svg",
  },
  {
    name: "Python",
    proficiency: 75,
    logo: "/assets/python.svg",
  },
  {
    name: "Django",
    proficiency: 75,
    logo: "/assets/django.svg",
  },
];

const ProjectsCertifications: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "20px",
        margin: "20px auto",
        maxWidth: "1400px",
      }}
      id="Projects"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
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
          {isSmallScreen ? (
            "My Work 🗂️!"
          ) : (
            <Typewriter
              words={["My Work 🗂️!"]}
              loop={false}
              cursor
              cursorStyle="_"
            />
          )}
        </Typography>
      </motion.div>

      {/* Tabs for Projects, Certifications, and Skills */}
      <Box sx={{ marginTop: "30px" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ff6a95",
            },
          }}
        >
          <Tab
            label="Projects"
            sx={{
              color: "#fff",
              fontWeight: activeTab === 0 ? "bold" : "normal",
              transition: "color 0.3s ease",
            }}
          />
          <Tab
            label="Certifications"
            sx={{
              color: "#fff",
              fontWeight: activeTab === 1 ? "bold" : "normal",
              transition: "color 0.3s ease",
            }}
          />
          <Tab
            label="Skills"
            sx={{
              color: "#fff",
              fontWeight: activeTab === 2 ? "bold" : "normal",
              transition: "color 0.3s ease",
            }}
          />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ marginTop: "40px" }}>
        {/* Projects */}
        {activeTab === 0 && (
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                      borderRadius: "10px",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 8px 30px rgba(255, 255, 255, 0.5)",
                      },
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <CardContent>
                      {/* Project Title */}
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#ff6a95" }}
                      >
                        {project.title}
                      </Typography>

                      {/* Project Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          marginBottom: "15px",
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technology Logos */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {project.technologies.map((tech, i) => (
                          <Box
                            component="img"
                            src={tech.logo}
                            alt={tech.name}
                            title={tech.name}
                            key={i}
                            sx={{
                              width: "40px",
                              height: "40px",
                              objectFit: "contain",
                              borderRadius: "5px",
                              boxShadow: "0 2px 5px rgba(255, 255, 255, 0.2)",
                            }}
                          />
                        ))}
                      </Box>

                      {/* Project Buttons */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                        }}
                      >
                        {/* GitHub Button */}
                        <Button
                          href={project.github}
                          target="_blank"
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#ff6a95",
                            borderColor: "#ff6a95",
                            "&:hover": {
                              borderColor: "#ff8bad",
                              color: "#ff8bad",
                            },
                          }}
                        >
                          GitHub
                        </Button>

                        {/* Conditionally Render Live Project Button */}
                        {project.live && (
                          <Button
                            href={project.live}
                            target="_blank"
                            variant="contained"
                            size="small"
                            sx={{
                              backgroundColor: "#ff6a95",
                              color: "#fff",
                              "&:hover": {
                                backgroundColor: "#ff8bad",
                              },
                            }}
                          >
                            View Live
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Certifications */}
        {activeTab === 1 && (
          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                      borderRadius: "10px",
                      padding: "20px",
                      textAlign: "center",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 8px 30px rgba(255, 255, 255, 0.5)",
                      },
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    {/* Certification Logo */}

                    {/* Certification Name */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: "#ff6a95" }}
                    >
                      {cert.name}
                    </Typography>

                    {/* Organization Name */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "10px",
                      }}
                    >
                      {cert.organization}
                    </Typography>

                    {/* Certification Date */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "15px",
                      }}
                    >
                      Date: {cert.date}
                    </Typography>

                    {/* View Credential Button */}
                    <Button
                      href={cert.credential}
                      target="_blank"
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#ff6a95",
                        "&:hover": { backgroundColor: "#ff8bad" },
                      }}
                    >
                      View Credential
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Skills */}
        {activeTab === 2 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  width: "150px",
                  height: "150px",
                  position: "relative",
                }}
              >
                {/* Radial Progress Wrapper */}
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 8px 30px rgba(255, 255, 255, 0.5)",
                    },
                  }}
                >
                  {/* Radial Progress Indicator */}
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "150px",
                      height: "150px",
                      transform: "rotate(-90deg)",
                      position: "absolute",
                      zIndex: 1,
                    }}
                  >
                    {/* Background Circle */}
                    <circle
                      cx="18"
                      cy="18"
                      r="15.915"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="2.5"
                    />
                    {/* Foreground Progress */}
                    <motion.circle
                      cx="18"
                      cy="18"
                      r="15.915"
                      fill="none"
                      stroke="#ff6a95"
                      strokeWidth="2.5"
                      strokeDasharray={`${skill.proficiency}, 100`}
                      strokeDashoffset="0"
                      style={{ strokeLinecap: "round" }}
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={{ strokeDasharray: `${skill.proficiency}, 100` }}
                      transition={{ duration: 1 }}
                    />
                  </svg>

                  {/* Skill Logo */}
                  <Box
                    component="img"
                    src={skill.logo}
                    alt={skill.name}
                    sx={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      padding: "5px",
                      boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)",
                      transform: "scale(1)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  />

                  {/* Skill Name */}
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "14px",
                      position: "absolute",
                      bottom: "-20px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectsCertifications;
