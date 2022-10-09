import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { __prod__ } from "./constants";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "amongus",
  synchronize: true,
  logging: !__prod__,
  entities: [User],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
});
