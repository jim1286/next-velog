import { JwtTokens, User } from "@/interface";

export interface PostSignInResponse extends JwtTokens {}

export interface PostSignUpResponse extends User {}

export interface GetUserResponse extends User {}
