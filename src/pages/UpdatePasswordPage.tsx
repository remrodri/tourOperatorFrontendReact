import { useParams } from "react-router-dom";
import { UpdatePasswordForm } from "../features/auth/components/UpdatePasswordForm";

const UpdatePasswordPage: React.FC = () => {
  const { userId } = useParams();
  const token = localStorage.getItem("token") || "";

  if (!token || !userId) {
    return <div>Error: No se encuentra user ID o token</div>;
  }

  return (
    <div>
      <h1>Actualiza tu password</h1>
      <UpdatePasswordForm userId={userId} token={token} />
    </div>
  );
};
export default UpdatePasswordPage;
