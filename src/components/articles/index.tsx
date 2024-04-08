import Typography from "@mui/material/Typography";
import { Song } from "../../music";
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
      {song.album !== undefined && (
        <Typography variant="subtitle2" align="center" marginTop="0">
          {song.album.artist} - {song.album.title}
        </Typography>
      )}
      <EmbedYouTube song={song} />
      <EmbedSpotify song={song} />
      <Typography variant="body1" align="justify">
        (PLACHOLDER) Here's why you'll like this song: it's black melodic death
        power metal.
      </Typography>
      {song.src !== undefined && "spotify" in song.src && (
        <p>
          Listen on{" "}
          <a href={`https://open.spotify.com/track/${song.src.spotify}`}>
            Spotify
          </a>
        </p>
      )}
      {song.album?.src && "spotify" in song.album.src && (
        <p>
          Listen to album on{" "}
          <a href={`https://open.spotify.com/album/${song.album.src.spotify}`}>
            Spotify
          </a>
        </p>
      )}
      {song.src !== undefined && "youtube" in song.src && (
        <p>
          Listen on{" "}
          <a href={`https://www.youtube.com/watch?v=${song.src.youtube}`}>
            YouTube
          </a>
        </p>
      )}
      {song.album?.src && "youtube" in song.album.src && (
        <p>
          Listen to album on{" "}
          <a href={`https://www.youtube.com/watch?v=${song.album.src.youtube}`}>
            YouTube
          </a>
        </p>
      )}
    </div>
  );
}
