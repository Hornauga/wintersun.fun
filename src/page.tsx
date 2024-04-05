import {
  Button,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Container,
} from "@mui/material";

import { WelcomePage } from "./pageWelcome.tsx";
import { FiltersPage } from "./pageFilters.tsx";
import { ResultsPage } from "./pageResults.tsx";

export type PageName = "welcome" | "filters" | "results";

export function Page({
  pageName,
  navigate,
}: {
  pageName: PageName;
  navigate: (pageName: PageName) => void;
}) {
  var foo;
  if (pageName === "welcome") {
    foo = <WelcomePage />;
  } else if (pageName === "filters") {
    foo = <FiltersPage />;
  } else if (pageName === "results") {
    foo = <ResultsPage />;
  }
  return (
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
              <Typography variant="h4">Wintersun.fun</Typography>
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
      {foo}
    </Container>
  );
}
