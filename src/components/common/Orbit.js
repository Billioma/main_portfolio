import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux, SiChakraui, SiMui, SiTypescript } from "react-icons/si";

const Orbit = () => {
  return (
    <Flex
      justifyContent="center"
      mt={{ base: "180px", md: "270px" }}
      h={{ base: "27rem", md: "40rem" }}
      pos="relative"
    >
      <Box pos="absolute">
        <Box pos="relative" className="rotate">
          <Image src="/assets/axis1.svg" />

          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <SiTypescript className="img1" color="#693B93" size="35px" />
          </Flex>
          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <SiMui className="img2" color="#693B93" size="35px" />
          </Flex>
        </Box>
      </Box>

      <Box pos="absolute">
        <Box pos="relative" className="rotate1">
          <Image src="/assets/axis1.svg" />

          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <FaGithub className="img1" color="#693B93" size="35px" />
          </Flex>
          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <FaFigma className="img2" color="#693B93" size="35px" />
          </Flex>
        </Box>
      </Box>

      <Box pos="absolute">
        <Box pos="relative" className="rotate2">
          <Image src="/assets/axis1.svg" />

          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <SiChakraui className="img1" color="#693B93" size="35px" />
          </Flex>
          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <SiRedux className="img2" color="#693B93" size="35px" />
          </Flex>
        </Box>
      </Box>

      <Box pos="absolute">
        <Box pos="relative" className="rotate3">
          <Image src="/assets/axis1.svg" />

          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <FaReact className="img1" color="#693B93" size="35px" />
          </Flex>
          <Flex
            w="fit-content"
            pos="absolute"
            justifyContent="center"
            align="center"
            left="-4"
            top="50%"
            bottom="50%"
          >
            <TbBrandNextjs className="img2" color="#693B93" size="35px" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Orbit;
