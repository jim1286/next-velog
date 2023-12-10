import React from "react";

type Props = {};

const LoginModalFooter = (props: Props) => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <p className="text-velogauthgreen-100">아직 회원이 아니신가요??</p>
      <button className="text-velogauthgreen-200 font-semibold hover:opacity-80 transition">
        회원가입
      </button>
    </div>
  );
};

export default LoginModalFooter;
