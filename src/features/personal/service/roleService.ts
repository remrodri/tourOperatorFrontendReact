import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/roles";

const getRoles = async (
  token: string
): Promise<{
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
  }[];
}> => {
  const response = await axios.get<{
    statusCode: number;
    message: string;
    data: {
      id: string;
      name: string;
    }[];
  }>(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log("response::: ", response);
  return response.data;
};
export const roleService = {
  getRoles,
};
