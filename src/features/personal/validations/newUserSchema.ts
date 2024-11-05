import * as Yup from "yup";
export const newUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("El campo es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  lastName: Yup.string()
    .required("El campo es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El campo es requerido"),
  ci: Yup.string()
    .required("El campo es requerido")
    .min(7, "El nombre debe tener al menos 8 caracteres"),
  phone: Yup.string()
    .required("El campo es requerido"),
    // .matches(/^[0-9]+$/, "Solo números"),
  roleId: Yup.string().required("El campo es requerido"),
});
