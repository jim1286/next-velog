import api from "./api.service";
import { PostLoginRequest, PostLoginResponse } from "@/http";
import { AxiosResponse } from "axios";

const AUTH_URI = "/auth";

export const postLogin = async (
  body: PostLoginRequest
): Promise<PostLoginResponse> => {
  const uri = `${AUTH_URI}/login`;
  const res: AxiosResponse = await api.post(uri, body);

  return res.data;
};
