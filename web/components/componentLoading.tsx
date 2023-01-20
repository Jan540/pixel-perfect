import { Flex, Spinner } from "@chakra-ui/react";
import { FC } from "react";

const ComponentLoading: FC = () => {
  return (
    <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
      <Spinner />
    </Flex>
  );
};

export default ComponentLoading;
