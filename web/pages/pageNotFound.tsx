import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";

const PageNotFound: NextPage = () => {
  return (
    <Flex height={"50vh"} justifyContent="center">
      <Text>404 Page Not Found</Text>
    </Flex>
  );
};

export default PageNotFound;
