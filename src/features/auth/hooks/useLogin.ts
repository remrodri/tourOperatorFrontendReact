import { useState } from "react";
import { AuthService } from "../service/authService";

interface LoginValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const login = async (values: LoginValues) => {
    try {
      await AuthService.login(values);
      //manejar el redireccionamiento o estado de login exitoso
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message||"login failed");
      } else {
        setError("login failed");
      }
    }
  };
  return { login, error };
};
