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
  HStack,
  Divider,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { FC } from "react";
import Login from "../pages/login";
import DividerWithText from "./DividerWithText";

const LoginModal = ({ setUsername }: { setUsername: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [usernameValue, setUsernameValue] = useState("");

  return (
    <>
      <Button mr="1.5" onClick={onOpen}>
        Log in
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Tabs>
            <TabList>
              <Tab>Log in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ModalBody>
                  <Text
                    color="white"
                    fontSize="2 xl"
                    paddingBottom={6}
                    paddingTop={6}
                  >
                    Log into your Account
                  </Text>
                  <Stack>
                    <FormControl id="username">
                      <Input
                        placeholder="Username"
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />
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
                        <Link color={"pink.400"}>Forgot password?</Link>
                      </Stack>
                      <Stack>
                        <Button
                          bg={"pink.500"}
                          color={"white"}
                          _hover={{
                            bg: "pink.400",
                          }}
                          onClick={() => setUsername(usernameValue)}
                        >
                          Log in
                        </Button>
                        <DividerWithText text="Don't have an account?" />
                        <Button>Sign up</Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </ModalBody>
              </TabPanel>
              <TabPanel>
                <ModalBody>
                  <Text
                    color="white"
                    fontSize="2 xl"
                    paddingBottom={6}
                    paddingTop={6}
                  >
                    Sign up for an Account
                  </Text>
                  <Stack>
                    <FormControl id="email">
                      <Input  placeholder="E-mail (optional)" type="email" />
                    </FormControl>
                    <FormControl id="username">
                      <Input
                        placeholder="Username"
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />
                    </FormControl>

                    <FormControl id="password">
                      <Input placeholder="Password" type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack>
                        <Button
                          bg={"pink.500"}
                          color={"white"}
                          _hover={{
                            bg: "pink.400",
                          }}
                          onClick={() => setUsername(usernameValue)}
                        >
                          Sign up
                        </Button>
                        <DividerWithText text="Have an account?" />
                        <Button>Log in</Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </ModalBody>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
