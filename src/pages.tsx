import {
  Button,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Container,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Song, allSongs } from "./music.ts";

export type PageName = "welcome" | "filters" | "results";

export function Page({
  pageName,
  navigate,
}: {
  pageName: PageName;
  navigate: (pageName: PageName) => void;
}) {
  var foo;
  if (pageName === "welcome") {
    foo = <WelcomePage navigate={navigate} />;
  } else if (pageName === "filters") {
    foo = <FiltersPage navigate={navigate} />;
  } else if (pageName === "results") {
    foo = <ResultsPage navigate={navigate} />;
  }
  return (
    <Container maxWidth="sm" style={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: barSize,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{ width: 100 }}
                onClick={() => navigate("welcome")}
              >
                About
              </Button>
            </Box>
            <Box>
              <Typography variant="h4">Wintersun.fun</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ width: 100 }}
                onClick={() => navigate("filters")}
              >
                Filters
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {foo}
    </Container>
  );
}

const barSize = "64px";
const spacing = "8px";
const mainSize = `calc( 100vh - ${barSize} - ${spacing} )`;

function WelcomePage({ navigate }: { navigate: (pageName: PageName) => void }) {
  return (
    <Box minHeight={mainSize}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Your guide to enjoying the music of Wintersun
      </Typography>
    </Box>
  );
}

function FiltersPage({ navigate }: { navigate: (pageName: PageName) => void }) {
  return (
    <>
      <header>
        <Typography variant="h1" align="center">
          Filtering
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Let's figure out how you can best enjoy Wintersun
        </Typography>

        <Button variant="contained" onClick={() => navigate("welcome")}>
          Restart
        </Button>

        <Button variant="contained" onClick={() => navigate("results")}>
          Results
        </Button>
      </header>
      <Typography variant="body1">
        Indicate your preferences for the following
      </Typography>
      <FormControl>
        {[
          "Black metal",
          "Death metal",
          "Folk metal",
          "Power metal",
          "Clean vocals",
          "Extreme vocals (growls/screams)",
        ].map((thing) => (
          <>
            <FormLabel>{thing}</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="dislike"
                control={<Radio />}
                label="Dislike"
              />
              <FormControlLabel
                value="neutral"
                control={<Radio />}
                label="Neutral"
              />
              <FormControlLabel value="like" control={<Radio />} label="Like" />
            </RadioGroup>
          </>
        ))}
      </FormControl>
    </>
  );
}

function ResultsPage({ navigate }: { navigate: (pageName: PageName) => void }) {
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
