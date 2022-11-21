import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query {
    users {
      userId
      email
      username
      updatedAt
      createdAt
    }
  }
`;

const Amongus: NextPage = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      direction="column"
    >
      {data.users.map((user: any) => (
        <Flex key={user.userId}>
          <p>{user.email}: </p>
          <p>{user.username}</p>
        </Flex>
      ))}
    </Flex>
  );
};

export default Amongus;
