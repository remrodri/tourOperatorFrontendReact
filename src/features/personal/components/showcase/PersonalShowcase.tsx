import { Box} from "@mui/material";
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
          display: "flex",
          width: "100%",
          // height:"76.6dvh"
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          // width: {
          //   xs: "30rem",
          // },
          height: {
            xs: "77dvh",
            sm: "100%",
          },
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            justifyContent:"center"
          }}
        >
          <Typography>Personal Showcase</Typography>
        </Box> */}
        <Box
          sx={{
            padding: "1rem",
            height: {
              xs: "76.5dvh",
              // sm: "77dvh",
            },
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              display: "flex",
              width: {
                // xs: "35rem",
              },
              height: {
                xs: "100%",
                sm:"100%"
              },
              // flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              // alignItems: "flex-start",
              alignContent: "flex-start",
              gap: "1rem",
              overflowY: "auto",
              // background:"#fafafa",
              paddingTop: "2rem",
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            {users.map((user, index) => (
              <PersonalCard key={index} user={user} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default personalShowCase;
