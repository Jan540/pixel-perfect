import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ApolloProvider, gql, useMutation } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { useState } from "react";




function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ChakraProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Navbar />
      </ChakraProvider>
  );
}

export default MyApp;
