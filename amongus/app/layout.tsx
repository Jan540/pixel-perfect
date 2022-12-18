"use client";
import { ApolloProvider } from "@apollo/client";
/* eslint-disable @next/next/no-head-element */
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import apolloClient from "../lib/apolloClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Amongus</title>
      </head>
      <body>
        <ApolloProvider client={apolloClient}>
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
