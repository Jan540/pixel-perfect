import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";
import { UsernamePasswordInput, UserResponse } from "./userTypes";
import bcrypt from "bcrypt";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  User() {
    return User.find();
  }

  @Mutation(() => UserResponse)
  async register(@Arg("options") options: UsernamePasswordInput) {
    const errors = await validateNewUser(options.email, options.username, options.password);
    if (errors) return { errors };

    const hashedPassword = await bcrypt.hash(options.password, 10);

    const user = await User.create({
      email: options.email,
      username: options.username,
      password: hashedPassword,
    });

    await user.save();

    return { user };
  }
}

async function validateNewUser(email: string, username: string, password: string) {
  // http://emailregex.com/
  const emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // at least 3 characters long, no _ or . at the beginning / end, no __ or _. or ._ or .. inside
  const usernameRegex: RegExp = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

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
