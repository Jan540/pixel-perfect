import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User } from "../entity/User";
import { AuthResponse, UsernamePasswordInput, UserResponse } from "./userTypes";
import bcrypt from "bcrypt";
import { MyContext } from "src/types";
import { COOKIE_NAME, COOKIE_OPTIONS } from "../constants";
import {
  createAccessToken,
  createRefreshToken,
  revokeRefreshTokenForUser,
} from "../auth";
import { isAuth } from "../middleware/isAuth";
import jwt from "jsonwebtoken";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  @UseMiddleware(isAuth)
  User() {
    return User.find();
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<UserResponse> {
    const errors = await this.validateNewUser(
      options.email,
      options.username,
      options.password
    );
    if (errors) return { errors };

    const hashedPassword = await bcrypt.hash(options.password, 12);

    const user = await User.create({
      email: options.email,
      username: options.username,
      password: hashedPassword,
    });

    await user.save();

    return { accessToken: createAccessToken(user) };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "User does not exist",
          },
        ],
      };
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Incorrect password",
          },
        ],
      };
    }

    res.cookie(COOKIE_NAME, createRefreshToken(user), COOKIE_OPTIONS);

    return { accessToken: createAccessToken(user) };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logout(@Ctx() { res, payload }: MyContext) {
    await revokeRefreshTokenForUser(payload!.userId);
    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
    return true;
  }

  @Query(() => AuthResponse, { nullable: true })
  async newAccessToken(@Ctx() { req }: MyContext) {
    const token = req.cookies.jid;

    if (!token) return null;

    let payload: any = null;
    try {
      payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return null;
    }

    // valid token
    const user = await User.findOne({ where: { id: payload.userId } });

    if (!user) return null;
    if (user.tokenVersion !== payload.tokenVersion) return null;

    return { accessToken: createAccessToken(user) };
  }

  private async validateNewUser(
    email: string,
    username: string,
    password: string
  ) {
    // http://emailregex.com/
    const emailRegex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // at least 3 characters long, no _ or . at the beginning / end, no __ or _. or ._ or .. inside
    const usernameRegex: RegExp =
      /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const passwordRegex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const userEmail = await User.findOne({ where: { email } });
    const userName = await User.findOne({ where: { username } });

    if (userEmail) {
      return [
        {
          field: "email",
          message: "email already taken",
        },
      ];
    }

    if (!emailRegex.test(email)) {
      return [
        {
          field: "email",
          message: "invalid email",
        },
      ];
    }

    if (userName) {
      return [
        {
          field: "username",
          message: "username already taken",
        },
      ];
    }

    if (!usernameRegex.test(username)) {
      return [
        {
          field: "username",
          message: `username does not meet requirements`,
        },
      ];
    }

    if (!passwordRegex.test(password)) {
      return [
        {
          field: "password",
          message: `password does not meet requirements`,
        },
      ];
    }

    return null;
  }
}
