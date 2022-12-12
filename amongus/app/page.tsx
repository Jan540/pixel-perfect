"use client";

import { Flex } from "@chakra-ui/react";
import PixelArtCanvas from "../components/PixerlArtCanvas";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/code/login";

const Page = () => {
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <PixelArtCanvas width={32} height={32} />
      </Flex>
    </div>
  );
};

export default Page;
