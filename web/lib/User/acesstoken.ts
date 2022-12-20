let acessToken: string;

export const setAccessToken = (token: string) => {
  acessToken = token;
}

export const getAccessToken = () => {
  return acessToken;
}