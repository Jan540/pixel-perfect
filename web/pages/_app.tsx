import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ApolloProvider, useSubscription } from "@apollo/client";
import client from "../lib/apolloClient";
import { UserContext } from "../lib/User/Usercontext";
import { useEffect, useMemo, useState } from "react";
import REFRSH from "../graphql/mutations/refreshUser";
import { setAccessToken } from "../lib/User/acesstoken";
import { TUser } from "../lib/User/user";
import { MobileContext } from "../lib/MobileContext";
import { ON_FRIENDREQUEST } from "../graphql/code/onFriendRequest";
import { extendTheme } from "@chakra-ui/react";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  let thisUser: TUser = {
    email: "",
    userId: "",
    username: "",
    role: "",
  };
  const [user, setUser] = useState(thisUser);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    client
      .mutate({
        mutation: REFRSH,
        variables: {},
      })
      .then((result) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        thisUser = {
          email: result.data?.refreshUser.userResponse?.user.email!,
          userId: result.data?.refreshUser.userResponse?.user.userId!,
          username: result.data?.refreshUser.userResponse?.user.username!,
          role: result.data?.refreshUser.userResponse?.user.role!,
        };
        setAccessToken(result.data?.refreshUser.userResponse?.token!);
        setUser(thisUser);
      });
  }, []);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <MobileContext.Provider value={isMobile}>
          <UserContext.Provider value={providerValue}>
            <Component {...pageProps} />
            <Navbar />
          </UserContext.Provider>
        </MobileContext.Provider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
