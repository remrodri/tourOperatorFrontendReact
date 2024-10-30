import { DashboardLayout, PageContainer } from "@toolpad/core";
import { Outlet } from "react-router-dom";
// import "./mainLayout.css"
// import imgPersonal from "../../assets/images/personalBackground.webp";

export default function Layout() {
  return (
    <DashboardLayout
      sx={{
        // height:"100dvh",
        // minHeight: "100dvh",
        // maxWidth: "100%",
        // backgroundImage: `url(${imgPersonal})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // display: "flex",
      }}
    >
      <PageContainer
        maxWidth={false}
        sx={{
          // Width: "100%", // Hace que el PageContainer ocupe todo el ancho del DashboardLayout
          height: "100dvh",
          ".MuiBreadcrumbs-root": {
            // background: "rgba(138, 138, 138, 0.2)",
            // borderRadius: "0.5rem",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            // backdropFilter: "blur(5px)",
            // border: "1px solid rgba(138, 138, 138, 0.3)",
            // padding: "0 0 0 1rem",
            // borderBottom:'0'
          },
          ".css-lc31tn": {
            // background: "rgba(138, 138, 138, 0.2)",
            // borderRadius: "0.5rem",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            // backdropFilter: "blur(5px)",
            // border: "1px solid rgba(138, 138, 138, 0.3)",
            // padding: "0 0 0 1rem",
            // borderTop:'none',
          },

          ".css-lhpdre-MuiStack-root": {
            background: "rgba(4, 4, 4, 0.2)",
            borderRadius: "1rem",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(4, 4, 4, 0.3)",
            padding: "0 0 1rem 0rem",
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
        }}
      >
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
