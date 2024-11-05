import { createContext, useContext, useEffect, useState } from "react";
import { Role } from "../types/Role";
import { useAuth } from "../../../context/AuthContext";
import { roleService } from "../service/roleService";

interface RoleContextType {
  roles: Role[];
  loading: boolean;
  error: string | null;
  // getRoles: () => Promise<Role[]>;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
        const roleList = (await roleService.getRoles(token)).data;
        console.log("roleList::: ", roleList);
        setRoles(roleList);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError("Failed to fetch roles");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRoles();
  }, [token]);

  return (
    <RoleContext.Provider value={{ roles, loading, error }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRoleContext must be used within a RoleProvider");
  }
  return context;
};
