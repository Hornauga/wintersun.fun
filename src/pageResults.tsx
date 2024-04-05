import { Typography, Box } from "@mui/material";
import { Song, allSongs } from "./music.ts";
import { mainSize } from "./page.tsx";

export function ResultsPage() {
  return (
    <Box minHeight={mainSize}>
      {allSongs.map((song) => (
        <SongDisplay song={song} />
      ))}
    </Box>
  );
}

function YouTubeEmbed({ song }: { song: Song }) {
  const src = `https://www.youtube.com/embed/${song.src.youtube}`;
  return (
    <iframe
      src={src}
      width="100%"
      height="315px"
      style={{ border: 0 }}
      allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
}

function SpotifyEmbed({ song }: { song: Song }) {
  const src = `https://open.spotify.com/embed/track/${song.src.spotify}`;
  // https://stackoverflow.com/q/1234127
  // https://stackoverflow.com/a/76903187
  // You're not supposed to style the background, you're supposed to use one of the supported heights and then the player has it's own colour for the embed.
  // In your case, do all of these:
  // Change the height to 80 (152 and 352 are larger options).
  // Add frameBorder="0" to get rid of the surrounding white lines.
  // Add style="border-radius:12px" to get rid of the white corners.
  return (
    <iframe
      src={src}
      width="100%"
      height="80px"
      allow="fullscreen; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      style={{
        border: 0,
        borderRadius: 13,
      }}
    ></iframe>
  );
}
function SongDisplay({ song }: { song: Song }) {
  return (
    <div>
      <Typography variant="h4" align="center">
        {song.title}
      </Typography>
      {/* <Typography variant="caption" align="center">{song.album? : "Foo" ? "bar"}</Typography> */}
      <p>
        <YouTubeEmbed song={song} />
      </p>
      <p>{"spotify" in song.src && <SpotifyEmbed song={song} />}</p>
      <Typography variant="body1">
        Here's why you'll like this song: it's black melodic death power metal
      </Typography>
      {"spotify" in song.src && (
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
      {"youtube" in song.src && (
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
