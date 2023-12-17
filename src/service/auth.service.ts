import api from "./api.service";
import {
  PostSignInRequest,
  PostSignUpRequest,
  PostSignUpResponse,
  PostSignInResponse,
  GetUserResponse,
} from "@/http";
import { AxiosResponse } from "axios";

const AUTH_URI = "/auth";

export const postSignIn = async (
  body: PostSignInRequest
): Promise<PostSignInResponse> => {
  const uri = `${AUTH_URI}/signin`;
  const res: AxiosResponse = await api.post(uri, body);

  return res.data;
};

export const postSignUp = async (
  body: PostSignUpRequest
): Promise<PostSignUpResponse> => {
  const uri = `${AUTH_URI}/signup`;
  const res: AxiosResponse = await api.post(uri, body);

  return res.data;
};

export const getUser = async (): Promise<GetUserResponse> => {
  const uri = `${AUTH_URI}/user`;
  const res: AxiosResponse = await api.get(uri);

  return res.data;
};
