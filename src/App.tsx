import React from "react";
import { Box } from "@mui/material";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/montserrat"; // Defaults to 400 weight
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

const App: React.FC = () => {
  return (
    <Box sx={{ width: "100%", padding: 0, margin: 0 }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
