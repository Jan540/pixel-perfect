import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  // useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  // const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" position="fixed" top={0}>
      <Box as="nav">
        <Container py={{ base: "4", lg: "5" }} width="100vw" maxWidth="100vw">
          <HStack justify="space-between">
            <Link href="/">
              <Button>Home</Button>
            </Link>
            <ButtonGroup spacing="4">
              <Button>Sign Up</Button>
              <Button colorScheme="blue">Login</Button>
            </ButtonGroup>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
