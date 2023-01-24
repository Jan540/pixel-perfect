import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  AddIcon,
  ArrowBackIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
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
import { useContext, useEffect, useRef, useState } from "react";
import { SEND_FRIENDREQUEST } from "../graphql/mutations/sendFriendrequest";
import REMOVE_FRIEND from "../graphql/mutations/removeFriends";
import GET_FIRSTFRIENDS from "../graphql/queries/getFirstFriends";
import GET_NEXTFRIENDS from "../graphql/queries/getNextFriends";
import GET_PREVIOUSFRIENDS from "../graphql/queries/getPreviousFriends";
import GET_USERBYID from "../graphql/queries/getUserById";
import { getAccessToken } from "../lib/User/acesstoken";
import { defaultUser, TUser } from "../lib/User/user";
import { UserContext } from "../lib/User/Usercontext";
import DisplayFriends from "../components/FriendsModal";
import ISBEFRIENED from "../graphql/queries/isBefriended";

const Profile: NextPage = () => {
  const router = useRouter();
  const { userId }: any = router.query;
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();
  const [oldToken, setOldToken] = useState("");
  const [displayedUser, setDisplayedUser] = useState<TUser>(defaultUser);
  const [isBefriended, setIsBefriended] = useState(false);

  const {
    error: userByIDError,
    data: userByIdData,
    loading: userByIdLoading,
  } = useQuery(GET_USERBYID, {
    variables: { userId },
  });

  const [
    sendFriendRequest,
    {
      data: friendRequestData,
      loading: friendRequestLoading,
      error: friendRequestError,
    },
  ] = useMutation(SEND_FRIENDREQUEST);

  const [
    getIsBefriended,
    {
      data: isBefriendedData,
      loading: isBefriendedLoading,
      error: isBefriendedError,
    },
  ] = useLazyQuery(ISBEFRIENED, {
    variables: {
      input: displayedUser.userId,
    },
    nextFetchPolicy: "standby",
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (oldToken === getAccessToken()) return;
    getIsBefriended();
    setOldToken(getAccessToken());
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAccessToken(),
    oldToken,
    getIsBefriended,
    displayedUser.userId,
    user.userId,
  ]);

  useEffect(() => {
    if (!isBefriendedData) return;
    setIsBefriended(isBefriendedData.isBefriended);
  }, [isBefriendedData]);

  const SendFriendRequestHandler = async () => {
    toast.closeAll();
    try {
      await sendFriendRequest({
        variables: {
          input: {
            payload: {
              toFriedUserId: displayedUser.userId,
              senderId: user.userId,
              username: user.username,
            },
          },
        },
      });
    } catch (e) {
      return;
    }
    toast({
      title: "Friend Request",
      description: "Friend Request Sent",
      status: "success",
      variant: "top-accent",
    });
  };

  useEffect(() => {
    if (!friendRequestError) return;
    toast({
      title: "Error",
      description: friendRequestError.message,
      status: "error",
      variant: "top-accent",
    });
  }, [friendRequestError, toast]);

  useEffect(() => {
    if (!userByIdData) return;
    setDisplayedUser(userByIdData.userById as TUser);
  }, [userByIdData]);

  return displayedUser.userId === userId ? (
    <>
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
          <Text fontSize="2xl">Role: {displayedUser.role}</Text>
          {displayedUser.userId === user.userId ? <DisplayFriends /> : null}
          {isBefriended ? null : (
            <HStack>
              <Text fontSize={"xl"}>Add as Friend</Text>
              <IconButton
                size={"sm"}
                isLoading={friendRequestLoading}
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
        {displayedUser.userId === user.userId ? null : null}
      </Flex>
    </>
  ) : (
    <>
      <h1>no user</h1>
    </>
  );
};

export default Profile;
