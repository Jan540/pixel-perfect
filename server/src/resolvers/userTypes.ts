import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  accessToken?: string;
}

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  accessToken?: string;
}

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
