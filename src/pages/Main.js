import React from "react";
import { Box } from "@chakra-ui/react";
import Home from "../components/data/Home";
import About from "../components/data/About";
import Projects from "../components/data/Projects";

const Main = () => {
  return (
    <Box>
      <Box>
        <Home />
        <About />
        <Projects />
      </Box>
    </Box>
  );
};

export default Main;
