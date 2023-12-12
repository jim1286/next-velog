import api from "./api.service";
import { GetPostAllResponse, GetPostResponse } from "@/http";
import { AxiosResponse } from "axios";

const POST_URI = "/post";

export const getPost = async (postId: string): Promise<GetPostResponse> => {
  const uri = `${POST_URI}/${postId}`;
  const res: AxiosResponse = await api.get(uri);

  return res.data;
};

export const getPostAll = async (): Promise<GetPostAllResponse[]> => {
  const uri = `${POST_URI}/all`;
  const res: AxiosResponse = await api.get(uri);

  return res.data;
};
