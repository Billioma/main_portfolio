import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export const Layout = ({ label, name, red, value, onChange }) => {
  return (
    <Box mb="20px">
      <Text
        fontSize={{ base: "15px", lg: "18px" }}
        lineHeight={{ base: "23px", lg: "25px" }}
      >
        {label}{" "}
        <span style={{ color: "red", display: red ? "none" : "" }}>*</span>
      </Text>
      {red ? (
        <Textarea
          h="115px"
          rounded="0"
          bg="unset"
          value={value}
          name={name}
          onChange={onChange}
          mt="5px"
          border="1px solid var(--ghhc-grey, #646464)"
        />
      ) : (
        <Input
          rounded="0"
          bg="unset"
          mt="5px"
          name={name}
          value={value}
          onChange={onChange}
          h="39px"
          border="1px solid var(--ghhc-grey, #646464)"
        />
      )}
    </Box>
  );
};

const Contact = () => {
  const form = useRef();
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_qxj8a0o",
        "contact_form",
        form.current,
        "_lUXdxtuoOOPggNCb",
      );
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
      setMessage("");
      setName("");
      setEmail("");
    }
  };

  return (
    <Box fontFamily="Poppins">
      <Text fontFamily="Preahvihear" fontWeight={600} lineHeight="17px">
        Contact Us
      </Text>
      <Text
        mt="20px"
        fontFamily="Plus Jakarta Sans"
        fontSize={{ base: "28px", lg: "38px" }}
        lineHeight={{ base: "38px", lg: "61px" }}
        fontWeight={385}
      >
        Send a message, we reply very fast
      </Text>

      <Flex
        justifyContent="space-between"
        w="100%"
        mt={{ base: "30px", md: "59px" }}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "60px", md: "50px", lg: "133px" }}
        align="flex-start"
      >
        <Box w="100%">
          <form ref={form} onSubmit={sendEmail}>
            <Layout
              label="What's your name?"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setId(`Client #${(Math.random() * 100000) | 0}`);
              }}
              name="name"
            />
            <Layout
              label="What's your email?"
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="user_email"
            />

            <input
              type="text"
              name="id"
              style={{ display: "none" }}
              defaultValue={id}
              placeholder="Last name"
            />
            <Layout
              red
              label="What's your message?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            />
            <Button isLoading={loading} type="submit">
              Submit
            </Button>
          </form>
        </Box>

        <Box w="100%" fontSize={{ base: "18px", lg: "24px" }}>
          <Box mt="30px">
            <Text
              mb="10px"
              fontWeight={600}
              lineHeight={{ base: "22px", lg: "28px" }}
            >
              Call me anytime
            </Text>
            <Flex
              mt="5px"
              lineHeight={{ base: "25px", lg: "33px" }}
              flexDir="column"
              fontSize="17px"
            >
              <Link _hover={{ textDecor: "unset" }} href="tel:+2347061755488">
                +234 706 175 5488
              </Link>
            </Flex>
          </Box>

          <Box mt="30px">
            <Text
              mb="10px"
              fontWeight={600}
              lineHeight={{ base: "22px", lg: "28px" }}
            >
              Or Email me at
            </Text>
            <Flex
              mt="5px"
              lineHeight={{ base: "25px", lg: "33px" }}
              flexDir="column"
              fontSize="17px"
            >
              <Link
                _hover={{ textDecor: "unset" }}
                href="mailto:ibeomari@gmail.com"
              >
                ibeomari@gmail.com
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
