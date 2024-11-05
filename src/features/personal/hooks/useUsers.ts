import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { userService } from "../service/userService";
import { User } from "../types/User";
// import { useNavigate, useParams } from "react-router-dom";
// import { showToast } from "../../../shared/toast";

export const useUsers = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // const navigate = useNavigate();
  // const { userId } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }
      try {
        const userList = await userService.getUsers(token);
        // console.log("userList::: ", userList);
        setUsers(userList.data);
        
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Error al obtener los usuarios");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  return { users, loading, error };
};
