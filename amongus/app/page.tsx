"use client";

import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <VStack spacing={10}>
          <Text fontSize="7xl">Page</Text>
          <Link href="/canvas">
            <Button colorScheme="blue">Canvas</Button>
          </Link>
        </VStack>
      </Flex>
    </div>
  );
};

export default Page;
