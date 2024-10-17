import axiosInstance from "../../../api/axiosConfig";

interface LoginRequest{
  email: string;
  password: string;
}

export const AuthService = {
  login: async (data: LoginRequest) => {
    const response = await axiosInstance.post("/auth/login", data);
    console.log('response::: ', response);
    //manejar localstorage del token o redireccionamiento aqui.
    return response.data;
  }
}