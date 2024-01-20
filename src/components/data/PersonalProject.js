import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { FaEye, FaGithub } from "react-icons/fa";
import { BsCircleFill, BsTriangleFill } from "react-icons/bs";
import { personalWorks } from "../common/constants";

const PersonalProject = () => {
  const ref = useRef();
  const mobileRef = useRef();
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const mobileThrottle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const scroll = (direction) => {
    if (ref.current) {
      const itemWidth = ref.current.children[currentIndex].offsetWidth;
      const scrollAmount =
        direction === "left" ? -(itemWidth + 10) : itemWidth + 10;
      ref.current.scrollLeft += scrollAmount;
    }

    const scrollPosition = ref.current.scrollLeft;
    const index = Math.round(scrollPosition / ref.current.offsetWidth);
    setCurrentIndex(index);
  };

  const handleScrolls = (index) => {
    setCurrentIndex(index);
    if (ref.current && ref.current.children[index]) {
      ref.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleMobileScrolls = (index) => {
    setMobileIndex(index);
    if (mobileRef.current && mobileRef.current.children[index]) {
      mobileRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleScroll = () => {
    if (ref.current) {
      const scrollPosition = ref.current.scrollLeft;
      const index = Math.round(scrollPosition / ref.current.offsetWidth);
      setCurrentIndex(index);
    }
  };

  const handleMobileScroll = () => {
    if (mobileRef.current) {
      const scrollPosition = mobileRef.current.scrollLeft;
      const index = Math.round(scrollPosition / mobileRef.current.offsetWidth);
      setMobileIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };

    const handleScrollThrottled = throttle(handleScroll, 200);

    window.addEventListener("resize", handleResize);
    ref.current.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("resize", handleResize);
      ref.current.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  useEffect(() => {
    const handleMobileResize = () => {
      setMobileIndex(0);
    };

    const handleMobileScrollThrottled = mobileThrottle(handleMobileScroll, 200);

    window.addEventListener("resize", handleMobileResize);
    mobileRef.current.addEventListener("scroll", handleMobileScrollThrottled);

    return () => {
      window.removeEventListener("resize", handleMobileResize);
      mobileRef.current.removeEventListener(
        "scroll",
        handleMobileScrollThrottled,
      );
    };
  }, []);

  const [isMobile] = useMediaQuery("(max-width: 991px)");

  return (
    <Box
      className={isMobile ? "" : "full_width"}
      px={{ base: "unset", md: "60px" }}
      mt={{ base: "5rem", md: "25rem" }}
      fontFamily="Poppins"
      pos="relative"
    >
      <Flex align="center">
        <Box w="16.7rem" display={{ base: "none", md: "block" }}>
          <Flex
            className="glass"
            cursor={currentIndex === 0 ? "" : "pointer"}
            h="50px"
            _hover={{ bg: currentIndex === 0 ? "" : "#7127BA" }}
            transition=".3s ease-in-out"
            w="50px"
            rounded="full"
            onClick={() => (currentIndex === 0 ? "" : scroll("left"))}
            justifyContent="center"
            align="center"
          >
            <BsTriangleFill className="arrow-left" />
          </Flex>
        </Box>

        <Box w="100%">
          <Text textAlign="right" color="#9857D3" mb="8px" fontSize="14px">
            Personal Projects
          </Text>
          <Flex
            overflowX="scroll"
            className="no_scroller"
            display={{ base: "none", md: "flex" }}
            ref={ref}
            scrollBehavior="smooth"
            transition="0.5s ease-in-out"
          >
            {personalWorks.map((dat, i) => (
              <Box key={i + 1} minW="100%" mr="10px">
                <Flex w="100%" flexDir="row-reverse">
                  <Box w="100%" fontWeight={600}>
                    <Text textAlign="right" color="#CCD6F6" fontSize="30px">
                      {dat?.title}
                    </Text>

                    <Box
                      w="100%"
                      pos="relative"
                      zIndex={2}
                      className="glass"
                      mt="30px"
                    >
                      <Text
                        color="#CCD6F6"
                        fontWeight={500}
                        p="20px"
                        pl="100px"
                      >
                        {dat?.desc}{" "}
                      </Text>
                    </Box>
                    <Flex
                      mt="20px"
                      justifyContent="flex-end"
                      align="center"
                      gap="20px"
                    >
                      <a href={dat?.github} target="_blank" rel="noreferrer">
                        <FaGithub
                          className="view"
                          cursor="pointer"
                          size="28px"
                        />
                      </a>
                      <a href={dat?.live} target="_blank" rel="noreferrer">
                        <FaEye className="view" cursor="pointer" size="30px" />
                      </a>
                    </Flex>
                  </Box>

                  <Box mr="-100px" w="100%">
                    <Box
                      pos="absolute"
                      bg="radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)"
                      borderRadius="720px"
                      w="642px"
                      h="720px"
                      opacity={0.1}
                      left="28rem"
                      top="50%"
                      transform="translate(-50%, -50%)"
                    />
                    <Box
                      overflow="hidden"
                      bg="#2B0B3A"
                      borderRadius="10px"
                      pos="relative"
                      zIndex={1}
                      h="290px"
                    >
                      <Image
                        w="90%"
                        h="90%"
                        borderTopRightRadius="15px"
                        borderBottomLeftRadius="15px"
                        src={dat?.img}
                        pos="absolute"
                        left="0"
                        bottom="0"
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>

          <Flex
            overflowX="scroll"
            className="no_scroller"
            display={{ base: "flex", md: "none" }}
            ref={mobileRef}
            scrollBehavior="smooth"
            transition="0.5s ease-in-out"
          >
            {personalWorks.map((dat, i) => (
              <Box key={i + 1} minW="100%" mr="10px">
                <Text
                  textAlign="right"
                  color="#CCD6F6"
                  mb="20px"
                  fontSize={{ base: "25px", md: "30px" }}
                >
                  {dat?.title}
                </Text>
                <Flex w="100%" flexDir="row-reverse">
                  <Box w="100%">
                    <Box
                      overflow="hidden"
                      bg="#2B0B3A"
                      borderRadius="10px"
                      pos="relative"
                      zIndex={1}
                      h="220px"
                    >
                      <Image
                        w="90%"
                        h="90%"
                        objectFit="cover"
                        borderTopRightRadius="15px"
                        borderBottomLeftRadius="15px"
                        src={dat?.img}
                        pos="absolute"
                        left="0"
                        bottom="0"
                      />
                    </Box>
                  </Box>
                </Flex>
                <Box w="100%" mt="30px">
                  <Text color="#CCD6F6" fontWeight={500}>
                    {dat?.desc}
                  </Text>
                </Box>

                <Flex mt="40px" align="center" gap="20px">
                  <a href={dat?.github} target="_blank" rel="noreferrer">
                    <FaGithub className="view" cursor="pointer" size="28px" />
                  </a>
                  <a href={dat?.live} target="_blank" rel="noreferrer">
                    <FaEye className="view" cursor="pointer" size="30px" />
                  </a>
                </Flex>
              </Box>
            ))}
          </Flex>
          <Flex
            mt="50px"
            w="100%"
            justifyContent="flex-end"
            gap="10px"
            display={{ base: "none", md: "flex" }}
            align="flex-end"
          >
            {["", "", "", ""].map((dat, i) => (
              <Box key={i} onClick={() => handleScrolls(i)}>
                {currentIndex === i ? (
                  <Box bg="#7127BA" w="30px" h="10px" borderRadius="20px" />
                ) : (
                  <BsCircleFill cursor="pointer" color="#D9D9D9" size="10px" />
                )}
              </Box>
            ))}
          </Flex>

          <Flex
            mt="50px"
            display={{ base: "flex", md: "none" }}
            w="100%"
            justifyContent="flex-end"
            gap="10px"
            align="flex-end"
          >
            {["", "", "", ""].map((dat, i) => (
              <Box key={i} onClick={() => handleMobileScrolls(i)}>
                {mobileIndex === i ? (
                  <Box bg="#7127BA" w="30px" h="10px" borderRadius="20px" />
                ) : (
                  <BsCircleFill cursor="pointer" color="#D9D9D9" size="10px" />
                )}
              </Box>
            ))}
          </Flex>
        </Box>

        <Flex
          justifyContent="flex-end"
          align="flex-end"
          w="16.7rem"
          display={{ base: "none", md: "flex" }}
        >
          <Flex
            className="glass"
            cursor={currentIndex === 3 ? "" : "pointer"}
            h="50px"
            _hover={{ bg: currentIndex === 3 ? "" : "#7127BA" }}
            transition=".3s ease-in-out"
            w="50px"
            rounded="full"
            onClick={() => (currentIndex === 3 ? "" : scroll("right"))}
            justifyContent="center"
            align="center"
          >
            <BsTriangleFill className="arrow-right" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PersonalProject;
