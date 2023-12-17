"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useModal } from "./hook";
import { Loading, Modal } from "@/components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthService, TokenService } from "@/service";
import { User } from "@/interface";
import Link from "next/link";
import Tab from "./components/Tab";
import SignInModalBody from "./components/SignInModalBody";
import SignInModalFooter from "./components/SignInModalFooter";
import SignUpModalBody from "./components/SignUpModalBody";
import SignUpModalFooter from "./components/SignUpModalFooter";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathName = usePathname();
  const { isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = TokenService.getToken();

      if (!token) {
        throw new Error("No Token");
      }

      const user: User = await AuthService.getUser();
      return user;
    },
  });
  const {
    isSignInOpen,
    isSignUpOpen,
    handleOpenSignIn,
    handleCloseSignIn,
    handleSignIn,
    handleOpenSignUp,
    handleCloseSignUp,
    handleSignUp,
  } = useModal();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleLogout = async () => {
    TokenService.clear();
    await queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  return (
    <div className="w-screen h-screen px-40 overflow-auto">
      <div>
        <div className="flex text-2xl text-slate-950 p-5 justify-between">
          Belog
          {isError ? (
            <button
              onClick={handleOpenSignIn}
              className="rounded-3xl text-base bg-black text-teal-50 p-2 w-20 text-center"
            >
              로그인
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                href={"/my"}
                className="rounded-3xl text-base bg-black text-teal-50 p-2 w-24 text-center"
              >
                마이페이지
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-3xl text-base bg-black text-teal-50 p-2 w-20 text-center"
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
        <div className="flex">
          <Tab tabRoute="trend" href="/post/trend/week" title="트렌딩" />
          <Tab tabRoute="recent" href="/post/recent" title="최신" />
          {pathName.includes("trend") && (
            <select
              id="trends"
              defaultValue="week"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              onChange={handleChange}
            >
              <option value="today">오늘</option>
              <option value="week">이번 주</option>
              <option value="month">이번 달</option>
              <option value="year">올해</option>
            </select>
          )}
        </div>
      </div>
      {children}
      <Modal
        open={isSignInOpen}
        title={<div className="text-xl text-slate-950">로그인</div>}
        body={<SignInModalBody onLogin={handleSignIn} />}
        footer={<SignInModalFooter openSignUp={handleOpenSignUp} />}
        activeCloseButton
        onClose={handleCloseSignIn}
      />
      <Modal
        open={isSignUpOpen}
        title={<div className="text-xl text-slate-950">회원가입</div>}
        body={<SignUpModalBody onSignUp={handleSignUp} />}
        footer={<SignUpModalFooter openSignIn={handleCloseSignUp} />}
        activeCloseButton
        onClose={handleCloseSignUp}
      />
    </div>
  );
}
