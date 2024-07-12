import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Link,
  PinInput,
  PinInputField,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Layout = ({ label, type, name, red, value, onChange }) => {
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
          type={type}
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
        "_lUXdxtuoOOPggNCb"
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
const [value, setValue] = useState("")


const handleChange = (value) => {
  // Regular expression to match only digits
  const regex = /^[0-9]*$/;

  // If the value matches the regex, update the state
  if (regex.test(value)) {
    setValue(value);
  }
};
  return (
    <Box fontFamily="Poppins">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text fontFamily="Preahvihear" fontWeight={600} lineHeight="17px">
          Contact Us
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text
          mt="20px"
          fontFamily="Plus Jakarta Sans"
          fontSize={{ base: "28px", lg: "38px" }}
          lineHeight={{ base: "38px", lg: "61px" }}
          fontWeight={385}
        >
          Send a message, we reply very fast
        </Text>
      </motion.div>

      <HStack
            spacing={"20px"}
            alignItems="center"
            mt="24px"
          >
            <PinInput
              type="tel"
              otp
              size="lg"
              placeholder=""
              value={value}
              onChange={handleChange}
            >
              <PinInputField
                w={ "76px"}
                h={ "76px"}
                bg="#EEF2F6"
                fontSize={15}
                inputMode="numeric"
                type="tel"
                color="#07142F"
              />
              <PinInputField
                w={ "76px"}
                h={ "76px"}
                bg="#EEF2F6"
                fontSize={15}
                inputMode="numeric"
                type="tel"
                color="#07142F"
              />
              <PinInputField
                w={ "76px"}
                h={ "76px"} inputMode="numeric"
                type="tel"
                bg="#EEF2F6"
                fontSize={15}
                color="#07142F"
              />
              <PinInputField
                w={ "76px"}
                h={ "76px"}
                bg="#EEF2F6" inputMode="numeric"
                type="tel"
                fontSize={15}
                color="#07142F"
              />
            </PinInput>
          </HStack>

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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Layout
                label="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setId(`Client #${(Math.random() * 100000) | 0}`);
                }}
                name="name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [150, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Layout
                label="What's your email?"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="user_email"
              />
            </motion.div>

            <input
              type="text"
              name="id"
              style={{ display: "none" }}
              defaultValue={id}
              placeholder="Last name"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-150, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Layout
                red
                label="What's your message?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [150, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button isLoading={loading} type="submit">
                Submit
              </Button>
            </motion.div>
          </form>
        </Box>

        <Box w="100%" fontSize={{ base: "18px", lg: "24px" }}>
          <Box mt="30px">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Text
                mb="10px"
                fontWeight={600}
                lineHeight={{ base: "22px", lg: "28px" }}
              >
                Call me anytime
              </Text>
            </motion.div>
            <Flex
              mt="5px"
              lineHeight={{ base: "25px", lg: "33px" }}
              flexDir="column"
              fontSize="17px"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [150, 0], opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link _hover={{ textDecor: "unset" }} href="tel:+2347061755488">
                  +234 706 175 5488
                </Link>
              </motion.div>
            </Flex>
          </Box>

          <Box mt="30px">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Text
                mb="10px"
                fontWeight={600}
                lineHeight={{ base: "22px", lg: "28px" }}
              >
                Or Email me at
              </Text>
            </motion.div>
            <Flex
              mt="5px"
              lineHeight={{ base: "25px", lg: "33px" }}
              flexDir="column"
              fontSize="17px"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [-150, 0], opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Link
                  _hover={{ textDecor: "unset" }}
                  href="mailto:ibeomari@gmail.com"
                >
                  ibeomari@gmail.com
                </Link>
              </motion.div>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
