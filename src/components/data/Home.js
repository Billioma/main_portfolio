import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id="home">
      <Box fontFamily="Preahvihear">
        <Flex align="center" w="100%" flexDir={{ base: "column", md: "row" }}>
          <Flex justifyContent="center" align="center" pos="relative">
            <Flex
              justifyContent="center"
              align="center"
              opacity={0.7}
              w={{ base: "280px", md: "385px" }}
              h={{ base: "300px", md: "431px" }}
              bg="radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)"
            >
              <Flex
                justifyContent="center"
                align="center"
                w={{ base: "180px", md: "258px" }}
                h={{ base: "200px", md: "259px" }}
                bg="radial-gradient(50% 50% at 50% 50%, #FFF -80%, rgba(67, 67, 67, 0.00) 100%)"
              ></Flex>
            </Flex>
            <Image
              src="/assets/avatar.svg"
              pos="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "100px", md: "165px" }}
              h={{ base: "100px", md: "223px" }}
            />
          </Flex>
          <Box
            w={{ base: "100%", md: "30%" }}
            ml={{ base: "unset", md: "-30px" }}
          >
            <Text fontSize="15px" textDecor="underline">
              A Developer who
            </Text>
            <Text fontSize={{ base: "32px", md: "48px" }}>
              Judges a book by its{" "}
              <span
                style={{
                  color: "#7127BA",
                  border: "1px solid #fff",
                  borderRadius: "100%",
                }}
              >
                cover{" "}
              </span>
              ...
            </Text>
            <Text mt={{ base: "15px", md: "8px" }} fontSize="11px">
              Because if the cover does not impress you what else can?
            </Text>
          </Box>
        </Flex>

        <Box mt={{ base: "60px", md: "unset" }}>
          <Text
            fontSize={{ base: "30px", md: "48px" }}
            lineHeight={{ base: "120%", md: "unset" }}
          >
            I'm a Software Engineer.
          </Text>
          <Flex align="flex-end" gap="12px">
            <Text fontSize={{ base: "13px", md: "19px" }} lineHeight="100%">
              Currently, I'm a Software Engineer at{" "}
            </Text>
            <Flex align="flex-end" gap="12px">
              <Image
                src="/assets/zend-logo.svg"
                w={{ base: "70px", md: "80px" }}
                h={{ base: "25px", md: "30px" }}
              />
            </Flex>
          </Flex>
        </Box>

        <Box mt="67px" w={{ base: "100%", md: "78%" }}>
          <Text lineHeight="180%" fontSize={{ base: "16px", md: "20px" }}>
            A self-taught Software Engineer (Front-end), functioning in the
            industry for 6+ years now. I make meaningful and delightful digital
            products that create an equilibrium between user needs and business
            goals.
          </Text>
        </Box>
      </Box>
    </section>
  );
};

export default Home;
