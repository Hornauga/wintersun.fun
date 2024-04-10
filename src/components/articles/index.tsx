import Typography from "@mui/material/Typography";
import { Song } from "../../music/things";
import { EmbedYouTube } from "../EmbedYouTube";
import { EmbedSpotify } from "../EmbedSpotify";

const articles: Map<Song, JSX.Element> = new Map();

export function SongArticle({ song }: { song: Song }): JSX.Element {
  return articles.get(song) ?? <DefaultArticle song={song} />;
}

function DefaultArticle({ song }: { song: Song }) {
  return (
    <div>
      <Typography variant="h4" align="center" marginBottom="0">
        {song.title}
      </Typography>
      {song.release !== undefined && (
        <Typography variant="subtitle2" align="center" marginTop="0">
          TODO{/*{song.release.artist} - {song.release.title} */}
        </Typography>
      )}
      <EmbedYouTube song={song} />
      <EmbedSpotify song={song} />
      <Typography variant="body1" align="justify">
        (PLACHOLDER) Here's why you'll like this song: it's black melodic death
        power metal.
      </Typography>
      {song.src?.["spotify"] && (
        <p>
          Listen on{" "}
          <a href={`https://open.spotify.com/track/${song.src.spotify}`}>
            Spotify
          </a>
        </p>
      )}
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
      {song.src?.["youtube"] && (
        <p>
          Listen on{" "}
          <a href={`https://www.youtube.com/watch?v=${song.src.youtube}`}>
            YouTube
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
    </div>
  );
}
