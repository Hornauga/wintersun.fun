import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Jari, Kai, Ensiferum, Wintersun, Nightwish } from "../music/artists";
import albumEnsiferum from "../music/sources/ensiferum/albumEnsiferum";
import albumIron from "../music/sources/ensiferum/albumIron";
import albumWintersun from "../music/sources/wintersun/albumWintersun";
import { timePackage } from "../music/misc";

export default function Welcome() {
  return (
    <Box>
      <Typography variant="h4" align="center">
        TL;DR
      </Typography>
      <Typography variant="body1" align="justify">
        The band{" "}
        <a href={Wintersun.wiki.toString()} target="_blank">
          {Wintersun.title}
        </a>{" "}
        is how{" "}
        <a href={Jari.wiki.toString()} target="_blank">
          {Jari.title}
        </a>{" "}
        makes music today. The purpose of this project is to bridge the gap
        between you and Wintersun, because your life will be better for it, and because{" "}
        <a href={timePackage.toString()} target="_blank">
          more Wintersun listeners means more Wintersun music
        </a>
        !
      </Typography>
      <Typography variant="body1" align="justify">
        Press <strong>FILTERS</strong> (top right) and dial in your musical
        preferences to receive a bespoke introduction to (nearly all of) the
        music Jari has been involved in making over the years.
      </Typography>
      <Typography variant="h4" align="center">
        Abridged Wintersun History
      </Typography>
      <Typography variant="h5" align="center">
        Origin
      </Typography>
      <Typography variant="body1" align="justify">
        <a href={Jari.wiki.toString()} target="_blank">
          {Jari.title}
        </a>{" "}
        is a musician who rose to prominence with{" "}
        <a href={Ensiferum.wiki.toString()} target="_blank">
          {Ensiferum.title}
        </a>{" "}
        when their self-titled debut album{" "}
        <a href={albumEnsiferum.wiki.toString()} target="_blank">
          {albumEnsiferum.title}
        </a>{" "}
        and sophomore album{" "}
        <a href={albumIron.wiki.toString()} target="_blank">
          {albumIron.title}
        </a>{" "}
        put his multifaceted vocal prowess, guitar virtuosity, and songwriting
        talents on full display. These albums remain pinnacles of exhuberant and
        powerful folk metal and its adjacent genres.
      </Typography>
      <Typography variant="body1" align="justify">
        During this time, Jari continued establishing his personal creative
        outlet under the name{" "}
        <a href={Wintersun.wiki.toString()} target="_blank">
          {Wintersun.title}
        </a>
        , now intending it as a side project to the already successful
        Ensiferum. Composing all of the music himself, he employed the talents
        of drummer{" "}
        <a href={Kai.wiki.toString()} target="_blank">
          {Kai.title}
        </a>{" "}
        (who is now also well known as a member
        of{" "}
        <a href={Nightwish.wiki.toString()} target="_blank">
          {Nightwish.title}
        </a>
        ), recorded a demo, landed a record deal, and scheduled a recording session for Wintersun's debut album at a professional studio.
        Unfortunately, this recording session would end up clashing with Ensiferum's tour dates, forcing Jari to part ways with Ensiferum despite his wishes.
      </Typography>
      <Typography variant="h5" align="center">
        Early Wintersun
      </Typography>
      <Typography variant="body1" align="justify">
        when their self-titled debut album{" "}
        <a href={albumEnsiferum.wiki.toString()} target="_blank">
          {albumEnsiferum.title}
        </a>{" "}
        (and I hope to convince you they contain some of the most incredible
        music you will ever hear). He is a vocalist, guitarist, composer, and
        producer, unparallelled in many ways, dedicating their life to making
        the best music they can.
      </Typography>
      <Typography variant="h4" align="center">
        About
      </Typography>
      <Typography variant="body1" align="justify">
        My motivation for making this project is altruistic because you are
        missing out if you are not listening to Wintersun, and the more people
        listen to Wintersun, the more likely we are to see more Wintersun music.
      </Typography>
    </Box>
  );
}
