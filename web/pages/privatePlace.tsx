import { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import { GET_USERS } from "../graphql/code/getUsers";
import { useQuery } from "@apollo/client";

const PrivatePlace: NextPage = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  return (
    <Flex>
      <Text>Private Place</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>{JSON.stringify(data)}</Text>}
    </Flex>
  );
};

export default PrivatePlace;
