import { DashboardLayout, PageContainer } from "@toolpad/core";
import { Outlet } from "react-router-dom";
// import "./mainLayout.css"
// import imgPersonal from "../../assets/images/personalBackground.webp";

export default function Layout() {
  return (
    <DashboardLayout
      sx={{
        // minHeight: {
        //     sm:'100dvh'
        //   },
        // height:"100dvh",
        // minHeight: "100dvh",
        // maxWidth: "100%",
        // backgroundImage: `url(${imgPersonal})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // display: "flex",
        // minHeight: "100dvh",
        // display: "flex",
        // justifyContent: "center",
        // alignItems:"center"
      }}
    >
      <PageContainer
        maxWidth={false}
        sx={{
          height: "100dvh",
          // height: {
          //   // xs:"100%",
          //   // md: "100dvh",
          //   // lg: "100dvh",
          //   // xl:"100dvh"
          // },
          display: "flex",
          p: "0",
          // justifyItems: "center",
          // alignItems:"center",
          // display: {
          //   xs: "flex",
          //   sm: "flex",
          // },
          // width:"100dvh",
          ".MuiBreadcrumbs-root": {
            // minWidth: "100%", // Hace que el PageContainer ocupe todo el ancho del DashboardLayout
            // background: "rgba(138, 138, 138, 0.2)",
            // borderRadius: "0.5rem",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            // backdropFilter: "blur(5px)",
            // border: "1px solid rgba(138, 138, 138, 0.3)",
            // padding: "0 0 0 1rem",
            // borderBottom:'0'
          },
          ".css-lc31tn": {
            // width:'100rem',
            // background: "rgba(138, 138, 138, 0.2)",
            // borderRadius: "0.5rem",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            // backdropFilter: "blur(5px)",
            // border: "1px solid rgba(138, 138, 138, 0.3)",
            // padding: "0 0 0 1rem",
            // borderTop:'none',
            // margin:'8'
          },

          ".css-lhpdre-MuiStack-root": {
            display: "flex",
            // p: "0",

            // ml: '-2.3rem',
            // mt: '0',
            // mb:'0',

            boxSizing: "border-box",
            background: "rgba(4, 4, 4, 0.2)",
            borderRadius: "1rem",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(4, 4, 4, 0.3)",
            // padding: "0 0 1rem 0rem",
            width: "100%",
            margin: "0",
            // padding: "0",
          },
          // "MuiStack-root css-lhpdre-MuiStack-root": {
          //   background: "rgba(138, 138, 138, 0.2)",
          //   borderRadius: "0.5rem",
          //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(5px)",
          //   border: "1px solid rgba(138, 138, 138, 0.3)",
          //   padding: "0 0 0 1rem",
          // },
          // m: 0, // Remueve cualquier margen
          // p: 0, // Remueve cualquier padding
          "MuiContainer-root css-gehdse-MuiContainer-root": {},
        }}
      >
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
