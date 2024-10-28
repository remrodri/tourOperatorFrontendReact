// import * as React from "react";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import TextField from "@mui/material/TextField";
// import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";
// import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
// import {
//   DashboardLayout,
//   type SidebarFooterProps,
// } from "@toolpad/core/DashboardLayout";
// import { useDemoRouter } from "@toolpad/core/internal";
import { AppProvider } from "@toolpad/core/react-router-dom";
import type { Navigation } from "@toolpad/core";
// import { Navigation, Outlet } from "react-router-dom";
// import { Navigation } from "@toolpad/core/AppProvider";
import { Outlet, useLocation, useParams } from "react-router-dom";
import login from "../../assets/images/login.webp";
import imgPersonal from "../../assets/images/personalBackground.webp";
import { useEffect, useState } from "react";

const BRANDING = {
  title: "Uso de Toolpad Core",
};

const demoTheme = createTheme({
  // palette: {
  //   background: {
  //     default: "#f5f5f5", // Fondo general de la aplicación
  //     paper: "#212121", // Color de fondo específico para el menú
  //   },
  //   primary: {
  //     main: "#4caf50", // Color principal (afecta algunos botones o links)
  //   },
  //   text: {
  //     primary: "#ffffff", // Color principal de texto (para menús y navbar)
  //     secondary: "#b0bec5", // Color de texto secundario
  //   },
  // },
  typography: {
    fontSize: 23,
  },
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function DemoPageContent({ pathname }: { pathname: string }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// function SidebarFooter({ mini }: SidebarFooterProps) {
//   return (
//     <Typography
//       variant="caption"
//       sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
//     >
//       {mini ? "© MUI" : `© ${new Date().getFullYear()} Made with love by MUI`}
//     </Typography>
//   );
// }

export default function MainLayout() {
  // const router = useDemoRouter("/dashboard");
  const { userId } = useParams();
  const mainRoute = `home/${userId}`;
  const location = useLocation();
  const [backgroundImg, setBackgroundImg] = useState<string>(imgPersonal);

  const backgroundImgs = {
    [`/${mainRoute}/personal/showcase`]: imgPersonal,
    [`/${mainRoute}/personal`]: login,
  }

  useEffect(() => {
    setBackgroundImg(backgroundImgs[location.pathname] || imgPersonal);
    setBackgroundImg(backgroundImgs[location.pathname] || login);
  },[location.pathname])

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Funciones",
    },
    {
      segment: `${mainRoute}/personal`,
      title: "personal",
      icon: <DashboardIcon />,
      children: [
        {
          segment: "showcase",
          title: "showcase",
        },
        {
          segment: "new",
          title: "nuevo",
        },
      ],
    },
    // {
    //   segment: "personal",
    //   title: "Personal",
    //   icon: <ShoppingCartIcon />,
    // },
  ];

  return (
    <AppProvider
      navigation={NAVIGATION}
      // router={router}
      theme={demoTheme}
      branding={BRANDING}
    >
      <div style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <Outlet />
      </div>
      {/* <DashboardLayout
        // sx={{
        //   "& .MuiDrawer-paper": {
        //     // Selecciona específicamente el fondo del drawer (menu lateral)
        //     backgroundColor: demoTheme.palette.background.paper,
        //     color: demoTheme.palette.text.primary,
        //   },
        //   "& .MuiListItem-button": {
        //     // Personaliza los elementos del menú
        //     color: demoTheme.palette.text.secondary,
        //     "&:hover": {
        //       // Color al pasar el cursor sobre el elemento
        //       backgroundColor: demoTheme.palette.primary.light,
        //     },
        //   },
        // }}
        slots={{
          // toolbarActions: Search,
          sidebarFooter: SidebarFooter,
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout> */}
    </AppProvider>
  );
}
