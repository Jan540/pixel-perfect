import { CookieOptions } from "express";

export const __prod__ = process.env.NODE_ENV === "production";
export const USING_APOLLO_STUDIO = true;

export const COOKIE_NAME = "jid";
export const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  sameSite: USING_APOLLO_STUDIO ? "none" : "lax",
  secure: USING_APOLLO_STUDIO || __prod__,
};
