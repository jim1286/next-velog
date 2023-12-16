import { JwtTokens } from "@/interface";

export const set = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const get = (key: string) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return undefined;
  }

  return value;
};

export const setToken = (tokens: JwtTokens) => {
  set("accessToken", tokens.accessToken);
  set("refreshToken", tokens.refreshToken);
};

export const getToken = () => {
  const accessToken = get("accessToken");
  const refreshToken = get("refreshToken");

  if (accessToken && refreshToken) {
    const tokens: JwtTokens = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
    return tokens;
  }

  return undefined;
};

export const clear = () => {
  localStorage.clear();
};
