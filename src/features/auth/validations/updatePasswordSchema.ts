import * as Yup from "yup";
export const updatePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Debe tener almenos 8 caracteres")
    .required("El campo es requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Ambos deben ser iguales")
    .required("Confirma tu password"),
});
