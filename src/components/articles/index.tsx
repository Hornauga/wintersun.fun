import Typography from "@mui/material/Typography";
import { Song } from "../../music/things";
import EmbedYouTube from "../EmbedYouTube";
import SongDisplay from "./SongDisplay";
import Ensiferum from "./Ensiferum";
import TimeI from "./TimeI";
import Vocals from "./Vocals";
import WayOfTheFire from "./WayOfTheFire";
import Storm from "./Storm";
import OneWithTheShadows from "./OneWithTheShadows";

import { timePackage, timePackageVideo } from "../../music/misc";
import { songDevotion } from "../../music/sources/misc/albumNuclearBlastAllstars";
import { songSaturdaySatan } from "../../music/sources/misc/albumCallOfTheWild";

const articles: Map<Song, JSX.Element> = new Map();

// Oops, forgot to use this to select songs... oh well
export function SongArticle({ song }: { song: Song }): JSX.Element {
  return articles.get(song) ?? <DefaultArticle song={song} />;
}

function DefaultArticle({ song }: { song: Song }) {
  var article = <DefaultTimePackage />;
  if (
    "title" in song.release &&
    ["Ensiferum", "Iron"].includes(song.release.title)
  )
    article = <Ensiferum />;
  else if ("title" in song.release && song.release.title === "Time I")
    article = <TimeI />;
  else if (song === songDevotion || song === songSaturdaySatan)
    article = <Vocals />;
  else if (
    [
      "Winter Madness",
      "Beyond the Dark Sun",
      "Battle Against Time",
      "Starchild",
    ].includes(song.title)
  )
    article = <WayOfTheFire />;
  else if (["Sadness and Hate", "Beautiful Death"].includes(song.title))
    article = <Storm />;
  else if (["Sleeping Stars", "Death and the Healing"].includes(song.title))
    article = <OneWithTheShadows />;
  return (
    <>
      <SongDisplay song={song}></SongDisplay>
      {article}
    </>
  );
}

function DefaultTimePackage() {
  return (
    <>
      <Typography variant="h5" align="center">
        Time Package Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        If you enjoy this song, you'll probably enjoy the{" "}
        <a href={timePackage.toString()} target="_blank">
          Time Package
        </a>
        ! Please consider purchasing it so Wintersun can make even more music
        for you to enjoy!
      </Typography>
      <EmbedYouTube video={timePackageVideo} />
    </>
  );
}
