import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Box, useDisclosure } from "@chakra-ui/react";
import { headers } from "../components/common/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".box") === null) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      onClose();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();

  return (
    <Flex
      bg={scroll ? "radial-gradient(#763CAC, 100%)" : "headerBg"}
      id="header"
      zIndex={666}
      w="full"
      pos="sticky"
      backdropFilter={"blur(10px)"}
      boxShadow={
        scroll
          ? "0px 4px 60px 0px #4F228D"
          : "0px 6px 22px -3px rgba(0, 0, 0, 0.10)"
      }
      transition=".3s ease-in-out"
      top="0"
      justifyContent="center"
      pb="0"
      px={{ base: "20px", lg: "unset" }}
      h={{ base: "80px", lg: "80px" }}
      align="flex-end"
    >
      <Box
        pos="relative"
        w={{ base: "full", md: "full", lg: "1024px", xl: "1200px" }}
      >
        <Flex
          fontFamily="Plus Jakarta Sans"
          w="100%"
          borderBottom="1px solid #4F228D"
          pb={{ base: "22px", lg: "unset" }}
          align="center"
          justifyContent="space-between"
        >
          <Box
            w={{ base: "full", md: "fit-content" }}
            pos={{ base: "unset", md: "absolute" }}
            left="0"
            bottom="11px"
          >
            <Flex
              bg="#fff"
              onClick={() => navigate("/")}
              rounded="full"
              justifyContent="center"
              align="center"
              w="40px"
              h="40px"
              color="#000"
            >
              <Text fontWeight={700}>B.O</Text>
            </Flex>
          </Box>
          <Flex
            gap="20px"
            display={{ base: "flex", lg: "none" }}
            align="center"
            justifyContent="flex-end"
            w="full"
          >
            <a href="/contact-us" rel="noreferrer">
              <Button w="112px" h="36px" mt="-5px" fontSize="14px">
                Contact Us
              </Button>
            </a>
            <Box pos="relative" className="box">
              <Box display={{ base: isOpen ? "flex" : "none", lg: "none" }}>
                <AiOutlineClose onClick={onClose} color="#7127BA" size="24px" />
              </Box>
              <Box display={{ base: isOpen ? "none" : "flex", lg: "none" }}>
                <AiOutlineMenu onClick={onOpen} color="#7127BA" size="24px" />
              </Box>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ y: [6, 0], opacity: 1 }}
                >
                  <Box
                    w="201px"
                    bg="headerBg"
                    borderRadius="6px"
                    border="2px solid #4F228D"
                    p="20px"
                    pos="absolute"
                    right="0"
                    top="47px"
                  >
                    {(pathname !== "/contact-us"
                      ? headers
                      : headers.slice(0, 1)
                    ).map((dat, i) => (
                      <Link
                        to={dat?.name?.toLowerCase()}
                        offset={-150}
                        smooth={true}
                        duration={500}
                      >
                        <Flex
                          key={i}
                          onClick={() => {
                            pathname === "/contact-us" ? navigate("/") : "";
                            onClose();
                          }}
                          align="center"
                          color={
                            activeSection === dat?.name?.toLowerCase() &&
                            pathname !== "/contact-us"
                              ? "#7127BA"
                              : "unset"
                          }
                        >
                          <Text lineHeight="23px" pb="9px" fontSize="15px">
                            {dat?.name}
                          </Text>
                        </Flex>
                      </Link>
                    ))}
                  </Box>
                </motion.div>
              )}
            </Box>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            gap="50px"
            align="flex-start"
            w="full"
            justifyContent="flex-end"
          >
            {(pathname !== "/contact-us" ? headers : headers.slice(0, 1)).map(
              (dat, i) => (
                <Link
                  to={dat?.name?.toLowerCase()}
                  offset={-150}
                  smooth={true}
                  duration={500}
                >
                  <Flex
                    key={i}
                    h="40px"
                    justifyContent="center"
                    cursor="pointer"
                    onClick={() =>
                      pathname === "/contact-us" ? navigate("/") : ""
                    }
                    align="center"
                    borderBottom={
                      activeSection === dat?.name?.toLowerCase() &&
                      pathname !== "/contact-us"
                        ? "5px solid #7127BA"
                        : "unset"
                    }
                    pb={
                      activeSection === dat?.name?.toLowerCase()
                        ? "17px"
                        : "22px"
                    }
                    px="5px"
                  >
                    <Text lineHeight="25px" fontSize="18px">
                      {dat?.name}
                    </Text>
                  </Flex>
                </Link>
              ),
            )}
            <a href="/contact-us" rel="noreferrer">
              <Button w="112px" mt="-5px" fontSize="14px">
                Contact Us
              </Button>
            </a>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
