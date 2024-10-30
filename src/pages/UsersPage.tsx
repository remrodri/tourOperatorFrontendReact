// import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import img from "../assets/images/PersonalBackground.webp";
import "./style/personalPage.css";
// import { useUserContext } from "../features/personal/context/UserContext";

const PersonalPage: React.FC = () => {
  // const { users, loading, error } = useUserContext();
  return (
    <Box
      sx={{
        // paddingRight:"1rem",
        // m:0
        // minWidth:'90%',
        // maxWidth:'false',
        // minHeight:"78dvh",
        // display:'flex',
        // height: "100%",
        // backgroundImage: `url(${img})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default PersonalPage;