import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Jari,
  Kai,
  Teemu,
  Jukka,
  Ensiferum,
  Wintersun,
  Nightwish,
  Megadeth,
} from "../music/artists";
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
        between you and Wintersun, because your life will be better for it, and
        because{" "}
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
        is a vocalist, guitarist, composer, and producer, who has dedicated
        their life to realizing his vision of music. He rose to prominence with{" "}
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
        During his time with Ensiferum, Jari continued establishing his personal
        creative outlet under the name{" "}
        <a href={Wintersun.wiki.toString()} target="_blank">
          {Wintersun.title}
        </a>
        , intending it as a side project to the already successful Ensiferum.
        Composing all of the music himself, he employed the talents of drummer{" "}
        <a href={Kai.wiki.toString()} target="_blank">
          {Kai.title}
        </a>{" "}
        (who is now also well known as a member of{" "}
        <a href={Nightwish.wiki.toString()} target="_blank">
          {Nightwish.title}
        </a>
        ), recorded a demo, landed a record deal, and scheduled a recording
        session for Wintersun's debut album at a recording studio.
        Unfortunately, this session would end up clashing with Ensiferum's tour
        dates, so to make Wintersun a reality, Jari was forced to part ways with
        Ensiferum despite his wish to remain.
      </Typography>
      <Typography variant="h5" align="center">
        Early Wintersun
      </Typography>
      <Typography variant="body1" align="justify">
        With Kai on drums and Jari on everything else, they headed to the studio
        to record Wintersun's self-titled debut album{" "}
        <a href={albumWintersun.wiki.toString()} target="_blank">
          {albumWintersun.title}
        </a>
        . For the first time ever, the world was permitted a taste of
        Wintersun's vision: an insane wall of sound with tight heavy guitars,
        massive bass and drums, and a universe forged by synthesizers, samples,
        and orchestration, all emerging in perfect harmony as controlled chaos
        (to paraphrase Jari). It was an instant classic.
      </Typography>
      <Typography variant="body1" align="justify">
        With new members{" "}
        <a href={Jukka.wiki.toString()} target="_blank">
          {Jukka.title}
        </a>{" "}
        (who is now also well known as a member of{" "}
        <a href={Nightwish.wiki.toString()} target="_blank">
          {Nightwish.title}
        </a>
        ) on bass and{" "}
        <a href={Teemu.wiki.toString()} target="_blank">
          {Teemu.title}
        </a>{" "}
        (who is now also well known as a member of{" "}
        <a href={Megadeth.wiki.toString()} target="_blank">
          {Megadeth.title}
        </a>
        ) on guitar, Wintersun's current lineup toured the world and did as
        successful bands do: start working on new material.
      </Typography>
      <Typography variant="h5" align="center">
        The TIME Saga Begins
      </Typography>
      <Typography variant="body1" align="justify">
        Shortly after the success of the debut, Wintersun announced a sophomore
        album in the works: Time. Originally slated for release a couple of
        years after their debut, the name would prove prophetic, taunting fans
        and artist alike as the album flew past its initial release despite
        recording being completed, and continued eluding release for years to
        come. It became a meme in the metal community, synonymous with hell
        freezing over, and many grew frustrated.
      </Typography>
      <Typography variant="body1" align="justify">
        Time's delay was caused by a lack of resources. Jari was making music at
        home where he struggled to forge his vision of Wintersun's intricate
        sound. A professional studio would have had the required resources, but
        Jari's prior recording experiences in rented spaces made this an
        unappealing choice; among other things, he had felt pressured by an unrealistic deadline for realizing his vision.
        Ironically, time is exactly what he would lack in a professional studio.
        Such conditions had ultimately left him unhappy with Wintersun's debut. It had been a comprimise, and this time around he was
        in no mood to compromise on his vision.
      </Typography>
      <Typography variant="body1" align="justify">
      </Typography>
      <Typography variant="h5" align="center">
        The Forest Package Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        Talk about TFS crowdfunding and whatnot. 2014 burnout and no way to
        progress towards the vision with the sound. More projects piling up on
        the backburner, and they'll require so much as well... how about we do a
        side project, we record an album to publish, an album we can accomplish
        with our current equipment, wrap it up with digital goodies, sell it to
        our fans, do this whole process three times, and then we can invest in a
        studio!
      </Typography>
      <Typography variant="h5" align="center">
        The Time Package Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        Talk about the current crowdfunding.
      </Typography>
      <Typography variant="h4" align="center">
        About Me
      </Typography>
      <Typography variant="body1" align="justify">
        I'm{" "}
        <a href="https://www.linkedin.com/in/ragnarenglish/">Ragnar English</a>{" "}
        and I care an awful lot about music. My motivation for making this
        project is altruistic because you are missing out if you are not
        listening to Wintersun, and the more people listen to Wintersun, the
        more likely we are to see more Wintersun music.(and I hope to convince
        you they contain some of the most incredible music you will ever hear)
      </Typography>
    </Box>
  );
}
