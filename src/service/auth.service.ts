import { PostLoginRequest, PostLoginResponse } from "@/http";
import api from "./api.service";
import { AxiosResponse } from "axios";

export const postLogin = async (
  body: PostLoginRequest
): Promise<PostLoginResponse> => {
  const uri = `/login`;
  console.log(body);
  const res: AxiosResponse = await api.post(uri, body);

  return res.data;
};
