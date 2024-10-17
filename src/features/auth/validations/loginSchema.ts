import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email es requerido"),
  password: Yup.string()
    .min(6, "Password muy corto")
    .required("Password es requerido"),
});
