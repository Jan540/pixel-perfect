import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { HelloResolver } from "./resolvers/hello";
import { MyContext } from "./types";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  await AppDataSource.initialize();

  // const user = new User();
  // user.username = "DharMann";
  // user.email = "dharminder.mann@gmail.com";
  // user.password = await bcrypt.hash("dhar", 10);

  // await user.save();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`🚀 server running on http://localhost:4000/graphql`);
  });
};

main();
