import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Text,
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, RefObject, useContext, useRef, useState } from "react";
import LoginModal from "./LoginModal";
import { UserContext } from "../lib/User/Usercontext";
import { setAccessToken } from "../lib/User/acesstoken";
import { useMutation } from "@apollo/client";
import LOGOUT from "../graphql/mutations/logoutUser";
import { deleteCookie } from "cookies-next";

const Navbar: FC = () => {
  const { user, setUser } = useContext(UserContext);

  const { toggleColorMode, colorMode } = useColorMode();
  const [username, setUsername] = useState("");
  const router = useRouter();

  const [logoutUser] = useMutation(LOGOUT);

  const logout = async () => {
    setUser({ username: "", email: "", userId: "" });
    try {
      logoutUser();
    } catch (error) {
      // TODO: URL should be changed to the actual URL of the server
      deleteCookie("jid", { path: "/", domain: "10.0.0.14" });
    }
    setAccessToken("");
  };

  function LogoutDialog() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    return (
      <>
        <MenuItem onClick={onOpen} color="red">
          Log out
        </MenuItem>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef as RefObject<any>}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Log out!
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to log out?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef as RefObject<any>} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    router.push("/");
                    logout();
                    onClose();
                  }}
                  ml={3}
                >
                  Log out
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }

  return (
    <Flex
      position="absolute"
      top={0}
      height={100}
      width="100vw"
      justifyContent="space-between"
      alignItems="center"
      px={30}
    >
      <div>
        <Link href="/">
          <Button mr="1.5">Place</Button>
        </Link>
      </div>
      <div>
        {user.username ? (
          <Menu>
            <MenuButton as={Button} mr={"1.5"}>
              <HStack>
                <Text>{user.username}</Text>
                <Avatar
                  size="sm"
                  name={user.username}
                  src="https://avatars.githubusercontent.com/u/1"
                />
              </HStack>
            </MenuButton>
            <MenuList>
              <Link href={user.username}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link href="/account">
                <MenuItem>Account</MenuItem>
              </Link>
              <LogoutDialog />
            </MenuList>
          </Menu>
        ) : (
          <LoginModal setUsername={setUsername} />
        )}
        <IconButton
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </div>
    </Flex>
  );
};

export default Navbar;
