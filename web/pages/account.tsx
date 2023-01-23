import { useMutation } from "@apollo/client";
import {
  Flex,
  Avatar,
  VStack,
  Button,
  HStack,
  Text,
  Divider,
  Input,
  Stack,
  useToast,
  border,
  Tooltip,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FC, useContext, useEffect, useRef, useState } from "react";
import PasswordDrawer from "../components/UpdatePasswordDrawer";
import UPDATEEMAIL from "../graphql/mutations/updateEmail";
import UPLOAD_PRFPIC from "../graphql/mutations/uploadProfilePicture";
import { UserContext } from "../lib/User/Usercontext";

const Account: NextPage = () => {
  const [
    updateEmail,
    { data: dataEmail, error: errorEmail, loading: loadingEmail },
  ] = useMutation(UPDATEEMAIL);

  let fileRef: HTMLInputElement | null = null;

  const { user, setUser } = useContext(UserContext);
  const [inputEmail, setInputEmail] = useState("");
  const [editAccount, setEditAccount] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setInputEmail(user.email);
  }, [user]);

  const ChangesMade = () => {
    if (inputEmail === user.email && fileRef?.value === "") {
      toast({
        title: `Everything is the same`,
        description: "no changes made",
        status: "info",
        isClosable: true,
        position: "bottom",
      });
      return false;
    }
    return true;
  };

  const UpdateEmail = async () => {
    toast.closeAll();
    try {
      await updateEmail({
        variables: {
          input: {
            newEmail: inputEmail,
          },
        },
      });
    } catch {
      return false;
    }
    toast({
      title: ` Account Updated`,
      description: "Success!",
      status: "success",
      isClosable: true,
      position: "bottom",
    });
    setEditAccount(!editAccount);
  };
  const [
    uploadProfilePicture,
    { data: uploadData, error: uploadError, loading: uploadLoading },
  ] = useMutation(UPLOAD_PRFPIC);

  const UploadProfilePictureHandler = async ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    try {
      if (validity.valid) {
        await uploadProfilePicture({
          variables: {
            input: { file },
          },
        });
      }
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!uploadError) return;
    toast.closeAll();
    fileRef!.value = "";
    toast({
      title: `${uploadError?.message}`,
      description: "Ups!",
      status: "error",
      isClosable: true,
      position: "bottom",
    });
  }, [fileRef, toast, uploadError]);

  useEffect(() => {
    if (!errorEmail) return;
    toast.closeAll();
    setInputEmail(user.email);
    toast({
      title: `${errorEmail?.message}`,
      description: "nice try!",
      status: "error",
      isClosable: true,
      position: "bottom",
    });
  }, [errorEmail, toast, user.email]);

  return (
    <>
      <Flex
        height="100vh"
        width="100wv"
        alignItems="start"
        justifyContent="center"
      >
        <VStack width={"25"} mt={40}>
          <input
            type="file"
            id="file"
            ref={(ref) => (fileRef = ref)}
            style={{ display: "none" }}
            onChange={UploadProfilePictureHandler}
          />

          <Tooltip
            label="Change Profile Picture"
            aria-label="tooltip"
            placement="right"
            hasArrow
            isDisabled={!editAccount}
          >
            <Avatar
              onClick={() => {
                editAccount ? fileRef!.click() : null;
              }}
              size="2xl"
              name={user.username}
              src="https://bit.ly/code-beast"
              _hover={
                editAccount
                  ? {
                      border: "2px",
                      borderColor: "green.500",
                    }
                  : {
                      border: "0px",
                    }
              }
            />
          </Tooltip>
          <Text fontSize="3xl" mb={10}>
            {user.username}
          </Text>
          <Stack alignContent={"center"}>
            <Divider />
            <HStack>
              <Input
                isInvalid={errorEmail ? true : false}
                placeholder="example@email.com"
                variant="filled"
                readOnly={!editAccount}
                value={inputEmail}
                defaultValue={user.email}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </HStack>
            <Divider />
            {editAccount ? (
              <>
                <PasswordDrawer />
                <Button
                  onClick={() => {
                    setInputEmail(user.email);
                    setEditAccount(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  key={"Save Acc"}
                  colorScheme="green"
                  onClick={() => {
                    ChangesMade() ? UpdateEmail() : null;
                    fileRef!.value = "";
                    setEditAccount(false);
                  }}
                >
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                key={"Edit Acc"}
                colorScheme="green"
                onClick={() => {
                  fileRef!.value = "";
                  setEditAccount(true);
                }}
              >
                Edit Account
              </Button>
            )}
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default Account;
