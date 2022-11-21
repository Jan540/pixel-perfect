import React, { Fragment } from "react";

import GlobalStyles from "../assets/GlobalStyles";
import DrawCanvas from "../components/DrawCanvas/DrawCanvas";
import { NextPage } from "next";
import { Flex } from "@chakra-ui/react";

const privatePlace: NextPage = () => {
  return (
    <>
      <GlobalStyles />
      <Flex alignContent="center" justifyContent="center">
        <DrawCanvas w={30} h={15} />
      </Flex>
    </>
  );
};

export default privatePlace;
