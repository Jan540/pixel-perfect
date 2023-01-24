import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
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
  IconButton,
  Text,
  useToast,
  Divider,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Tooltip,
} from "@chakra-ui/react";
import { userAgent } from "next/server";
import { type } from "os";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMailOutline, IoMailUnreadOutline } from "react-icons/io5";
import { ON_FRIENDREQUEST } from "../graphql/code/onFriendRequest";
import { SEND_FRIENDREQUEST } from "../graphql/mutations/sendFriendrequest";
import { UserContext } from "../lib/User/Usercontext";
import GET_FRIENDREQUESTS from "../graphql/queries/getFriendRequests";
import { getAccessToken } from "../lib/User/acesstoken";
import { friendRequestMessages } from "../data/FriendRequestMessages";
import { BellIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import { MobileContext } from "../lib/MobileContext";
import REJECTFRIEND from "../graphql/mutations/rejectFriedRequest";
import { RejectFriendRequestInput } from "../gql/graphql";
import ACCEPTFRIEND from "../graphql/mutations/acceptFriendRequest";

type FriendRequestProps = {
  userId: string;
  username: string;
};

const MessageDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();
  const [notifications, setNotifications] = useState<FriendRequestProps[]>([]);
  const toast = useToast();
  const { user, setUser } = useContext(UserContext);
  const [hasNotifications, setHasNotifications] = useState(false);
  const isMobile = useContext(MobileContext);

  const [
    getFriendRequests,
    {
      data: friendRequestData,
      error: friendRequestError,
      loading: friendRequestLoading,
    },
  ] = useLazyQuery(GET_FRIENDREQUESTS, {
    nextFetchPolicy: "standby",
    fetchPolicy: "no-cache",
  });

  const getFriendRequestsHandler = async () => {
    try {
      await getFriendRequests();
    } catch (error) {
      return;
    }
  };

  const [
    rejectFriendRequest,
    { data: rejectData, error: rejectError, loading: rejectLoading },
  ] = useMutation(REJECTFRIEND);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rejectFriendRequestHandler = async (friendId: string) => {
    try {
      await rejectFriendRequest({
        variables: {
          input: {
            friendId: friendId,
          },
        },
      });
    } catch (error) {
      return;
    }
    setNotifications((prev) => prev.filter((item) => item.userId !== friendId));
    toast({
      title: "Rejected",
      description: "You rejected the friend request",
      status: "info",
      variant: "top-accent",
    });
  };

  const [acceptRequest, { data: acceptData, error: acceptError }] =
    useMutation(ACCEPTFRIEND);

  const acceptFriendRequestHandler = async (friendId: string) => {
    try {
      await acceptRequest({
        variables: {
          input: {
            friendId: friendId,
          },
        },
      });
    } catch (error) {
      return;
    }
    setNotifications((prev) => prev.filter((item) => item.userId !== friendId));
    toast({
      title: "Accepted",
      description: "You accepted the friend request",
      status: "success",
      variant: "top-accent",
    });
  };

  useEffect(() => {
    toast.closeAll();
    if (!acceptError) return;
    toast({
      title: "Error",
      description: acceptError.message,
      status: "error",
      variant: "top-accent",
    });
  }, [acceptError, toast]);

  useEffect(() => {
    toast.closeAll();
    if (!rejectError) return;
    toast({
      title: "Error",
      description: rejectError.message,
      status: "error",
      variant: "top-accent",
    });
  }, [rejectError, toast]);

  useEffect(() => {
    if (!notifications || notifications.length === 0) {
      setHasNotifications(false);
      return;
    } else {
      setHasNotifications(true);
    }
  }, [notifications]);

  useEffect(() => {
    toast.closeAll();
    if (!friendRequestData) return;
    setNotifications(
      friendRequestData.getFriendRequests as FriendRequestProps[]
    );
  }, [friendRequestData, toast]);

  useEffect(() => {
    if (!getAccessToken()) return;
    getFriendRequestsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAccessToken()]);

  const { data, error } = useSubscription(ON_FRIENDREQUEST, {
    onData: (onChangeData) => {
      if (!onChangeData.data.data) return;
      const { onAddFriend } = onChangeData.data.data;
      if (!onAddFriend) return;
      toast({
        title: "New Friend Request",
        description: `${onAddFriend.username} sent you a friend request`,
        status: "info",
        position: "bottom-right",
        isClosable: false,
      });
      setNotifications((prev) => [
        ...prev,
        { userId: onAddFriend.senderId, username: onAddFriend.username },
      ]);
    },
    variables: {
      input: user.userId,
    },
  });

  return (
    <>
      <IconButton
        aria-label={"Messages"}
        icon={<BellIcon />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={isMobile ? "full" : "xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader shadow={"md"}>Your Friend Requests</DrawerHeader>
          <Divider />

          <DrawerBody>
            {notifications.length === 0 ? (
              <Text textAlign={"center"} mt={2} fontSize="xl">No Friend Requests</Text>
            ) : (
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    {notifications.map((notification) => {
                      return (
                        <Tr key={notification.userId}>
                          <Th>{notification.username}</Th>
                          <Th>
                            <Tooltip
                              label={"Accept Friend Request"}
                              placement={"bottom"}
                              aria-label={"Accept_request"}
                              hasArrow
                            >
                              <IconButton
                                size={"sm"}
                                colorScheme={"green"}
                                aria-label={"Accept_request"}
                                icon={<SmallAddIcon fontSize={"125%"} />}
                                onClick={() => {
                                  acceptFriendRequestHandler(
                                    notification.userId
                                  );
                                }}
                              />
                            </Tooltip>
                            <Tooltip
                              label={"Decline Friend Request"}
                              placement={"bottom"}
                              aria-label={"Decline_request"}
                              hasArrow
                            >
                              <IconButton
                                ml={2}
                                colorScheme={"red"}
                                size={"sm"}
                                aria-label="Decline_request"
                                icon={<MinusIcon fontSize={"75%"} />}
                                onClick={() => {
                                  rejectFriendRequestHandler(
                                    notification.userId
                                  );
                                }}
                              />
                            </Tooltip>
                          </Th>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="solid" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MessageDrawer;
