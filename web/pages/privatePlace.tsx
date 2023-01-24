import { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import { GET_USERS } from "../graphql/code/getUsers";
import { useQuery } from "@apollo/client";
import PixelArtCanvas from "../components/PixerlArtCanvas";

const PrivatePlace: NextPage = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  return (
    <Flex>
      <Text>Private Place</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>{JSON.stringify(data)}</Text>}
      <PixelArtCanvas height={20} width={20} id='test'></PixelArtCanvas>
    </Flex>
  );
};

export default PrivatePlace;
