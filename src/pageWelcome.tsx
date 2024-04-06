import { Typography, Box } from "@mui/material";
import { loremIpsum } from "./misc";

export function WelcomePage() {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Hello
      </Typography>
      <Typography variant="body1" align="justify">
        {loremIpsum}
      </Typography>
      <Typography variant="h4" align="center">
        What is Wintersun?
      </Typography>
      <Typography variant="body1" align="justify">
        Wintersun is Jari, and Jari so and so.
        {loremIpsum}
      </Typography>
      <Typography variant="h4" align="center">
        So what is up?
      </Typography>
      <Typography variant="body1" align="justify">
        {loremIpsum}
      </Typography>
    </Box>
  );
}
