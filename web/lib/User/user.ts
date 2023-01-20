export type TUser = {
  email: string;
  username: string;
  userId: string;
  role: string;
};

export const defaultUser: TUser = {
  email: "",
  userId: "",
  username: "",
  role: "",
};
