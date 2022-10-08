import jwt from "jsonwebtoken";
import { User } from "./entity/User";

export const createAccessToken = (user: User): string => {
  return jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (user: User): string => {
  return jwt.sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "1y",
    }
  );
};

export const revokeRefreshTokenForUser = async (userId: number) => {
  await User.getRepository().increment({ id: userId }, "tokenVersion", 1);
};
