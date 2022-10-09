import {
  Flex,
  Text,
  Input,
  Stack,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { FC } from "react";

const Login: NextPage = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="50vh">
        <Text color="red" fontSize="6xl">
          Login
        </Text>
      </Flex>
      <Flex justifyContent="center" height="50vh">
        <LoginFields />
      </Flex>
    </>
  );
};

const LoginFields: FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack spacing="3">
      <Input width="6xl" placeholder="Username" />
      <InputGroup>
        <Input
          width="6xl"
          placeholder="Password"
          type={show ? "text" : "Password"}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default Login;
