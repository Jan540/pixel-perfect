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
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import { FC, useEffect, useMemo, useState } from "react";
//import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { quotes } from "../data/quotes";
import Typewriter from "typewriter-effect";

const Account: NextPage = () => {
  return (
    <>
      <Flex height="50vh" alignItems="center" justifyContent="center">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
              _hover={{
                size: "xl",
              }}
            />
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
};

const Click = () => {
  console.log("Click");
};

const Hover = () => {
  console.log("Hover");
};

export default Account;
