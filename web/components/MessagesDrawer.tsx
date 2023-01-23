import { useMutation, useSubscription } from '@apollo/client';
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
} from '@chakra-ui/react';
import { userAgent } from 'next/server';
import { type } from 'os';
import React, { useContext, useState } from 'react';
import { IoMailOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { ON_FRIENDREQUEST } from '../graphql/code/onFriendRequest';
import { SEND_FRIENDREQUEST } from '../graphql/mutations/sendFriendrequest';
import { UserContext } from '../lib/User/Usercontext';

type AddFriendProps = {
  userId: string;
  username: string;
};

const MessageDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const [requests, setRequests] = useState<AddFriendProps[]>([]);

  const { user, setUser } = useContext(UserContext);

  const { data, error } = useSubscription(ON_FRIENDREQUEST, {
    onData: (onChangeData) => {
      if (!onChangeData.data.data) return;
      const { onAddFriend } = onChangeData.data.data;
      if (!onAddFriend) return;
      setRequests((prev) => [
        ...prev,
        { userId: onAddFriend.toFriedUserId, username: onAddFriend.username },
      ]);
    },
    variables: {
      input: user.userId,
    },
  });

  return (
    <>
      <IconButton
        aria-label={'Messages'}
        as={true ? IoMailOutline : IoMailUnreadOutline}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Messages</DrawerHeader>

          <DrawerBody>
            {requests.map((request) => (
              <Text key={request.userId}>{request.username}</Text>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MessageDrawer;
