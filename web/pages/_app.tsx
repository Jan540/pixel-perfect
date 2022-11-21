import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5107/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
