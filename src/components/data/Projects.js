import React from "react";
import { Box } from "@chakra-ui/react";
import PersonalProject from "./PersonalProject";
import FeaturedProject from "./FeaturedProject";

const Projects = () => {
  return (
    <section id="projects">
      <Box h="140vh">
        <PersonalProject />
        <FeaturedProject />
      </Box>
    </section>
  );
};

export default Projects;
