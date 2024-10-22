import { useParams } from "react-router-dom";
import { SecurityQuestionsForm } from "../features/securityQuestions/components/SecurityQuestionsForm";
import "./styles/securityQuestionsPage.css"

const SecurityQuestionsPage: React.FC = () => {
  const { userId } = useParams();
  const token = localStorage.getItem("token") ?? "";

  if (!token || !userId) {
    return <div>Error: Missing userId or token</div>;
  }

  return (
    <div className="page-container">
      <h1>Preguntas de seguridad</h1>
      <SecurityQuestionsForm userId={userId} token={token} />
    </div>
  );
};
export default SecurityQuestionsPage;
