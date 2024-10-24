import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../service/authService";

// interface UpdatePasswordProps {
//   userId: string;
//   token: string;
//   newPassword: string;
// }

export const useUpdatePassword = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const updatePassword = async (
    userId: string,
    newPassword: string,
    token: string
  ) => {
    try {
      await AuthService.updatePassword(userId, newPassword, token);
      // navigate(`/home/${userId}`);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message|| "Failed to update password");
      }
    }
  };
  return {
    updatePassword,
    error,
  };
};
