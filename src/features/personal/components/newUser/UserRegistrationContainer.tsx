import { AnyObject } from "yup";
import { UseUserContext } from "../../context/UserContext";
// import { UseRoles } from "../../hooks/useRoles";
import RegisterForm from "./RegisterForm";
import { showToast } from "../../../../shared/toast";
import { useNavigate} from "react-router-dom";
import { useRoleContext } from "../../context/RoleContext";

const UserRegistrationContainer: React.FC = () => {
  const { registerUser, error } = UseUserContext();
  // const { loading, error: roleError } = UseRoles();
  const navigate = useNavigate();
  const {roles,loading,error:roleError}=useRoleContext();


  const handleRegisterUser = async (userData: AnyObject) => {
    console.log('userData::: ', userData);
    try {
      const res = await registerUser(userData);
      if (res) {
        navigate(`../showcase`);
      }
      // showToast("success", "Usuario creado satisfactoriamente");
      // alert("registrado")
    } catch (error) {
      showToast("error",`${error}`)
    }
  };
  return (
    <RegisterForm
      roles={roles}
      loading={loading}
      onSubmit={handleRegisterUser}
      error={error || roleError}
    />
  );
};

export default UserRegistrationContainer;
