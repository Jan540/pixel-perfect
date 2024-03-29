import {
  Button,
  Flex,
  VStack,
  Container,
  Text,
  HStack,
  useToast,
  ToastPosition,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC, useContext } from "react";
//import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { quotes } from "../data/quotes";
import Typewriter from "typewriter-effect";
import { useMutation } from "@apollo/client";
import UPLOAD_PRFPIC from "../graphql/mutations/uploadProfilePicture";
import { UserContext } from "../lib/User/Usercontext";
import { getAccessToken } from "../lib/User/acesstoken";

const Home: NextPage = () => {
  //const { user, setUser } = useContext(UserContext);
  // const client = ...
  const isLoggedIn = !!getAccessToken();
  const toast = useToast();
  const [uploadProfilePicture, { data, error, loading }] =
    useMutation(UPLOAD_PRFPIC);
  const UploadPFPIC: FC = () => {
    const onChange = async ({
      target: {
        validity,
        files: [file],
      },
    }: any) => {
      try {
        if (validity.valid) {
          await uploadProfilePicture({
            variables: {
              input: { file },
            },
          });
        }
      } catch {
        return false;
      }
    };

    return <input type="file" required onChange={onChange} />;
  };

  const ToastButton = async () => {
    toast.closeAll();
    for (let i = 0; i < 25; i++) {
      const pos = [
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ];
      let num = Math.floor(Math.random() * 8);
      toast({
        title: "He is cooking",
        description: "We've made some Toasts!",
        status: "success",
        duration: 1500,
        position: pos[num] as ToastPosition,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh" justifyContent="center">
      <Head>
        <title>Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing="-100px">
        <VStack height="100vh" justifyContent="center">
          <Container fontSize="5xl">
            <Typewriter
              options={{
                strings: quotes,
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
                delay: 55,
              }}
            />
          </Container>
          <Button onClick={async () => await ToastButton()}>Toasts?</Button>
        </VStack>

        <HStack height="150vh" width="1500px" spacing="20">
          (
          <>
            <Link href={isLoggedIn ? "./canvasCollection" : "./privatePlace"}>
              <Button bgColor={"grey.500"} size="lg" width="100%" height="80%">
                <VStack spacing="15px">
                  <Text>Private Place</Text>
                  <Text>Draw by yourself, or with friends</Text>
                  {/*TODO: Add SVGs for each bing bong */}
                </VStack>
              </Button>
            </Link>
            <Link href="./publicPlace">
              <Button bgColor={"grey.500"} size="lg" width="100%" height="80%">
                <VStack spacing="15px">
                  <Text>Public Place</Text>
                  <Text>Draw with people from the entire world!</Text>
                </VStack>
              </Button>
            </Link>
          </>
          )
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Home;
