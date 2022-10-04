import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { MyContext } from "./types";

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("graphql: http://localhost:4000/graphql");
  });
};

main();
