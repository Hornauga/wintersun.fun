import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EmbedYouTube from "./EmbedYouTube";

import {
  Jari,
  Kai,
  Teemu,
  Jukka,
  Ensiferum,
  Wintersun,
  Nightwish,
  Megadeth,
  Immemorial,
  Arthemesia,
  Cadacross,
  Powerwolf,
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
        What is this?
      </Typography>
      <Typography variant="body1" align="justify">
        This is a tool you can use to discover the music of{" "}
        <a href={Wintersun.wiki.toString()} target="_blank">
          {Wintersun.title}
        </a>
        . Whether you never heard of them, are aware of their work, or have
        attempted to enjoy their work to no avail,{" "}
        <strong>this tool is for YOU</strong>.
      </Typography>
      <Typography variant="h5" align="center">
        How do I use this tool?
      </Typography>
      <Typography variant="body1" align="justify">
        Press <strong>LIKES</strong> (top right) and tell it what kind of music
        you would like to hear. Once you have done that, you will receive song
        recommendations based on your preferences: a bespoke introduction to
        some of the music{" "}
        <a href={Jari.wiki.toString()} target="_blank">
          {Jari.title}
        </a>{" "}
        (the mastermind behind Wintersun) has been involved in making over the
        years.
      </Typography>
      <Typography variant="h5" align="center">
        Why?
      </Typography>
      <Typography variant="body1" align="justify">
        The purpose of this project is to bridge the gap between you and
        Wintersun, because it will enrich your life, and because more Wintersun
        listeners means more Wintersun music! Please consider supporting
        Wintersun by contributing to{" "}
        <a href={timePackage.toString()} target="_blank">
          their crowdfunding campaign
        </a>
        , and you will receive tons of exclusive digital goodies! This is the
        best possible way to help the band make music, and it is only available
        for a short time, so don't hesitate to grab it right now! I promise you
        it will be worth it :)
      </Typography>
      <EmbedYouTube video={timePackageVideo} />
      <Typography variant="h4" align="center">
        The History of Wintersun
      </Typography>
      <Typography variant="body1" align="justify">
        TL;DR: Jari wants to make music. He toiled for years, and people loved
        his music, but it didn't match his ambitious vision. Now, with the
        continued support of Wintersun fans, he is finally capable of making the
        music he always envisioned.
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
        Burnout
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
        </a>{" "}
        was born: a collection of digital goodies including a live album, prior
        releases, the titular album, and more! Its sale via crowdfunding
        platform IndieGoGo was wildly successful, blowing past the "third of
        studio funding" goal in the first day, and not concluding before
        achieving the second third as well. Things were looking very positive:
        Wintersun might achieve their ultimate goal with but one more campaign!
      </Typography>
      <Typography variant="h5" align="center">
        2024: Time II & Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        Although the crowdfunding funds weren't sufficient to complete the
        Wintersun studio, Jari put those funds to work rather than have them sit
        around depreciating in value. He invested the money into equipment and
        facilities which will eventually become part of the Wintersun studio,
        and would make making Wintersun music easier until such time. These
        resources coupled with technological advances meant the production of
        further Wintersun albums could progress, and soon Jari found that he was
        capable of realizing his vision for Time II. Not only that, but he could
        go back and do the same for Time I, finally realizing his original and
        true vision for the Time project, or in fact any Wintersun album.
      </Typography>
      <Typography variant="body1" align="justify">
        With Time I and II both complete and slated for release in August 2024,
        and still wishing to progress towards their goal of having a studio to
        make upcoming albums possible, Wintersun applied the same approach as
        with their previous album and made a new (ongoing!) crowdfunding
        campaign for their latest product:{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>
        ! Not only does this digital package include the definitive versions of
        both Time I and Time II and tons of goodies, but Jari added something
        not a single fan anticipated.
      </Typography>
      <Typography variant="body1" align="justify">
        See, prior to Wintersun's debut, Jari composed and recorded multiple
        demo songs, and even a full fantasy themed demo album which he had
        always hoped to record with Wintersun. Some of the songs had already
        made their way onto the debut album and Time, but some had not, and
        others simply weren't a fit for Wintersun (for example, being "too power
        metal"). But thing is, Wintersun are already working on a few albums to
        follow Time, leaving no time in the near future to make anything of
        these demos. Given this, Jari decided to mix and master ALL of these
        demos and release them as part of the crowdfunding!
      </Typography>
      <Typography variant="body1" align="justify">
        That's where the story is today. Don't miss this amazing package, and
        the rare opportunity to be able to directly support Wintersun's effort
        to produce amazing music!
      </Typography>
      <Typography variant="h4" align="center">
        About
      </Typography>
      <Typography variant="h5" align="center">
        Who made this?
      </Typography>
      <Typography variant="body1" align="justify">
        I did. I am{" "}
        <a href="https://www.linkedin.com/in/ragnarenglish/" target="_blank">
          Ragnar English
        </a>
        . I love Salt Skum and Skyr, my favorite rhetorical device is hyperbole,{" "}
        and I care an awful lot about music, fitness, me(n)tal health, and the
        wellbeing of my fellow humans. If you're interested in the source code,
        you'll find it{" "}
        <a href="https://github.com/Hornauga/wintersun.fun" target="_blank">
          here
        </a>
        .
      </Typography>
      <Typography variant="h5" align="center">
        Why make this?
      </Typography>
      <Typography variant="body1" align="justify">
        My motivation for making this project is in some way altruistic, because
        I believe your life will be enriched for the addition of Wintersun's
        music. Thus, as a pro bono humanitarian metal missionary, I hope to make
        you a Wintersun listener by convincing you Jari has made (and will
        continue to make!) some of the most incredible music you will ever hear.
      </Typography>
      <Typography variant="body1" align="justify">
        In some way my motivation is selfish because I want more Wintersun music
        for myself, and the best way to ensure more Wintersun music is to fund
        Wintersun through crowdfunding donations, so here I am trying to get you
        on board.
      </Typography>
      <Typography variant="h5" align="center">
        How does this work?
      </Typography>
      <Typography variant="body1" align="justify">
        Eeeeeehhhh.... it's not exactly science. I decided on some fairly
        arbitrary qualifiers for music, then listened to and scored each song on
        those. Then, if you tell me you like, say, power metal, I try to use
        those scores to prioritize showing you songs I think you'd like if you
        like power metal. I've simply attempted to encode my recommendation. Who
        knows, maybe I'll implement some improvements another time.
      </Typography>
      <Typography variant="h5" align="center">
        What music is included?
      </Typography>
      <Typography variant="body1" align="justify">
        Most of the readily available Ensiferum and Wintersun work involving
        Jari (and some less so readily available), and any work sufficiently
        featuring him (for example as a guest vocalist for{" "}
        <a href={Powerwolf.wiki.toString()} target="_blank">
          {Powerwolf.title}
        </a>
        , but not his guitar work for{" "}
        <a href={Cadacross.wiki.toString()} target="_blank">
          {Cadacross.title}
        </a>{" "}
        or Tuska20). Not included (yet) is his work on{" "}
        <a href={Immemorial.wiki.toString()} target="_blank">
          {Immemorial.title}
        </a>{" "}
        or{" "}
        <a href={Arthemesia.wiki.toString()} target="_blank">
          {Arthemesia.title}
        </a>
        .
      </Typography>
    </Box>
  );
}
