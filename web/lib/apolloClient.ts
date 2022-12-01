import {
  ApolloClient,
  InMemoryCache,
  from,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { RetryLink } from "@apollo/client/link/retry";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:5107/graphql",
  }),
});

export default client;
