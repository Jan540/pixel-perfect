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
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useMemo, useState } from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { quotes } from "../data/quotes";

const Home: NextPage = () => {
  const user = "bingbong";

  const [text] = useTypewriter({
    words: quotes,
    loop: Infinity,
    deleteSpeed: 25,
    typeSpeed: 55,
    delaySpeed: 1500,
  });

  return (
    <Flex height="100vh" justifyContent="center">
      <Head>
        <title>Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack>
        <VStack height="100vh" justifyContent="center">
          <div className="App">
            <Text fontSize="5xl">
              {text}
              <Cursor />
            </Text>
          </div>
        </VStack>

        <VStack height="100vh">
          {user ? (
            <>
              <Link href="/pubPlace">
                <Button colorScheme="green" size="lg" width="100%">
                  Public Place
                </Button>
              </Link>
              <Link href="/privPlace">
                <Button colorScheme="red" size="lg" width="100%">
                  Private Place
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <Button bottom="0" size="lg" colorScheme="green">
                Login
              </Button>
            </Link>
          )}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Home;
