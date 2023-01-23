import {
  Flex,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import PixelArtPublic from '../components/PixerlArtPublic';
const publicPlace: NextPage = () => {
  return (
    <>
      <Flex
        height='100vh'
        width='100vw'
        justifyContent='center'
        alignItems='center'
        style={{ overflow: 'hidden'}}
      >
        <PixelArtPublic width={100} height={100} id={'publicCanvas'} />
      </Flex>
    </>
  );
};

export default publicPlace;
