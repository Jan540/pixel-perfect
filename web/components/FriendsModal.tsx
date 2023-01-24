import { useLazyQuery, useMutation } from "@apollo/client";
import { MinusIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  useToast,
  TableCaption,
} from "@chakra-ui/react";
import router from "next/router";
import { useState, useRef, useEffect } from "react";
import REMOVE_FRIEND from "../graphql/mutations/removeFriends";
import GET_FIRSTFRIENDS from "../graphql/queries/getFirstFriends";
import GET_NEXTFRIENDS from "../graphql/queries/getNextFriends";
import getNextFriends from "../graphql/queries/getNextFriends";
import GET_PREVIOUSFRIENDS from "../graphql/queries/getPreviousFriends";
import { getAccessToken } from "../lib/User/acesstoken";
import { TUser } from "../lib/User/user";

function DisplayFriends() {
  const [friends, setFriends] = useState<TUser[]>([]);
  const endCursor = useRef("");
  const startCurser = useRef("");
  const hasNextPage = useRef(false);
  const hasPerviousPage = useRef(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [oldToken, setOldToken] = useState("");
  const toast = useToast();

  const [
    getNextFriends,
    {
      data: getNextFriendsData,
      error: getNextFriendsError,
      loading: getNextFriendsLoading,
    },
  ] = useLazyQuery(GET_NEXTFRIENDS, {
    nextFetchPolicy: "standby",
    fetchPolicy: "no-cache",

    variables: { input: endCursor.current },
  });

  const [
    getPerviousFriends,
    {
      data: getPerviousFriendsData,
      error: getPerviousFriendsError,
      loading: getPerviousFriendsLoading,
    },
  ] = useLazyQuery(GET_PREVIOUSFRIENDS, {
    nextFetchPolicy: "standby",
    fetchPolicy: "no-cache",

    variables: { input: startCurser.current },
  });

  const [
    getFirstFriends,
    {
      error: firstFriendsError,
      data: firstFriendsData,
      loading: firstFriendsLoading,
    },
  ] = useLazyQuery(GET_FIRSTFRIENDS, {
    nextFetchPolicy: "standby",
    fetchPolicy: "no-cache",
  });

  const [
    removeFriend,
    {
      data: removeFriendData,
      loading: removeFriendLoading,
      error: removeFriendError,
    },
  ] = useMutation(REMOVE_FRIEND);

  const removeFriendHandler = async (friend: TUser) => {
    toast.closeAll();
    try {
      await removeFriend({
        variables: { input: { friend_Id: friend.userId } },
      });
    } catch {
      return false;
    }
    getFirstFriendsHandler();

    toast({
      title: "Success",
      description: "Friend removed",
      status: "success",
      variant: "top-accent",
    });
  };

  const getFirstFriendsHandler = async () => {
    toast.closeAll();
    try {
      await getFirstFriends();
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!firstFriendsError) return;
    toast({
      title: "Unexpected Error",
      description: firstFriendsError.message,
      status: "error",
      variant: "top-accent",
    });
  }, [firstFriendsError, toast]);

  useEffect(() => {
    if (!removeFriendError) return;
    toast({
      title: "Error",
      description: removeFriendError.message,
      status: "error",
      variant: "top-accent",
    });
  }, [removeFriendError, toast]);

  useEffect(() => {
    if (!getNextFriendsData) return;
    setFriends(getNextFriendsData.getFriends?.nodes as TUser[]);
    endCursor.current = getNextFriendsData.getFriends?.pageInfo.endCursor!;
    startCurser.current = getNextFriendsData.getFriends?.pageInfo.startCursor!;
    hasNextPage.current = getNextFriendsData.getFriends?.pageInfo.hasNextPage!;
    hasPerviousPage.current =
      getNextFriendsData.getFriends?.pageInfo.hasPreviousPage!;
  }, [
    getNextFriendsData,
    endCursor,
    startCurser,
    hasNextPage,
    hasPerviousPage,
  ]);

  useEffect(() => {
    if (!getPerviousFriendsData) return;
    setFriends(getPerviousFriendsData.getFriends?.nodes as TUser[]);
    endCursor.current = getPerviousFriendsData.getFriends?.pageInfo.endCursor!;
    startCurser.current =
      getPerviousFriendsData.getFriends?.pageInfo.startCursor!;
    hasNextPage.current =
      getPerviousFriendsData.getFriends?.pageInfo.hasNextPage!;
    hasPerviousPage.current =
      getPerviousFriendsData.getFriends?.pageInfo.hasPreviousPage!;
  }, [
    getPerviousFriendsData,
    endCursor,
    startCurser,
    hasNextPage,
    hasPerviousPage,
  ]);

  useEffect(() => {
    if (!firstFriendsData) return;
    setFriends(firstFriendsData.getFriends?.nodes as TUser[]);
    endCursor.current = firstFriendsData.getFriends?.pageInfo.endCursor!;
    startCurser.current = firstFriendsData.getFriends?.pageInfo.startCursor!;
    hasNextPage.current = firstFriendsData.getFriends?.pageInfo.hasNextPage!;
    hasPerviousPage.current =
      firstFriendsData.getFriends?.pageInfo.hasPreviousPage!;
  }, [firstFriendsData, endCursor, startCurser, hasNextPage, hasPerviousPage]);

  useEffect(() => {
    if (oldToken === getAccessToken()) return;
    getFirstFriendsHandler();
    setOldToken(getAccessToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAccessToken(), getFirstFriends, oldToken]);

  return (
    <>
      <Button
        colorScheme={"cyan"}
        onClick={() =>
          friends.length > 0
            ? (onOpen(), getFirstFriendsHandler())
            : toast({
                title: "No friends",
                description: "Add friends to see them",
                status: "info",
                variant: "top-accent",
              })
        }
      >
        Show Friends
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} fontSize={"3xl"}>
            Your friends
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack ml="auto" position="relative">
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Username</Th>
                      <Th>Remove</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {friends
                      ? friends.map((friend) => (
                          <Tr key={friend.userId}>
                            <Td
                              color={
                                friend.role === "PREMIUM_USER"
                                  ? "purple.500"
                                  : ""
                              }
                              _hover={{
                                textDecoration: "underline",
                              }}
                              userSelect="none"
                              onClick={() => {
                                router.push(`/${friend.userId}`);
                              }}
                            >
                              {friend.username}
                            </Td>
                            <Td>
                              <Tooltip
                                placement="bottom"
                                label={`Remove ${friend.username}`}
                                hasArrow
                                aria-label="tooltip"
                              >
                                <IconButton
                                  aria-label="Remove-Friend"
                                  colorScheme={"red"}
                                  position="relative"
                                  size={"sm"}
                                  left="50%"
                                  transform="translateX(-50%)"
                                  icon={<MinusIcon />}
                                  onClick={() => {
                                    removeFriendHandler(friend);
                                  }}
                                />
                              </Tooltip>
                            </Td>
                          </Tr>
                        ))
                      : null}
                  </Tbody>
                </Table>
              </TableContainer>
              <HStack>
                <IconButton
                  aria-label="Previous"
                  isLoading={getPerviousFriendsLoading}
                  icon={<ArrowLeftIcon />}
                  isDisabled={!hasPerviousPage.current}
                  onClick={() => {
                    if (!hasPerviousPage.current) return;
                    getPerviousFriends({
                      variables: { input: startCurser.current },
                    });
                  }}
                />
                <IconButton
                  aria-label="Next"
                  isLoading={getNextFriendsLoading}
                  icon={<ArrowRightIcon />}
                  isDisabled={!hasNextPage.current}
                  onClick={() => {
                    if (!hasNextPage.current) return;
                    getNextFriends({ variables: { input: endCursor.current } });
                  }}
                />
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DisplayFriends;
