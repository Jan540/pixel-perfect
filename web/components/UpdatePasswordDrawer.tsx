import { useMutation } from "@apollo/client";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { BREAK } from "graphql";
import React, { useEffect, useState } from "react";
import UPDATEPASSWORD from "../graphql/mutations/updatePassword";
import updatePassword from "../graphql/mutations/updatePassword";

const PasswordDrawer = () => {
  const [
    updatePassword,
    { data: dataPassword, error: errorPassword, loading: loadingPassword },
  ] = useMutation(UPDATEPASSWORD);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const toast = useToast();
  const [inputOldPassword, setInputOldPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");

  const UpdatePassword = async () => {
    toast.closeAll();
    try {
      await updatePassword({
        variables: {
          input: {
            oldPassword: inputOldPassword,
            newPassword: inputNewPassword,
          },
        },
      });
    } catch {
      return false;
    }
    toast({
      title: `Password changed`,
      description: "Success!",
      status: "success",
      isClosable: true,
      position: "bottom",
    });
    onClose();
  };

  useEffect(() => {
    if (!errorPassword) return;
    toast({
      title: `${errorPassword?.message}`,
      description: "nice try!",
      status: "error",
      isClosable: true,
      position: "bottom",
    });
  }, [errorPassword]);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Change Password
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chnage your Password</DrawerHeader>
          <DrawerBody>
            <Input
              isInvalid={errorPassword ? true : false}
              isDisabled={loadingPassword}
              type="password"
              variant="filled"
              placeholder="Old Password"
              onChange={(e) => setInputOldPassword(e.target.value)}
            />
            <Input
              mt={3}
              isInvalid={errorPassword ? true : false}
              isDisabled={loadingPassword}
              type="password"
              variant="filled"
              placeholder="New Password"
              onChange={(e) => setInputNewPassword(e.target.value)}
            />
            <HStack mt={5}>
              <Button
                variant="outline"
                mr={3}
                colorScheme="red"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme="green" onClick={UpdatePassword}>
                Save
              </Button>
            </HStack>
          </DrawerBody>
          <DrawerFooter>All Rights Reserved © 2022</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PasswordDrawer;
