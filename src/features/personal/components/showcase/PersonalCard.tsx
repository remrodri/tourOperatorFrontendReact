import { Box, Typography } from "@mui/material";
import { User } from "../../types/User";
import "./personalCard.css";
import PersonalCardMenu from "./PersonalCardMenu";

interface UserProps {
  user: User;
}

const PersonalCard: React.FC<UserProps> = ({ user }) => {
  return (
    <Box
      sx={{
        // width: "90%",
        width: {
          xs: "30rem",
          sm: "25rem",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // gap: "1rem",
        // height: "5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(4,4,4,0.3)",
        background: "rgba(4,4,4,0.2)",
      }}
    >
      <Box
        sx={{
          // width: "25rem",
          display: "flex",
          // height: "4.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          p: "0 0 0 1.5rem",
        }}
      >
        <Typography variant="body1" className="personal-span">
          {user.role}
        </Typography>
        <PersonalCardMenu
          {...{
            firstName: user.firstName,
            lastName: user.lastName,
            ci: user.ci,
            email: user.email,
            role: user.role,
            phone: user.phone,
          }}
        />
      </Box>
      <Box
        sx={{
          // width: "25rem",
          // width: "80%",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom:'1rem',
          }}
        >
          <Typography variant="body1" className="personal-span">
            Nombre: {user.firstName} {user.lastName}
          </Typography>
          {/* <Typography variant="body1" className="personal-span">
            {user.lastName}
          </Typography> */}
          <Typography variant="body1" className="personal-span">
            Cel: {user.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default PersonalCard;
