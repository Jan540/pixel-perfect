import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./User/acesstoken";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const uploadLink = createUploadLink({
  uri: "http://localhost:5107/graphql",
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const uploadAuthLink = authLink.concat(uploadLink);

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: "ws://localhost:5107/graphql",
        })
      )
    : null;

const link =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        uploadAuthLink
      )
    : uploadAuthLink;

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
