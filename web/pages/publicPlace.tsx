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
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import PixelArtPublic from '../components/PixerlArtPublic';
const publicPlace: NextPage = () => {
  return (
    <>
      <Flex height='100vh' width='100vw' justifyContent='center' alignItems='center'>
        <PixelArtPublic width={200} height={200} id={"publicPlace"} />
      </Flex>
    </>
  );
};

export default publicPlace;
