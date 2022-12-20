import { useMutation } from "@apollo/client";
import {
  Flex,
  Avatar,
  VStack,
  Button,
  HStack,
  Text,
  Divider,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useContext, useState } from "react";
import UPDATEPASSWORD from "../graphql/mutations/updatePassword";
import { UserContext } from "../lib/User/Usercontext";

const Account: NextPage = () => {
  const [updatePassword, { data, error, loading }] =
    useMutation(UPDATEPASSWORD);

  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(false);
  const [inputOldPassword, setInputOldPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const toast = useToast();

  const GetPassword = async () => {
    toast.closeAll();
    try {
      await updatePassword({
        variables: {
          input: {
            oldPassword: inputOldPassword,
            newPassword: inputNewPassword,
          },
        },
      });
    } catch {
      toast({
        title: `${error?.message}`,
        description: "nice try!",
        status: "error",
        isClosable: true,
        position: "bottom",
      });
      return false;
    }
    toast({
      title: `Password changed`,
      description: "Success!",
      status: "success",
      isClosable: true,
      position: "bottom",
    });
  };

  return (
    <>
      <Flex
        height="100vh"
        width={"100wv"}
        alignItems="start"
        justifyContent="center"
      >
        <VStack width={"25"} mt={40}>
          <Avatar
            size="2xl"
            name={user.username}
            src="https://bit.ly/code-beast"
            _hover={{
              size: "xl",
            }}
          />
          <Text fontSize="3xl" mb={10}>
            {user.username}
          </Text>
          <Stack alignContent={"center"}>
            <HStack></HStack>
            <Divider />
            <HStack>
              <Text color={"gray"}>Email: </Text>
              <Input variant={"filled"} isReadOnly value={user.email} />
            </HStack>
            <Divider />
            <Input
              isInvalid={error ? true : false}
              isDisabled={loading}
              type="password"
              variant="filled"
              placeholder="Old Password"
              onChange={(e) => setInputOldPassword(e.target.value)}
            />
            <Input
              isInvalid={error ? true : false}
              isDisabled={loading}
              type="password"
              variant="filled"
              placeholder="New Password"
              value={inputNewPassword}
              onChange={(e) => setInputNewPassword(e.target.value)}
            />
            <Button onClick={GetPassword} isLoading={loading}>
              Change Password
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default Account;
