"use client";

import { Flex } from "@chakra-ui/react";
import PixelArtCanvas from "../../components/PixerlArtCanvas";
import { SizeModal } from "../../components/SizeModal";

const Canvas = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <PixelArtCanvas width={32} height={32} />
      </Flex>
      <SizeModal />
    </>
  );
};

export default Canvas;
