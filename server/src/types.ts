import { Request, Response } from "express";

export type MyContext = {
  req: Request;
  res: Response;
  payload?: Payload;
};

export type Payload = { userId: number };
