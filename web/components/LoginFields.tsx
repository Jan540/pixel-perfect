import {
  Flex,
  Text,
  Input,
  Stack,
  InputRightElement,
  InputGroup,
  Button,
  useColorModeValue,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Link,
  Modal,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { FC } from "react";
import Login from "../pages/login";

const LoginFields: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mr="1.5" onClick={onOpen}>
        Log in
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text
              color="white"
              fontSize="2 xl"
              paddingBottom={6}
              paddingTop={6}
            >
              Log into your Account
            </Text>
            <Stack spacing={4}>
              <FormControl id="email">
                <Input placeholder="Username" type="username" />
              </FormControl>
              <FormControl id="password">
                <Input placeholder="Password" type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _active={{
                    bg: "pink.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginFields;
