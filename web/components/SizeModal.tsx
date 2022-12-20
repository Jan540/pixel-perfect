import { ApolloClient, useMutation } from "@apollo/client";
import {
  Text,
  Input,
  Stack,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Link,
  Modal,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  ModalHeader,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { FC } from "react";
import DividerWithText from "./DividerWithText";
import REGISTER from "../graphql/mutations/registerUser";
import { client } from "../lib/apolloClient";

const SizeModal = ({ setUsername }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true});

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Canvas Size</ModalHeader>
          <ModalBody>
            <FormControl>
              <Input type='number' placeholder="Height:" />
            </FormControl>
            <FormControl mt="5">
              <Input type='number' placeholder="Width:" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>Set Size</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SizeModal;
