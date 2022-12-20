import {
  Button,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  useColorMode,
  VStack,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const publicPlace: NextPage = () => {
  return (
    <>
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      ></Flex>
    </>
  );
};

<>
  {Array(250)
    .fill(0)
    .map((_, i) => (
      <Box
        key={i}
        border="1px"
        borderColor="black"
        width="10px"
        height="10px"
      />
    ))}
</>;

export default publicPlace;
