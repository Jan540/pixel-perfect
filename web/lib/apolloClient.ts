import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./User/acesstoken";

const uploadLink = createUploadLink({
  uri: "http://localhost:5107/graphql",
  credentials: "include"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = getAccessToken();

  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,

      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
