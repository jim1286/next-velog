import { LoginValidEnum } from "@/enums";

export interface LoginFormType {
  email: string;
  password: string;
}

export interface LoginFormValidateType {
  email: LoginValidEnum;
  password: LoginValidEnum;
}
