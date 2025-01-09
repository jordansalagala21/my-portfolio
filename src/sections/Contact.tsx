import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, LinkedIn, GitHub, Phone, Instagram } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mjkkpnde", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setSubmissionError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormSubmitted(false);
        setSubmissionError(true);
      }
    } catch (error) {
      setFormSubmitted(false);
      setSubmissionError(true);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "20px",
        margin: "20px auto",
        maxWidth: "1400px",
      }}
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
          <Typewriter
            words={["Get in touch 🤙"]}
            loop={false}
            cursor
            cursorStyle="_"
          />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "600px",
            margin: "10px auto 30px",
          }}
        >
          Feel free to reach out via the form below or connect with me directly!
        </Typography>
      </motion.div>

      {/* Split Layout */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left: Contact Form */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
              }}
            >
              <TextField
                name="name"
                label="Your Name"
                variant="filled"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              />
              <TextField
                name="email"
                label="Your Email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              />
              <TextField
                name="message"
                label="Your Message"
                variant="filled"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6a95",
                  "&:hover": { backgroundColor: "#ff8bad" },
                  padding: "10px 20px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Send Message
              </Button>
            </Box>
            {formSubmitted && (
              <Typography
                sx={{
                  color: "#4caf50",
                  marginTop: "15px",
                }}
              >
                Your message has been sent successfully!
              </Typography>
            )}
            {submissionError && (
              <Typography
                sx={{
                  color: "#f44336",
                  marginTop: "15px",
                }}
              >
                Something went wrong. Please try again later.
              </Typography>
            )}
          </motion.div>
        </Grid>

        {/* Right: Contact Details */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#ff6a95", marginBottom: "20px" }}
              >
                Contact Information
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Email sx={{ color: "#ff6a95", fontSize: "30px" }} />
                  <Typography sx={{ color: "#fff" }}>
                    officjordansal@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Phone sx={{ color: "#ff6a95", fontSize: "30px" }} />
                  <Typography sx={{ color: "#fff" }}>
                    +1 (609)-685-0580
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <IconButton
                  href="https://www.linkedin.com/in/jordansalagala/"
                  target="_blank"
                  sx={{
                    color: "#ff6a95",
                    "&:hover": { color: "#ff8bad" },
                  }}
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/jordansa_03/"
                  target="_blank"
                  sx={{
                    color: "#ff6a95",
                    "&:hover": { color: "#ff8bad" },
                  }}
                >
                  <Instagram fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://github.com/jordansalagala"
                  target="_blank"
                  sx={{
                    color: "#ff6a95",
                    "&:hover": { color: "#ff8bad" },
                  }}
                >
                  <GitHub fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
