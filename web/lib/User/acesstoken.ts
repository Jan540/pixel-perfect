let acessToken: string = "";

export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
  acessToken = token;
};

export const getAccessToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("accessToken")
    : "";
};
