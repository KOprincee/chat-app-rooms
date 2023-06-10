import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import { AppProvider } from "./utils/context";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/chat/:roomName/:userName", element: <ChatRoom /> },
]);

function App() {
  //Getting the user browser theme setting
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
