import { PostSignInRequest, PostSignUpRequest } from "@/http";
import { AuthService, TokenService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useModal = () => {
  const queryClient = useQueryClient();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const signInMutation = useMutation({
    mutationFn: AuthService.postSignIn,
    onSuccess: async (data) => {
      TokenService.setToken(data);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      setIsSignInOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const signUpMutation = useMutation({
    mutationFn: AuthService.postSignUp,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      setIsSignUpOpen(false);
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

  const handleSignIn = async (params: PostSignInRequest) => {
    signInMutation.mutate(params);
  };

  const handleOpenSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleSignUp = (params: PostSignUpRequest) => {
    params.name = params.userName;

    console.log(params);
    signUpMutation.mutate(params);
  };

  return {
    isSignInOpen,
    isSignUpOpen,
    handleOpenSignIn,
    handleCloseSignIn,
    handleSignIn,
    handleOpenSignUp,
    handleCloseSignUp,
    handleSignUp,
  };
};
