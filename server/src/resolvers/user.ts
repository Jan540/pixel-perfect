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
    if (options.username.length <= 2) {
      return [
        {
          field: "username",
          message: "username too short :( --> must be greater than 2",
        },
      ];
    }

    if (options.password.length <= 2) {
      return [
        {
          field: "password",
          message: "password too short :( --> must be greater than 2",
        },
      ];
    }

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
