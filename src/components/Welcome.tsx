import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { EmbedYouTube } from "./EmbedYouTube";

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
import albumTimeI from "../music/sources/wintersun/albumTimeI";
import { timePackage, timePackageVideo } from "../music/misc";
import albumTheForestSeasons from "../music/sources/wintersun/albumTheForestSeasons";
import { forestPackage } from "../music/misc";

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
        between you and Wintersun, because it will enrich your life, and because{" "}
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
      <Typography variant="body1" align="justify">
        Please consider supporting Wintersun by contributing to{" "}
        <a href={timePackage.toString()} target="_blank">
          their crowdfunding campaign
        </a>
        , and you will receive tons of exclusive digital goodies! This is the
        best possible way to help the band make music right now, and it is only
        available for a short time, so grab it now! :)
      </Typography>
      <EmbedYouTube video={timePackageVideo} />
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
        talents on full display. These albums remain pinnacles of exuberant and
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
        unappealing choice. Among other things, he had felt pressured by an
        unrealistic deadline for realizing his vision (ironically, time is
        exactly what he would lack in a professional studio), and those
        conditions had ultimately left him unhappy with Wintersun's debut. It
        had been a compromise, and this time around he was in no mood to
        compromise on his vision.
      </Typography>
      <Typography variant="body1" align="justify"></Typography>
      <Typography variant="h5" align="center">
        Time I
      </Typography>
      <Typography variant="body1" align="justify">
        Having struggled for years to achieve his vision for Time, Jari became
        more amenable to compromise, and struck a deal with with Wintersun's
        label: the label would afford the band some additional support, and
        Wintersun would release an album and go on tour. The album was a
        regretful amputation of Time, featuring but a portion of Time with three
        tracks (five if you count intros separately) completed as possible given
        the circumstances, under the title of{" "}
        <a href={albumTimeI.wiki.toString()} target="_blank">
          {albumTimeI.title}
        </a>{" "}
        . The album was a heavily criticized success, and although the release
        and tour was beneficial, Jari was once more dissatisfied with the result
        having fallen short of his vision for Wintersun.
      </Typography>
      <Typography variant="body1" align="justify"></Typography>
      <Typography variant="h5" align="center">
        Definition of Insanity
      </Typography>
      <Typography variant="body1" align="justify">
        For a couple of years, Jari continued working on the remaining portion
        of Time, now titled Time II, but his efforts and resources remained
        insufficient to achieve the result he wanted. He'd gone down this path
        before, each time dissatisfied with the result, and the handful of
        Wintersun albums already underway would prove just as impossible
        (although working on those had helped progress Time). He was
        experiencing burnout, so he decided enough was enough, and put his work
        on Time II on hold. Something would need to change for Wintersun to
        continue. Jari concluded the only way to achieve his vision for
        Wintersun was to have a professional studio of his own, but that would
        require funds the band did not have.
      </Typography>
      <Typography variant="h5" align="center">
        The Forest Seasons & Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        At the time, internet crowdfunding had become a popular method of
        funding, and Jari saw an opportunity: if Wintersun used its current
        resources to make digital content, and if a fraction of Wintersun's fans
        purchased it for a modest amount via a crowdfunding campaign, Wintersun
        could afford to build their studio after only three campaigns.
      </Typography>
      <Typography variant="body1" align="justify">
        With that in mind, Wintersun recorded and produced an album that can be
        considered a detour from the true Wintersun vision:{" "}
        <a href={albumTheForestSeasons.wiki.toString()} target="_blank">
          {albumTheForestSeasons.title}
        </a>
        . The label agreed to publish the album as normal while permitting
        Wintersun the sale of digital copies, and{" "}
        <a href={forestPackage.toString()} target="_blank">
          The Forest Package
        </a> was born: a collection of digital goodies including a live album, prior releases, the titular album, and more!
        Its sale via crowdfunding platform IndieGoGo was wildly successful, blowing past the "third of studio funding" goal in the first day, and not concluding before achieving the second third as well. Things were looking very positive: Wintersun might achieve their ultimate goal with but one more campaign!
      </Typography>
      <Typography variant="h5" align="center">
        Time II & Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        Although the crowdfunding funds weren't sufficient to complete the Wintersun studio, Jari put those funds to work rather than have them sit around depreciating in value.
      </Typography>
      <Typography variant="h4" align="center">
        About Me
      </Typography>
      <Typography variant="body1" align="justify">
        I'm{" "}
        <a href="https://www.linkedin.com/in/ragnarenglish/" target="_blank">
          Ragnar English
        </a>{" "}
        and I care an awful lot about music. My motivation for making this
        project is altruistic because you are missing out if you are not
        listening to Wintersun, and the more people listen to Wintersun, the
        more likely we are to see more Wintersun music.(and I hope to convince
        you they contain some of the most incredible music you will ever hear)
      </Typography>
    </Box>
  );
}
