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
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import { FC, useEffect, useMemo, useState } from "react";

const publicPl: NextPage = () => {
  return (
    <>
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <>
          {Array(10)
            .fill(0)
            .map((_, i) => {
              <Text>test</Text>;
            })}
        </>
      </Flex>
    </>
  );
};
export default publicPl;
