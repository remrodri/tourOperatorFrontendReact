// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./features/personal/context/UserContext";
import { RoleProvider } from "./features/personal/context/RoleContext";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       root: {
  //         paddingLeft: '1rem',
  //         paddingRight: '3rem',
  //       },
  //     },
  //   },
  // },
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RoleProvider>
          <UserProvider>
            <RouterProvider router={AppRouter} />
          </UserProvider>
        </RoleProvider>
      </AuthProvider>
    </ThemeProvider>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR;lkj
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
