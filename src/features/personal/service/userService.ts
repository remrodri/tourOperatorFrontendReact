import axios, { AxiosError } from "axios";
import { User } from "../types/User";

const API_URL = "http://localhost:8080/api/v1/users";
const getUsers = async (
  token: string
): Promise<{
  statusCode: number;
  message: string;
  data: {
    ci: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    role: string;
    firstLogin: boolean;
  }[];
}> => {
  const response = await axios.get<{
    statusCode: number;
    message: string;
    data: {
      ci: string;
      email: string;
      firstName: string;
      id: string;
      lastName: string;
      phone: string;
      role: string;
      firstLogin: boolean;
    }[];
  }>(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log('response::: ', response.data);
  return response.data;
};
const registerUser = async (userData: Partial<User>) => {
  // console.log('userData::: ', userData);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/register",
      userData
    );
    console.log("response::: ", response);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // console.log(error.response);
      return error.response?.data;
    }
  }
};
export const userService = {
  getUsers,
  registerUser,
};
