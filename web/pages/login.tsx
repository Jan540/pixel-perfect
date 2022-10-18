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
  FormErrorMessage,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { FC } from "react";
import { Formik } from "formik";
import { log } from "util";

const Login: NextPage = () => {
  return (
    <Flex height="100vh" justifyContent={"center"} alignItems={"center"}>
      <Box
        boxShadow="lg"
        w="400px"
        backgroundColor={useColorModeValue("gray.50", "gray.700")}
        borderRadius={8}
      >
        <LoginForm />
      </Box>
    </Flex>
  );
};

const LoginForm: FC = () => {
  return (
    <Formik
      initialValues={{
        usernameOrEmail: "",
        password: "",
        remember: false,
      }}
      onSubmit={(values) => {
        console.log(
          `${values.usernameOrEmail} ${values.password} ${values.remember}`
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} p={8}>
            <FormControl isInvalid={errors.usernameOrEmail !== undefined}>
              <FormLabel>Username or Email</FormLabel>
              <Input
                type="text"
                name="usernameOrEmail"
                onChange={handleChange}
                value={values.usernameOrEmail}
                placeholder="XxX_BingBong_XxX"
              />
              <FormErrorMessage>{errors.usernameOrEmail}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="verysecure1234"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default Login;
