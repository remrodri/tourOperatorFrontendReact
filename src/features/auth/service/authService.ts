import axios from "axios";
import axiosInstance from "../../../api/axiosConfig";
import { showToast } from "../../../shared/toast";

interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    firstLogin: boolean;
  };
  token: string;
}
interface UpdatePasswordResponse {
  message: string;
}

export const AuthService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await axiosInstance.post("/auth/login", data,{withCredentials:true});
      return response.data.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.status === 401) {
          showToast("error", "Credenciales incorrectas");
        }
        if (error.code === "ERR_NETWORK") {
          showToast("error", "Error interno del servidor");
        }
      }
      throw error;
    }
    // console.log('response::: ', response);

    //manejar localstorage del token o redireccionamiento aqui.
    // const user = response.data.user;
    // console.log('user::: ', user);
    // const token = response.data.token;
    // console.log('token::: ', token);
    // return {user, token};
  },

  updatePassword: async (
    userId: string,
    newPassword: string,
    token: string
  ): Promise<UpdatePasswordResponse> => {
    const response = await axiosInstance.post(
      "/users/update-password",
      { userId: userId, password: newPassword },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("response::: ", response);
    return { message: "Password actualizado correctamente" };
  },
};
