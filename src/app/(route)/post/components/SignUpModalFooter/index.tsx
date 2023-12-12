import React from "react";

type Props = { openSignIn: () => void };

const SignUpModalFooter = ({ openSignIn }: Props) => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <p className="text-velogauthgreen-100">계정이 이미 있으신가요??</p>
      <button className="text-velogauthgreen-200 font-semibold hover:opacity-80 transition" onClick={openSignIn}>
        로그인
      </button>
    </div>
  );
};

export default SignUpModalFooter;
