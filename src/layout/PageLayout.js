import React from "react";
import Header from "./Header";
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex bg="mainBg" flexDir="column" minH="100vh" w="full" color="#fff">
      <Header />
      <Flex
        justifyContent="center"
        overflowX="hidden"
        align="center"
        className="no_scroller"
        w="full"
        px={{ base: "20px", md: "20px", lg: "unset" }}
      >
        <Box
          pb={{ base: "150px", lg: "100px" }}
          pt={{ base: "50px", md: "120px" }}
          overflow={{ base: "scroll", md: "unset" }}
          overflowY="scroll"
          className="no_scroller"
          w={{ base: "full", md: "full", lg: "1024px", xl: "1200px" }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
