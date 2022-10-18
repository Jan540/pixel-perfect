import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { MyContext, Payload } from "../types";
import { verify } from "jsonwebtoken";

export const isAuth: Middleware<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error("not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    context.payload = verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as Payload;
  } catch (err) {
    console.log(err);
    throw new Error("not authenticated");
  }

  return next();
};
