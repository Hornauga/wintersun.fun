import { useRef, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { blue, indigo } from "@mui/material/colors";

import Welcome from "./Welcome.tsx";
import Filters from "./Filters.tsx";
import Results from "./Results.tsx";
import { Song } from "../music/things.tsx";
import {
  recommendation,
  QualityName,
  Preference,
  Preferences,
  makePreferences,
} from "../music/quantify.tsx";

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

type PageID = "welcome" | "filters" | "results";

export default function App() {
  // The results of filtering
  const [currentResult, setCurrentResult] = useState(0);
  var songs = useRef<Song[]>([]);
  var preferenceChanged = useRef<boolean>(true);

  // Filter preference states and their setter
  const [preferences, setPreferences] = useState<Preferences>(makePreferences);
  function setPreference(qualityName: QualityName, preference: Preference) {
    if (preferences[qualityName] === preference) return;
    preferenceChanged.current = true;
    setCurrentResult(0);
    setPreferences({ ...preferences, ...{ [qualityName]: preference } });
  }

  // Page selection
  const [pageID, setPageID] = useState<PageID>("welcome");
  var page;
  if (pageID === "welcome") {
    page = <Welcome />;
  } else if (pageID === "filters") {
    page = <Filters preferences={preferences} setPreference={setPreference} />;
  } else if (pageID === "results") {
    preferenceChanged.current = false;
    songs.current = recommendation(preferences);
    page = (
      <Results
        songs={songs.current}
        currentResult={currentResult}
        setCurrentResult={setCurrentResult}
      />
    );
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
                  disabled={pageID === "welcome"}
                  sx={{ width: 100 }}
                  onClick={() => setPageID("welcome")}
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
                    setPageID(pageID === "filters" ? "results" : "filters")
                  }
                >
                  {pageID === "filters" ? "Go!" : "Filters"}
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {page}
        <Box minHeight="32px">{/* Hidden footer */}</Box>
      </Container>
    </ThemeProvider>
  );
}
