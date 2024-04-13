import Typography from "@mui/material/Typography";
import { Song } from "../../music/things";
import { EmbedYouTube } from "../EmbedYouTube";
import SongDisplay from "./SongDisplay";

import { timePackage, timePackageVideo } from "../../music/misc";

const articles: Map<Song, JSX.Element> = new Map();

export function SongArticle({ song }: { song: Song }): JSX.Element {
  return articles.get(song) ?? <DefaultArticle song={song} />;
}

function DefaultArticle({ song }: { song: Song }) {
  return (
    <>
      <SongDisplay song={song}></SongDisplay>
      <Typography variant="body1" align="justify">
        (PLACHOLDER) Here's why you'll like this song: it's black melodic death
        power metal.
      </Typography>
      {song.release.src?.["youtube"] && (
        <p>
          Listen to album on{" "}
          <a
            href={`https://open.spotify.com/album/${song.release.src.spotify}`}
          >
            Spotify
          </a>
        </p>
      )}
      {song.release.src?.["youtube"] && (
        <p>
          Listen to album on{" "}
          <a
            href={`https://www.youtube.com/watch?v=${song.release.src.youtube}`}
          >
            YouTube
          </a>
        </p>
      )}
      <Typography variant="h5" align="center">
        Time Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        If you enjoy this music, please consider supporting Wintersun by
        purchasing the{" "}
        <a href={timePackage.toString()} target="_blank">
          Time Package
        </a>{" "}
        via IndieGoGo so Wintersun can make even more music for you to enjoy!
      </Typography>
      <EmbedYouTube video={timePackageVideo} />
    </>
  );
}
