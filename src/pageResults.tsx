import { Typography, Box, Button } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";

import { Song, allSongs } from "./music";
import { YouTubeEmbed, SpotifyEmbed } from "./music";

import { loremIpsum } from "./misc";
import { useState } from "react";

export function ResultsPage() {
  const [currentResult, setCurrentResult] = useState(0);
  const songs = allSongs;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "16px",
          marginBottom: "16px",
        }}
      >
        <Button
          variant="text"
          sx={{ width: 100 }}
          disabled={currentResult === 0}
          onClick={() => setCurrentResult(0)}
        >
          <FirstPage />
        </Button>
        <Button
          variant="text"
          sx={{ width: 100 }}
          disabled={currentResult === 0}
          onClick={() => setCurrentResult(currentResult - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button variant="text" disabled sx={{ width: 100 }}>
          {currentResult + 1}/{songs.length}
        </Button>
        <Button
          variant="text"
          sx={{ width: 100 }}
          disabled={currentResult === songs.length - 1}
          onClick={() => setCurrentResult(currentResult + 1)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="text"
          sx={{ width: 100 }}
          disabled={currentResult === songs.length - 1}
          onClick={() => setCurrentResult(songs.length - 1)}
        >
          <LastPage />
        </Button>
      </Box>
      <SongDisplay song={songs[currentResult]} />
    </Box>
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
      <Typography variant="body1" align="justify">
        Here's why you'll like this song: it's black melodic death power metal.{" "}
        {loremIpsum}
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
