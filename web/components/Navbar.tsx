import { EmailIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
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
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC, RefObject, useRef } from "react";

const Navbar: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const user = "45";

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
        {user ? (
          <Menu>
            <MenuButton as={Button} mr={"1.5"}>
              <HStack>
                <Text>BingBong</Text>
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.want.nl%2Fwp-content%2Fuploads%2F2020%2F10%2FAmong-Us-jij-bent-imposter.jpg&f=1&nofb=1&ipt=04ca4d558a7f302f72d1a1e8fe16fe477c8d69c96cca31748b9f6318e7c6500c&ipo=images"
                />
              </HStack>
            </MenuButton>
            <MenuList>
              <Link href="#">
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link href="#">
                <MenuItem>Account</MenuItem>
              </Link>
              <LogoutDialog />
            </MenuList>
          </Menu>
        ) : (
          <Button mr="1.5">Log in</Button>
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

            <AlertDialogBody>Are you sure you want to log out?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef as RefObject<any>} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Navbar;
