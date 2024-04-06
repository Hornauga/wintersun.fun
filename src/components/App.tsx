import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import { blue, indigo } from "@mui/material/colors";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Button,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Container,
} from "@mui/material";

import { WelcomePage } from "./Welcome.tsx";
import { FiltersPage } from "./Filters.tsx";
import { ResultsPage } from "./Results.tsx";

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

type PageName = "welcome" | "filters" | "results";

export default function App() {
  const [pageName, setPageName] = useState<PageName>("welcome");

  function navigate(pageName: PageName) {
    setPageName(pageName);
  }

  var page;
  if (pageName === "welcome") {
    page = <WelcomePage />;
  } else if (pageName === "filters") {
    page = <FiltersPage />;
  } else if (pageName === "results") {
    page = <ResultsPage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Container maxWidth="sm" style={{ height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  disabled={pageName === "welcome"}
                  sx={{ width: 100 }}
                  onClick={() => navigate("welcome")}
                >
                  About
                </Button>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography variant="h4" margin="none">
                  Wintersun.fun
                </Typography>
              </Box>
              <Box
                sx={{ display: { xs: "flex", sm: "none" }, maxHeight: "100%" }}
              >
                <img
                  src="icons/wintersun.png"
                  alt="Wintersun.fun (Wintersun logo)"
                  style={{ maxHeight: "48px" }}
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ width: 100 }}
                  onClick={() =>
                    navigate(pageName === "filters" ? "results" : "filters")
                  }
                >
                  {pageName === "filters" ? "Go!" : "Filters"}
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {page}
        <Box minHeight="32px"></Box>
      </Container>
    </ThemeProvider>
  );
}
