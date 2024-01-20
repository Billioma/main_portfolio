import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { experience, icons } from "../common/constants";
import Orbit from "../common/Orbit";

const About = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const iconsPerRow = isMobile ? 6 : 8;

  const iconRows = Array.from(
    { length: Math.ceil(icons.length / iconsPerRow) },
    (_, rowIndex) => (
      <Flex key={rowIndex} justifyContent="center" align="center" gap="20px">
        {icons
          .slice(rowIndex * iconsPerRow, (rowIndex + 1) * iconsPerRow)
          .map((icon, i) => (
            <Flex
              mb="20px"
              justifyContent="center"
              align="center"
              flexDir="column"
            >
              <Icon
                key={i}
                h={{ base: "30px", md: "40px" }}
                w={{ base: "30px", md: "40px" }}
                as={icon?.icon}
              />

              <Text mt="8px" color="#763CAC" fontSize="14px">
                {icon.text}
              </Text>
            </Flex>
          ))}
      </Flex>
    ),
  );

  return (
    <section id="about">
      <Box fontFamily="Preahvihear" mt="170px">
        <Box pos="relative">
          <Box
            display={{ base: "none", md: "block" }}
            w="825px"
            h="900px"
            borderRadius="100%"
            bg="radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)"
            pos="absolute"
            opacity={0.4}
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          />
          <Text fontSize={{ base: "28px", md: "38px" }}>Work Experience</Text>

          <Box mt="44px">
            <Grid
              templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
              gap="20px"
            >
              {experience.map((work, i) => (
                <GridItem key={i} pos="relative" zIndex={1}>
                  <Flex
                    borderRadius="15px"
                    align="center"
                    gap="20px"
                    py={{ base: "15px", md: "25px" }}
                    px={{ base: "15px", md: "40px" }}
                    borderTop="4px solid #4F228D"
                    background={
                      i === 0
                        ? "linear-gradient(110deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)"
                        : i === 2 || i === 4
                          ? "linear-gradient(96deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)"
                          : i === 1 || i === 5
                            ? "linear-gradient(96deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)"
                            : "linear-gradient(150deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%)"
                    }
                    boxShadow="4px 7px 26px 0px rgba(0, 0, 0, 0.12)"
                  >
                    <Image
                      src={work?.img}
                      w={{ base: "70px", md: "115px" }}
                      h={{ base: "70px", md: "115px" }}
                    />

                    <Box>
                      <Text
                        fontSize={{ base: "20px", md: "24px" }}
                        lineHeight="30px"
                      >
                        {work?.title}
                      </Text>
                      <Text
                        lineHeight={{ base: "180%", md: "unst" }}
                        mt="11px"
                        fontSize="12px"
                      >
                        {work?.desc}
                      </Text>

                      <Button
                        bg="#2C1250"
                        border="1px solid #693B93"
                        h="33px"
                        mt="12px"
                        w="119px"
                        borderRadius="6px"
                        fontSize="14px"
                      >
                        <a href={work?.link} target="_blank" rel="noreferrer">
                          LEARN MORE
                        </a>
                      </Button>
                    </Box>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box mt="100px">
          <Text fontSize={{ base: "28px", md: "38px" }} mb="30px">
            Stacks
          </Text>
          {iconRows}
        </Box>


        <Orbit />
      </Box>
    </section>
  );
};

export default About;
