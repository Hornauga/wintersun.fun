import Typography from "@mui/material/Typography";
import { Song } from "../../music/things";
import EmbedYouTube from "../EmbedYouTube";
import SongDisplay from "./SongDisplay";
import Ensiferum from "./Ensiferum";

import { timePackage, timePackageVideo } from "../../music/misc";

const articles: Map<Song, JSX.Element> = new Map();

export function SongArticle({ song }: { song: Song }): JSX.Element {
  return articles.get(song) ?? <DefaultArticle song={song} />;
}

function DefaultArticle({ song }: { song: Song }) {
  var article = <DefaultTimePackage />;
  if ("title" in song.release && song.release.title === "Ensiferum")
    article = <Ensiferum />;
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
        If you enjoy this music, you'll probably enjoy the{" "}
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
