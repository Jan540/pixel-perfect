import { useMutation } from "@apollo/client";
import {
  Text,
  Input,
  Stack,
  Button,
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
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import DividerWithText from "./DividerWithText";
import REGISTER from "../graphql/mutations/registerUser";
import { setAccessToken } from "../lib/User/acesstoken";
import LOGIN from "../graphql/mutations/loginUser";
import { UserContext } from "../lib/User/Usercontext";

const LoginModal = ({ setUsername }: any) => {
  const { user, setUser } = useContext(UserContext);

  const [
    registerUser,
    { data: RegisterData, error: RegisterError, loading: RegisterLoading },
  ] = useMutation(REGISTER);
  const [
    loginUser,
    { data: LoginData, error: LoginError, loading: LoginLoading },
  ] = useMutation(LOGIN);

  useEffect(() => {
    if (!LoginData || LoginError) {
      return;
    }
    setUser({
      username: LoginData?.loginUser.userResponse?.user.username!,
      email: LoginData?.loginUser.userResponse?.user.email!,
      userId: LoginData?.loginUser.userResponse?.user.userId!,
    });
    setAccessToken(LoginData?.loginUser.userResponse?.token!);
    setUsername(user.username);
  }, [LoginData, LoginError, setUser, user.username, setUsername]);

  useEffect(() => {
    if (!RegisterData || RegisterError) {
      return;
    }
    setUser({
      username: RegisterData?.registerUser.userResponse?.user.username!,
      email: RegisterData?.registerUser.userResponse?.user.email!,
      userId: LoginData?.loginUser.userResponse?.user.userId!,
    });
    setAccessToken(RegisterData?.registerUser.userResponse?.token!);
    setUsername(user.username);
  }, [RegisterData, RegisterError, setUser, setUsername, user.username]);

  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const RegisterUser = async () => {
    try {
      await registerUser({
        variables: {
          input: {
            username: usernameValue,
            email: emailValue,
            password: passwordValue,
          },
        },
        ignoreResults: false,
      });
    } catch {
      return false;
    }
    return true;
  };

  const LoginUser = async () => {
    try {
      await loginUser({
        variables: {
          input: {
            email: emailValue,
            password: passwordValue,
          },
        },
      });
    } catch {
      return false;
    }
    return true;
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
                  {LoginError && (
                    <Text color={"red"}>{LoginError.message}</Text>
                  )}
                  {LoginLoading && <Text>Loading...</Text>}
                  <Text
                    color="white"
                    fontSize="2 xl"
                    paddingBottom={6}
                    paddingTop={6}
                  >
                    Log into your Account
                  </Text>
                  <Stack>
                    <FormControl id="email">
                      <FormLabel mb="0.5">Email</FormLabel>
                      <Input
                        placeholder="XxX_BingBong_XxX"
                        type="text"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                    </FormControl>
                    <FormLabel mb="0.5">Password</FormLabel>
                    <FormControl id="password">
                      <Input
                        placeholder="VerySecure!"
                        type="password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                      />
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
                          onClick={async () => {
                            await LoginUser();
                          }}
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
                  {RegisterError && (
                    <Text color={"red"}>{RegisterError.message}</Text>
                  )}
                  {RegisterLoading && <Text>Loading...</Text>}
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
                      <Input
                        placeholder="amongus@imposter.sus"
                        type="email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
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
                      <Input
                        placeholder="VerySecure!"
                        type="password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                      />
                    </FormControl>

                    <Stack spacing={10}>
                      <Stack mt="2">
                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                          onClick={async () => {
                            await RegisterUser();
                          }}
                        >
                          Sign up
                        </Button>
                        <DividerWithText text="Already have an account?" />
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
