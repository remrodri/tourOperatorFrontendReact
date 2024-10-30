import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { User } from "../types/User";
import { userService } from "../service/userService";

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  registerUser: (userData: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        setError("No token found");
        setLoading(false);
        return;
      }
      try {
        const userList = (await userService.getUsers(token)).data;
        console.log("userList::: ", userList);
        setUsers(userList);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError("Failed to fetch users");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  const registerUser = async (userData: Partial<User>) => {
    try {
      const newUser = await userService.registerUser(userData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Falla al registrar nuevo Usuario");
      }
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, error, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const UseUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
