import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { newUserSchema } from "../../validations/newUserSchema";
import { AnyObject } from "yup";
// import "./newPersonal.css";
// import img from "../../../assets/images/personalBackground.webp";

interface Role {
  id: string;
  name: string;
}

interface UserRegistrationFromProps {
  roles: Role[];
  loading: boolean;
  onSubmit: (userData: AnyObject) => void;
  error?: string | null;
}

const RegisterForm: React.FC<UserRegistrationFromProps> = ({
  roles,
  loading,
  onSubmit,
  error,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ci: "",
      roleId: "",
    },
    validationSchema: newUserSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 400,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Registrar usuario
      </Typography>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="Nombre(s)"
        variant="outlined"
        margin="normal"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Apellido(s)"
        variant="outlined"
        margin="normal"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Correo electronico"
        variant="outlined"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.lastName}
        sx={{}}
      />
      <TextField
        fullWidth
        id="ci"
        name="ci"
        label="Cedula de identidad"
        variant="outlined"
        margin="normal"
        value={formik.values.ci}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.ci)}
        helperText={formik.touched.ci && formik.errors.ci}
      />
      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Celular"
        variant="outlined"
        margin="normal"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.ci && formik.errors.phone}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="role-label">Rol</InputLabel>
        <Select
          labelId="role-label"
          id="roleId"
          name="roleId"
          value={formik.values.roleId}
          onChange={formik.handleChange}
          error={formik.touched.roleId && Boolean(formik.errors.roleId)}
          label="Rol"
        >
          {roles.map((role) => (
            <MenuItem key={role.id} value={role.id}>
              {role.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {loading && <CircularProgress />}
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        Registrar
      </Button>
    </Box>
  );
};
export default RegisterForm;
