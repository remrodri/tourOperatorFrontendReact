import { useState } from "react";
import { AuthService } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { TokenService } from "../service/tokenService";

interface LoginValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (values: LoginValues) => {
    try {
      const response = await AuthService.login(values);
      console.log('response::: ', response);
      const token = response.token;
      TokenService.saveToken(token);
      if (response.user.firstLogin === true) {
        navigate("/first-login");
      }
      await AuthService.login(values);
      //manejar el redireccionamiento o estado de login exitoso
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "login failed");
      } else {
        setError("login failed");
      }
    }
  };
  return { login, error };
};
