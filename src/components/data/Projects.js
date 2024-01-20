import React from "react";
import { Box } from "@chakra-ui/react";
import PersonalProject from "./PersonalProject";
import FeaturedProject from "./FeaturedProject";

const Projects = () => {
  return (
    <section id="projects">
      <Box>
        <FeaturedProject />
        <PersonalProject />
      </Box>
    </section>
  );
};

export default Projects;
