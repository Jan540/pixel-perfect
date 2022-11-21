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
  TagLabel,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { FC } from "react";
import Login from "../pages/login";
import DividerWithText from "./DividerWithText";

const LoginModal = ({ setUsername }: { setUsername: any }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [usernameValue, setUsernameValue] = useState("");
    const handleTabsChange = (index : number) => {
      setTabIndex(index);
    };
  return (
    <>
      <Button mr="1.5" onClick={onOpen}>
        Log in
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Tabs index={tabIndex} isFitted onChange={handleTabsChange}>
            <TabList mt="2">
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
                      <FormLabel mb="0.5">Username</FormLabel>
                      <Input
                        placeholder="XxX_BingBong_XxX"
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />
                    </FormControl>
                    <FormLabel mb="0.5">Password</FormLabel>
                    <FormControl id="password">
                      <Input placeholder="VerySecure!" type="password" />
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
                      <Stack>
                        <Button
                          bg={"blue.500"}
                          color={"white"}
                          _hover={{
                            bg: "blue.400",
                          }}
                          onClick={() => setUsername(usernameValue)}
                        >
                          Log in
                        </Button>
                        <DividerWithText text="Don't have an account?" />
                        <Button onClick={() => setTabIndex(1)}>Sign up</Button>
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
                      <FormLabel mb="0.5">Email</FormLabel>
                      <Input placeholder="amongus@imposter.sus" type="email" />
                    </FormControl>
                    <FormControl id="username" isRequired>
                      <FormLabel mb="0.5">Username</FormLabel>
                      <Input
                        placeholder="XxX_BingBong_XxX"
                        type="username"
                        value={usernameValue}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />
                    </FormControl>

                    <FormControl id="password" isRequired>
                      <FormLabel mb="0.5">Password</FormLabel>
                      <Input placeholder="VerySecure!" type="password" />
                    </FormControl>

                    <Stack spacing={10}>
                      <Stack mt="2">
                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                          onClick={() => setUsername(usernameValue)}
                        >
                          Sign up
                        </Button>
                        <DividerWithText text="Have an account?" />
                        <Button onClick={() => setTabIndex(0)}>Log in</Button>
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
