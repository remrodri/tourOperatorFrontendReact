import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/loginForm.css";
import { loginSchema } from "../validations/loginSchema";
import { useLogin } from "../hooks/useLogin";

const LoginForm: React.FC = () => {
  const { login } = useLogin();

  return (
    <div className="main-container">
      <div className="title-container">
        <h1 className="login-title">Iniciar Sesion</h1>
      </div>
      <div className="info-container">
        <p>
          Debes ingresar tu email y password para acceder al sistema
        </p>
      </div>
      <div className="form-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            login(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="fields-container">
                <div className="field-container">
                  <span>Email</span>
                  <div>
                    <Field
                      className="field-style"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component={"div"} />
                  </div>
                </div>
                <div>
                  <div className="field-container">
                    <span>Password</span>
                    <div>
                      <Field
                        className="field-style"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                      />
                      <ErrorMessage name="password" component={"div"} />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Autenticando..." : "Iniciar Sesion"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="link-container">Olvide mi password</div>
    </div>
  );
};
export default LoginForm;
