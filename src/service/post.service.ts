import api from "./api.service";
import { DeletePostRequest, GetPostAllResponse, GetPostResponse } from "@/http";
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

export const deletePost = async (params: DeletePostRequest): Promise<any> => {
  const uri = `${POST_URI}/${params.postId}/${params.userId}`;
  const res: AxiosResponse = await api.delete(uri);

  return res.data;
};
