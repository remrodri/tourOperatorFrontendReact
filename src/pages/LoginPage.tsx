import LoginForm from "../features/auth/components/LoginForm";
import "./styles/loginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Bienvenido al sistema</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
