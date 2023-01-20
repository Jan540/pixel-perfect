import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
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
  Input,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Icon,
  Divider,
  useControllableState,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, RefObject, useContext, useEffect, useRef, useState } from "react";
import LoginModal from "./LoginModal";
import { UserContext } from "../lib/User/Usercontext";
import { useLazyQuery, useMutation } from "@apollo/client";
import LOGOUT from "../graphql/mutations/logoutUser";
import { setAccessToken } from "../lib/User/acesstoken";
import USERSFILTERED from "../graphql/queries/getUsersFiltered";
import { TUser } from "../lib/User/user";
import { render } from "react-dom";
import { MobileContext } from "../lib/MobileContext";

const Navbar: FC = () => {
  const { user, setUser } = useContext(UserContext);

  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const isMobile = useContext(MobileContext);
  const [logoutUser, { error: logoutError }] = useMutation(LOGOUT);

  const logout = async () => {
    setUser({ username: "", email: "", userId: "" });
    try {
      logoutUser();
    } catch (error) {
      console.log(logoutError?.message);
    }
    setUser({ username: "", email: "", userId: "", role: "" });
    setAccessToken("");
  };

  function OpenModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [filterOptions, setFilterOptions] = useControllableState({
      defaultValue: "",
    });
    const [filteredUser, setFilteredUser] = useControllableState<TUser[]>({
      defaultValue: [] as TUser[],
    });
    const [
      getUseresFiltered,
      {
        data: filteredUsersData,
        loading: filteredUsersLoading,
        error: filteredUsersError,
      },
    ] = useLazyQuery(USERSFILTERED, {
      nextFetchPolicy: "standby",
      fetchPolicy: "no-cache",
      variables: { input: filterOptions },
    });

    useEffect(() => {
      if (filterOptions === "") return;
      getFilteredUsersHandler();
    }, [filterOptions]);

    useEffect(() => {
      if (!filteredUsersData) return;
      setFilteredUser(filteredUsersData.usersFiltered as TUser[]);
    }, [filteredUsersData]);
    const getFilteredUsersHandler = async () => {
      try {
        await getUseresFiltered();
      } catch {
        return false;
      }
    };
    return (
      <>
        {isMobile ? (
          <IconButton
            aria-label="Search for User"
            icon={<SearchIcon />}
            onClick={async () => {
              onOpen();
            }}
          />
        ) : (
          <Input
            width={"100%"}
            placeholder="Search for User"
            variant="filled"
            size="md"
            type="text"
            isReadOnly={true}
            onClick={async () => {
              onOpen();
            }}
          ></Input>
        )}

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            setFilterOptions("");
            setFilteredUser([] as TUser[]);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <HStack>
                <SearchIcon />
                <Input
                  variant="unstyled"
                  placeholder="Search for Users"
                  type="text"
                  value={filterOptions}
                  onChange={async (e) => {
                    setFilterOptions(e.target.value);
                  }}
                ></Input>
              </HStack>
              <>
                {filteredUser.length !== 0 ? <Divider mb={2} /> : null}
                {filteredUsersLoading ? (
                  <Spinner
                    position="relative"
                    left="50%"
                    transform="translate(-50%, 0)"
                    mt={3}
                  />
                ) : null}
                {filteredUser.map((user) => (
                  <Link key={user.userId} href={`/${user.userId}`}>
                    <Text
                      _hover={{}}
                      padding={1}
                      color={user.role === "PREMIUM_USER" ? "purple.500" : ""}
                    >
                      {user.username}
                    </Text>
                  </Link>
                ))}
              </>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
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
                    logout();
                    router.push("/");
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
      height={75}
      width="100vw"
      justifyContent="space-between"
      alignItems="center"
      px={30}
    >
      <HStack>
        <Link href="/">
          <Button>Place</Button>
        </Link>
      </HStack>
      <VStack
        position={isMobile ? "relative" : "absolute"}
        left={isMobile ? "" : "50%"}
        transform={isMobile ? "" : "translate(-50%, 0)"}
        w={"20vw"}
        justifyContent="center"
      >
        <OpenModal />
      </VStack>
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
              <Link href={user.userId}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link href="/account">
                <MenuItem>Account</MenuItem>
              </Link>
              <LogoutDialog />
            </MenuList>
          </Menu>
        ) : (
          <LoginModal />
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
