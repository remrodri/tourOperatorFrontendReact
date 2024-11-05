import { useEffect, useState } from "react";
import { roleService } from "../service/roleService";
import { useAuth } from "../../../context/AuthContext";

interface Role {
  id: string;
  name: string;
}

export const UseRoles = () => {
  const { token } = useAuth();
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoles = async () => {
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }
      try {
        const response = await roleService.getRoles(token);
        // console.log("response::: ", response.data);
        setRoles(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Error al cargar roles");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRoles();
  }, [token]);
  
  return {roles,loading,error}
};
