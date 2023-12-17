import { LoginValidEnum } from "@/enums";

export interface LoginFormType {
  userName: string;
  password: string;
}

export interface LoginFormValidateType {
  name?: LoginValidEnum;
  userName: LoginValidEnum;
  password: LoginValidEnum;
}
