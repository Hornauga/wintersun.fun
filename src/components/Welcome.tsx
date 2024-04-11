import { Typography, Box } from "@mui/material";
import { loremIpsum } from "../misc";

export default function Welcome() {
  return (
    <Box>
      <Typography variant="h4" align="center">
        TL;DR
      </Typography>
      <Typography variant="body1" align="justify">
        The band{" "}
        <a href="https://en.wikipedia.org/wiki/Wintersun" target="_blank">
          Wintersun
        </a>{" "}
        is how{" "}
        <a
          href="https://en.wikipedia.org/wiki/Jari_M%C3%A4enp%C3%A4%C3%A4"
          target="_blank"
        >
          Jari Mäenpää
        </a>{" "}
        makes music today. The purpose of this website is to bridge the gap
        between you and Wintersun, because more Wintersun listeners means more
        Wintersun music! Wintersun!
      </Typography>
      <Typography variant="body1" align="justify">
        Press <strong>FILTERS</strong> (top right) and dial in your musical
        preferences to receive a bespoke introduction to (nearly all of) the
        music Jari has been involved in making over the years.
      </Typography>
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
        <a href="https://en.wikipedia.org/wiki/Ensiferum">Ensiferum</a>
        {loremIpsum}
      </Typography>
      <Typography variant="h4" align="center">
        So what is up?
      </Typography>
      <Typography variant="body1" align="justify">
        {loremIpsum}
        My motivation for making this website is altruistic because you are
        missing out if you are not listening to Wintersun, and the more people
        listen to Wintersun, the more likely we are to see more Wintersun music.
      </Typography>
    </Box>
  );
}
