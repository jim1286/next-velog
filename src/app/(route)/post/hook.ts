import { PostLoginRequest } from "@/http/request/auth.request";
import { setUser } from "@/redux/features";
import { AuthService } from "@/service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useModal = () => {
  const dispatch = useDispatch();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const signInMutation = useMutation({
    mutationFn: AuthService.postLogin,
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const signUpMutation = useMutation({
    mutationFn: AuthService.postLogin,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const handleCloseSignIn = () => {
    setIsSignInOpen(false);
  };

  const handleSignIn = async (params: PostLoginRequest) => {
    signInMutation.mutate(params);
  };

  const handleOpenSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleSingUp = () => {
    signUpMutation.mutate;
  };

  return {
    isSignInOpen,
    isSignUpOpen,
    handleOpenSignIn,
    handleCloseSignIn,
    handleSignIn,
    handleOpenSignUp,
    handleCloseSignUp,
    handleSingUp,
  };
};
