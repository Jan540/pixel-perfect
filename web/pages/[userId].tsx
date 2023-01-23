import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  AddIcon,
  ArrowBackIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useToast,
  UseToastOptions,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SEND_FRIENDREQUEST } from "../graphql/mutations/sendFriendrequest";
import ADD_FRIEND from "../graphql/mutations/addFriend";
import REMOVE_FRIEND from "../graphql/mutations/removeFriends";
import GET_FIRSTFRIENDS from "../graphql/queries/getFirstFriends";
import GET_NEXTFRIENDS from "../graphql/queries/getNextFriends";
import GET_PREVIOUSFRIENDS from "../graphql/queries/getPreviousFriends";
import GET_USERBYID from "../graphql/queries/getUserById";
import { getAccessToken } from "../lib/User/acesstoken";
import { defaultUser, TUser } from "../lib/User/user";
import { UserContext } from "../lib/User/Usercontext";

const Profile: NextPage = () => {
  const router = useRouter();
  const { userId }: any = router.query;
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();

  const [displayedUser, setDisplayedUser] = useState<TUser>(defaultUser);
  const [friends, setFriends] = useState<TUser[]>([]);
  const endCursor = useRef("");
  const startCurser = useRef("");
  const hasNextPage = useRef(false);
  const hasPerviousPage = useRef(false);
  const [oldToken, setOldToken] = useState("");

  const {
    error: userByIDError,
    data: userByIdData,
    loading: userByIdLoading,
  } = useQuery(GET_USERBYID, {
    variables: { userId },
  });

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
    fetchPolicy: "no-cache",
  });
  const [
    sendFriendRequest,
    {
      data: friendRequestData,
      loading: friendRequestLoading,
      error: friendRequestError,
    },
  ] = useMutation(SEND_FRIENDREQUEST);

  const SendFriendRequestHandler = async () => {
    try {
      await sendFriendRequest({
        variables: {
          input: {
            payload: {
              toFriedUserId: displayedUser.userId,
              username: user.username,
            },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
    showToast("Friend request sent!", "success" as UseToastOptions);
  };

  useEffect(() => {
    if (!friendRequestError) return;
    toast({
      title: 'Something went wrong!',
      status: "error",
      isClosable: true,
      variant: "top-accent"
    });
  }, [friendRequestError, toast]);

  const [
    removeFriend,
    {
      data: removeFriendData,
      loading: removeFriendLoading,
      error: removeFriendError,
    },
  ] = useMutation(REMOVE_FRIEND);

  useEffect(() => {
    if (!userByIdData) return;
    setDisplayedUser(userByIdData.userById as TUser);
  }, [userByIdData]);

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
    getFirstFriends();
    setOldToken(getAccessToken());
  }, [getFirstFriends, oldToken]);

  const showToast = useCallback((message: string, type: any) => {
    toast({
      title: message,
      status: type,
      isClosable: true,
    });
  }, [toast]);

  const removeFriendHandler = async (friend: TUser) => {
    toast.closeAll();
    try {
      await removeFriend({
        variables: { input: { friend_Id: friend.userId } },
      });
    } catch {
      return false;
    }
    getFirstFriends();

    showToast("Friend removed", "success" as UseToastOptions);
  };

  useEffect(() => {
    if (!removeFriendError) return;
    showToast(removeFriendError?.message!, "error" as UseToastOptions);
  }, [removeFriendError, showToast]);

  return displayedUser.userId === userId ? (
    <>
      {getNextFriendsError ? getNextFriendsError.message : null}
      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        height="60vh"
        mr="5%"
        ml="5%"
      >
        <VStack position="absolute" left="50%" transform="translateX(-50%)">
          <Text fontSize={"5xl"}>{displayedUser.username}</Text>
          <Avatar
            size="2xl"
            name={displayedUser.username}
            src="https://bit.ly/code-beast"
            _hover={{
              size: "xl",
            }}
          />
          <Text fontSize="xl">Role: {displayedUser.role}</Text>
          {displayedUser.userId === user.userId ? (
            <Button>Show Friends</Button>
          ) : null}
          {displayedUser.userId === user.userId ? null : (
            <HStack>
              <Text fontSize={"xl"}>Add as Friend</Text>
              <IconButton
                aria-label="AddFriend"
                icon={<AddIcon />}
                colorScheme="green"
                onClick={() => {
                  SendFriendRequestHandler();
                }}
              />
            </HStack>
          )}
        </VStack>
        {displayedUser.userId === user.userId ? (
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
                          <Tooltip
                            placement="left"
                            label={`Got to ${friend.username}`}
                            hasArrow
                            aria-label="tooltip"
                          >
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
                          </Tooltip>
                          <Td>
                            <IconButton
                              aria-label="Remove-Friend"
                              colorScheme={"red"}
                              position="relative"
                              left="50%"
                              transform="translateX(-50%)"
                              icon={<ArrowBackIcon />}
                              onClick={() => {
                                removeFriendHandler(friend);
                              }}
                            />
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
        ) : null}
      </Flex>
    </>
  ) : (
    <>
      <h1>no user</h1>
    </>
  );
};

export default Profile;
