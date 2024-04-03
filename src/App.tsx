import { Song, allSongs } from "./music.ts";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { indigo, purple } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const theme = createTheme({
  // https://mui.com/material-ui/customization/theming/
  // https://mui.com/material-ui/customization/color/
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: purple,
  },
});

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
        backgroundColor: "none transparent",
        border: 0,
        borderRadius: 12,
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

type Mode = "init" | "filter" | "result";

function ComponentByMode({
  mode,
  setInitMode,
  setFilterMode,
  setResultMode,
}: {
  mode: Mode;
  setInitMode: () => void;
  setFilterMode: () => void;
  setResultMode: () => void;
}) {
  if (mode === "init") {
    return <InitModeComponent handleNext={setFilterMode} />;
  } else if (mode === "filter") {
    return (
      <FilterModeComponent
        handlePrev={setInitMode}
        handleNext={setResultMode}
      />
    );
  } else if (mode === "result") {
    return <ResultModeComponent handlePrev={setFilterMode} />;
  }
}

function InitModeComponent({ handleNext }: { handleNext: () => void }) {
  return (
    <>
      <header>
        <Typography variant="h1" align="center">
          Wintersun.fun
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Your guide to enjoying the music of Wintersun
        </Typography>
      </header>
      <Button variant="contained" onClick={handleNext}>
        Go!
      </Button>
    </>
  );
}

function FilterModeComponent({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) {
  const [value, setValue] = useState("neutral");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <header>
        <Typography variant="h1" align="center">
          Filtering
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Let's figure out how you can best enjoy Wintersun
        </Typography>
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
            <RadioGroup row value={value} onChange={handleChange}>
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
      <div>
        <Button variant="contained" color="secondary" onClick={handlePrev}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Go!
        </Button>
      </div>
    </>
  );
}

function ResultModeComponent({ handlePrev }: { handlePrev: () => void }) {
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handlePrev}>
        Previous
      </Button>
      {allSongs.map((song) => (
        <SongDisplay song={song} />
      ))}
    </>
  );
}

function App() {
  const [mode, setMode] = useState<Mode>("init");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container maxWidth="sm">
        <ComponentByMode
          mode={mode}
          setInitMode={() => setMode("init")}
          setFilterMode={() => setMode("filter")}
          setResultMode={() => setMode("result")}
        ></ComponentByMode>
      </Container>
    </ThemeProvider>
  );
}

export default App;
