import { useMutation } from "@apollo/client";
import {
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
  useToast,
  ToastId,
} from "@chakra-ui/react";
import { useContext, useEffect, useState, useRef } from "react";
import DividerWithText from "./DividerWithText";
import REGISTER from "../graphql/mutations/registerUser";
import { setAccessToken } from "../lib/User/acesstoken";
import LOGIN from "../graphql/mutations/loginUser";
import { UserContext } from "../lib/User/Usercontext";

const LoginModal = () => {
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();

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
  }, [LoginData, LoginError, setUser, user.username]);

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
  }, [RegisterData, RegisterError, setUser, user.username]);

  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const RegisterUser = async () => {
    toastIdRef.current = toast({
      title: "Trying to log in...",
      status: "loading",
      isClosable: false,
      variant: "top-accent",
    });
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
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, {
          title: "Something went wrong!",
          description: RegisterError?.message || "Please try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
          variant: "top-accent",
        });
      }
      return false;
    }
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        title: "Logged in!",
        description: "Welcome back!",
        status: "success",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
    }
    return true;
  };

  const LoginUser = async () => {
    toastIdRef.current = toast({
      title: "Trying to log in...",
      status: "loading",
      isClosable: false,
      variant: "top-accent",
    });
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
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, {
          title: "Something went wrong!",
          description: LoginError?.message || "Please try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
          variant: "top-accent",
        });
      }
      return false;
    }
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        title: "Logged in!",
        description: "Welcome back!",
        status: "success",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
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
                  <Stack>
                    <FormControl id="email">
                      <FormLabel mb="0.5">Email</FormLabel>
                      <Input
                        placeholder="XxX_BingBong_XxX"
                        type="text"
                        value={emailValue}
                        disabled={LoginLoading}
                        isInvalid={LoginError ? true : false}
                        variant="filled"
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                    </FormControl>
                    <FormLabel mb="0.5">Password</FormLabel>
                    <FormControl id="password">
                      <Input
                        placeholder="VerySecure!"
                        type="password"
                        value={passwordValue}
                        disabled={LoginLoading}
                        isInvalid={LoginError ? true : false}
                        variant="filled"
                        onChange={(e) => setPasswordValue(e.target.value)}
                      />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox disabled={LoginLoading}>Remember me</Checkbox>
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
                          isLoading={LoginLoading}
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
                  <Stack>
                    <FormControl id="email">
                      <FormLabel mb="0.5">Email</FormLabel>
                      <Input
                        placeholder="amongus@imposter.sus"
                        type="email"
                        value={emailValue}
                        disabled={RegisterLoading}
                        variant="filled"
                        isInvalid={RegisterError ? true : false}
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="username" isRequired>
                      <FormLabel mb="0.5">Username</FormLabel>
                      <Input
                        placeholder="XxX_BingBong_XxX"
                        type="username"
                        value={usernameValue}
                        disabled={RegisterLoading}
                        variant="filled"
                        isInvalid={RegisterError ? true : false}
                        onChange={(e) => setUsernameValue(e.target.value)}
                      />
                    </FormControl>

                    <FormControl id="password" isRequired>
                      <FormLabel mb="0.5">Password</FormLabel>
                      <Input
                        placeholder="VerySecure!"
                        type="password"
                        value={passwordValue}
                        disabled={RegisterLoading}
                        variant="filled"
                        isInvalid={RegisterError ? true : false}
                        onChange={(e) => setPasswordValue(e.target.value)}
                      />
                    </FormControl>

                    <Stack spacing={10}>
                      <Stack mt="2">
                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          isLoading={RegisterLoading}
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
