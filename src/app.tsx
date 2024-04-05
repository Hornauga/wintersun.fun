import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import { blue, indigo } from "@mui/material/colors";
import { Page, PageName } from "./page";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = responsiveFontSizes(
  createTheme({
    // https://mui.com/material-ui/customization/theming/
    // https://mui.com/material-ui/customization/color/
    palette: {
      mode: "dark",
      primary: indigo,
      secondary: blue,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: "1rem",
            marginTop: "1rem",
          },
        },
      },
    },
  }),
);

function App() {
  const [pageName, setPageName] = useState<PageName>("welcome");
  function navigate(pageName: PageName) {
    setPageName(pageName);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Page pageName={pageName} navigate={navigate}></Page>
    </ThemeProvider>
  );
}

export default App;
