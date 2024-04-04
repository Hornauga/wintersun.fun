import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";
import { useState } from "react";
import { indigo, purple } from "@mui/material/colors";
import { Page, PageName } from "./pages";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  // https://mui.com/material-ui/customization/theming/
  // https://mui.com/material-ui/customization/color/
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: purple,
  },
});

function App() {
  const [pageName, setPageName] = useState<PageName>("welcome");
  function navigate(pageName: PageName) {
    setPageName(pageName);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container maxWidth="sm">
        <Page pageName={pageName} navigate={navigate}></Page>
      </Container>
    </ThemeProvider>
  );
}

export default App;
