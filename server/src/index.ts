import "dotenv/config";
import { ApolloServer, CorsOptions } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { HelloResolver } from "./resolvers/hello";
import { MyContext } from "./types";
import { UserResolver } from "./resolvers/userRsolver";
import cookieParser from "cookie-parser";

const main = async () => {
  await AppDataSource.initialize();

  const app = express();

  app.use(cookieParser());

  // CORS MOMENT TODO: remove this in production
  const externalClientURL = "https://studio.apollographql.com";
  const corsOptions: CorsOptions = {
    origin: new URL(externalClientURL).origin,
    credentials: true,
  };

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: corsOptions });
  app.listen(4000, () => {
    console.log(`🚀 server running on http://localhost:4000/graphql`);
  });
};

main();
