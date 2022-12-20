import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../lib/User/Usercontext";

const Profile: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const { user, setUser } = useContext(UserContext);

  return user.username === username ? (
    <Flex height="50vh" justifyContent="center" alignItems={"center"}>
      <VStack>
        <Text fontSize={"5xl"}>{user.username}</Text>
        <Avatar
          size="2xl"
          name={user.username}
          src="https://bit.ly/code-beast"
          _hover={{
            size: "xl",
          }}
        />
      </VStack>
    </Flex>
  ) : (
    <h1>no user</h1>
  );
};

export default Profile;
