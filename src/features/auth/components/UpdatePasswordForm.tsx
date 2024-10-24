import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUpdatePassword } from "../hooks/useUpdatePassword";
import { updatePasswordSchema } from "../validations/updatePasswordSchema";
import { Button } from "@mui/material";

interface UpdatePasswordFormProps {
  userId: string;
  token: string;
}

export const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({
  userId,
  token,
}) => {
  const { updatePassword, error } = useUpdatePassword();

  return (
    <Formik
      initialValues={{ newPassword: "", confirmPassword: "" }}
      validationSchema={updatePasswordSchema}
      onSubmit={(values, { setSubmitting }) => {
        updatePassword(userId, values.newPassword, token);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Nuevo password</label>
            <Field type="password" name="newPassword" />
            <ErrorMessage name="newPassword" component="div" />
          </div>
          <div>
            <label>Confirma el password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="conrfirmPassword" />
          </div>
          <div>
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Actualizar Password
            </Button>
          </div>
          {error && <div>{error}</div>}
        </Form>
      )}
    </Formik>
  );
};
