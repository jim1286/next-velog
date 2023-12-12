import { PostLoginRequest } from "@/http/request/auth.request";
import { AuthService } from "@/service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loginMutation = useMutation({
    mutationFn: AuthService.postLogin,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = async (params: PostLoginRequest) => {
    loginMutation.mutate(params);
  };

  return { isOpen, handleOpen, handleClose, handleLogin };
};
