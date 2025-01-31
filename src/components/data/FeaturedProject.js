import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { BsCircleFill, BsTriangleFill } from "react-icons/bs";
import { featuredWorks } from "../common/constants";
import { motion } from "framer-motion";

const FeaturedProject = () => {
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
        handleMobileScrollThrottled
      );
    };
  }, []);

  const [isMobile] = useMediaQuery("(max-width: 991px)");

  return (
    <Box
      className={isMobile ? "" : "full_width"}
      px={{ base: "unset", md: "60px" }}
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
          <Text color="#9857D3" mb="8px" fontSize="14px">
            Featured Projects
          </Text>
          <Flex
            display={{ base: "none", md: "flex" }}
            overflowX="scroll"
            className="no_scroller"
            ref={ref}
            scrollBehavior="smooth"
            transition="0.5s ease-in-out"
          >
            {featuredWorks.map((dat, i) => (
              <Box key={i + 1} minW="100%" mr="10px">
                <Flex w="100%">
                  <Box w="100%" fontWeight={600}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      // whileInView={{ x: [-150, 0], opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Text color="#CCD6F6" fontSize="30px">
                        {dat?.title}
                      </Text>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ y: [50, 0], opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
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
                          pr="100px"
                        >
                          {dat?.desc}
                        </Text>
                      </Box>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ y: [50, 0], opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <Flex mt="20px" align="center" gap="20px">
                        <a href={dat?.live} target="_blank" rel="noreferrer">
                          <FaEye
                            className="view"
                            cursor="pointer"
                            size="30px"
                          />
                        </a>
                      </Flex>
                    </motion.div>
                  </Box>

                  <Box ml="-100px" w="100%">
                    <Box
                      pos="absolute"
                      bg="radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)"
                      borderRadius="720px"
                      w="642px"
                      h="720px"
                      opacity={0.1}
                      right="8rem"
                      top="50%"
                      transform="translate(0%, -50%)"
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
                        borderTopLeftRadius="15px"
                        borderBottomRightRadius="15px"
                        src={dat?.img}
                        pos="absolute"
                        right="0"
                        bottom="0"
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>

          <Flex
            display={{ base: "flex", md: "none" }}
            overflowX="scroll"
            className="no_scroller"
            ref={mobileRef}
            scrollBehavior="smooth"
            transition="0.5s ease-in-out"
          >
            {featuredWorks.map((dat, i) => (
              <Box key={i + 1} minW="100%" mr="10px">
                <Text
                  color="#CCD6F6"
                  mb="20px"
                  fontSize={{ base: "25px", md: "30px" }}
                >
                  {dat?.title}
                </Text>

                <Flex w="100%">
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
                        borderTopLeftRadius="15px"
                        borderBottomRightRadius="15px"
                        src={dat?.img}
                        pos="absolute"
                        right="0"
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

                <Flex
                  mt="40px"
                  justifyContent="center"
                  align="center"
                  gap="20px"
                >
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
            display={{ base: "none", md: "flex" }}
            justifyContent="flex-end"
            gap="10px"
            pos="relative"
            zIndex={2}
            align="flex-end"
          >
            {["", "", "", "", ""].map((dat, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 * i }}
              >
                <Box key={i} onClick={() => handleScrolls(i)}>
                  {currentIndex === i ? (
                    <Box bg="#7127BA" w="30px" h="10px" borderRadius="20px" />
                  ) : (
                    <BsCircleFill
                      cursor="pointer"
                      color="#D9D9D9"
                      size="10px"
                    />
                  )}
                </Box>
              </motion.div>
            ))}
          </Flex>

          <Flex
            mt="50px"
            w="100%"
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
            gap="10px"
            align="flex-end"
          >
            {["", "", "", "", ""].map((dat, i) => (
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
            cursor={currentIndex === 4 ? "" : "pointer"}
            h="50px"
            _hover={{ bg: currentIndex === 4 ? "" : "#7127BA" }}
            transition=".3s ease-in-out"
            w="50px"
            rounded="full"
            onClick={() => (currentIndex === 4 ? "" : scroll("right"))}
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

export default FeaturedProject;
