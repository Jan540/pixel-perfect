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
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { FC } from "react";

const Login: NextPage = () => {
  return (
    <>
      <Flex justifyContent="center" height="50vh">
        <LoginFields />
      </Flex>
    </>
  );
};

const LoginFields: FC = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bg={useColorModeValue("grey.50", "grey.800")}
      height="100vh"
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={"10"}
      >
        <Text fontSize="2 xl" paddingBottom={6}>
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
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
