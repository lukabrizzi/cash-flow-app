import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Root from "./Root.tsx";
import { customTheme } from "./theme.ts";

function App() {
  const theme = createTheme(customTheme);

  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
