import { LoginValidEnum } from "@/enums";
import { LoginFormValidateType } from "@/interface";
import { useEffect, useState } from "react";

export const useLoginForm = () => {
  const validate = useValidate();
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });
  const [formValidate, setFormValidate] = useState<LoginFormValidateType>({
    email: LoginValidEnum.NULL,
    password: LoginValidEnum.NULL,
  });

  useEffect(() => {
    const newFormValidate = { ...formValidate };

    Object.keys(formValidate).forEach((key, index) => {
      validate(key, Object.values(formInfo)[index], newFormValidate);
    });

    setFormValidate(newFormValidate);
  }, [formInfo]);

  const handleInputChange = (key: string, value: string | boolean) => {
    setFormInfo({
      ...formInfo,
      [key]: value,
    });
  };

  return { formInfo, formValidate, handleInputChange };
};

const useValidate = () => {
  const checkSpace = (str: string) => {
    if (!str) {
      return LoginValidEnum.NULL;
    }

    if (str.search(/\s/) !== -1) {
      return LoginValidEnum.SPACE;
    }

    return LoginValidEnum.VALID;
  };

  const validate = (
    key: string,
    value: string,
    newFormValidate: LoginFormValidateType
  ) => {
    switch (key) {
      case "email":
      case "password": {
        newFormValidate[key] = checkSpace(value);
        break;
      }
    }
  };

  return validate;
};
