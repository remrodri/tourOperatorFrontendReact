import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/loginForm.css";
import { loginSchema } from "../validations/loginSchema";
import { useLogin } from "../hooks/useLogin";

const LoginForm: React.FC = () => {
  const { login } = useLogin();

  return (
    <div id="main-container">
      <div id="title-container">
        <h1 id="login-title">Iniciar Sesion</h1>
      </div>
      <div id="form-container">
        <Formik initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            login(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" component={"div"}/>
              </div>
              <div>
                <Field name="password" type="password" placeholder="Contraseña" />
                <ErrorMessage name="password" component={"div"}/>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Iniciar Sesion
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginForm;
