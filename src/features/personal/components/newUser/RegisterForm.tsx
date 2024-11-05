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
        width: {
          xs: "95%",
          sm: "35rem",
        },
        p: "1rem",
        height: {
          // xs: "79.7dvh",
          // sm: "79.7dvh",
        },
        background: "rgba(0,0,0,0.2)",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 30rem rgba(0,0,0,0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
        
        // maxWidth: 400,
        // background:"white"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", width: "100%",height:"5rem"}}
        >
          Registrar usuario
        </Typography>
        <TextField
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          id="firstName"
          name="firstName"
          label="Nombre(s)"
          variant="outlined"
          // margin="normal"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          id="lastName"
          name="lastName"
          label="Apellido(s)"
          variant="outlined"
          // margin="normal"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          id="email"
          name="email"
          label="Correo electronico"
          variant="outlined"
          // margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.lastName}
        />
        <TextField
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          id="ci"
          name="ci"
          label="Cedula de identidad"
          variant="outlined"
          // margin="normal"
          value={formik.values.ci}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.ci)}
          helperText={formik.touched.ci && formik.errors.ci}
        />
        <TextField
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          id="phone"
          name="phone"
          label="Celular"
          variant="outlined"
          // margin="normal"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.ci && formik.errors.phone}
        />
        <FormControl
          sx={{
            height: "7rem",
          }}
          size="small"
          fullWidth
          // margin="normal"
        >
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
    </Box>
  );
};
export default RegisterForm;
