import React from "react";
import Welcome from "../../../../../../public/welcome.svg";
import Image from "next/image";
import { useLoginForm } from "./hook";
import { PostLoginRequest } from "@/http/request/auth.request";

type Props = {
  onLogin: (formInfo: PostLoginRequest) => void;
};

const LoginModalBody = ({ onLogin }: Props) => {
  const { formInfo, formValidate, handleInputChange } = useLoginForm();
  const disableSubmit = Object.values(formValidate).some(
    (validate) => validate !== "valid"
  );

  return (
    <div className="flex flex-row items-center gap-2">
      <Image width={168} height={108} src={Welcome} alt="Welcome to Velog" />
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          value={formInfo.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="flex-grow border-2 border-velogauthgray-100 p-2 mb-2"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={formInfo.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          className="flex-grow border-2 border-velogauthgray-100 p-2"
        />
      </div>
      <button
        disabled={disableSubmit}
        onClick={() => onLogin(formInfo)}
        className="w-14 h-24 bg-lime-500 text-cyan-50 disabled:opacity-25"
      >
        로그인
      </button>
    </div>
  );
};

export default LoginModalBody;
