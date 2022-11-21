import { HStack, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";

type DividerWithTextProps = {
  text: string;
};

const DividerWithText: FC<DividerWithTextProps> = ({ text }) => {
  return (
    <HStack justify="center" align="center">
      <Divider />
      <Text minW="fit-content" color="gray" fontSize="sm">
        {text}
      </Text>
      <Divider />
    </HStack>
  );
};

export default DividerWithText;
