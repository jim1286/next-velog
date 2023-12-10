import api from "./api.service";
import { GetPostAllResponse } from "@/http";
import { AxiosResponse } from "axios";

const POST_URI = "/post";

export const getPostAll = async (): Promise<GetPostAllResponse[]> => {
  const uri = `${POST_URI}/all`;
  const res: AxiosResponse = await api.get(uri);

  return res.data;
};
