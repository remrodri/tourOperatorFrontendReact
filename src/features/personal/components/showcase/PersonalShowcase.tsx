import { Box, Typography } from "@mui/material";
// import { User } from "../types/User";
import React from "react";
import { UseUserContext } from "../../context/UserContext";
import PersonalCard from "./PersonalCard";

// interface UserShowcaseProps {
//   users: User[];
//   loading: boolean;
//   error: string | null;
// }

const personalShowCase: React.FC = () => {
  const { users, loading, error } = UseUserContext();

  if (loading) return <p>Loading Users...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          width: "100%",
          // height:"76.6dvh"
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography>Personal Showcase</Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            // height:"76.6dvh"
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {users.map((user) => (
            <PersonalCard key={user.id} user={user} />
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default personalShowCase;
