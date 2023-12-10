import { PostLoginRequest } from "@/http/request/auth.request";
import { AuthService } from "@/service";
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = async (params: PostLoginRequest) => {
    try {
      const user = await AuthService.postLogin(params);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return { isOpen, handleOpen, handleClose, handleLogin };
};
