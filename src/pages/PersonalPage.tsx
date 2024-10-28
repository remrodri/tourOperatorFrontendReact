// import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import img from "../assets/images/personalBackground.webp";
import "./style/personalPage.css"

export default function PersonalPage() {
  return (
    <Box
      sx={{
        // m:0
        // minWidth:'100%',
      // maxWidth:'false',
        // minHeight:"78dvh",
        // backgroundImage: `url(${img})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
      >
      <Outlet />
    </Box>
  );
}
