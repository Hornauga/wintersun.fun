import {
  Button,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Container,
  FormControl,
  Slider,
} from "@mui/material";

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
    foo = <WelcomePage />;
  } else if (pageName === "filters") {
    foo = <FiltersPage />;
  } else if (pageName === "results") {
    foo = <ResultsPage />;
  }
  return (
    <Container maxWidth="sm" style={{ height: "100vh" }}>
      <AppBar sx={{ position: { xs: "fixed", sm: "static" } }}>
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
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant="h4">Wintersun.fun</Typography>
            </Box>
            <Box
              sx={{ display: { xs: "flex", sm: "none" }, maxHeight: "100%" }}
            >
              <img
                src="icons/wintersun.png"
                alt="Wintersun.fun (Wintersun logo)"
                style={{ maxHeight: `calc(${barSize} - 16px)` }}
              />
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

function WelcomePage() {
  return (
    <Box>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Your guide to enjoying the music of Wintersun
      </Typography>
    </Box>
  );
}

interface FilterItem {
  id: string;
  title: string;
  description: string;
}

var filterItems: FilterItem[] = [
  {
    id: "black",
    title: "Black Metal",
    description: "The Black metal genre",
  },
  {
    id: "death",
    title: "Death metal",
    description: "The Death metal genre",
  },
  {
    id: "folk",
    title: "Folk metal",
    description: "The Folk metal genre",
  },
  {
    id: "Power",
    title: "Power metal",
    description: "The power metal genre",
  },
  {
    id: "thrash",
    title: "Thrash metal",
    description: "The thrash metal genre",
  },
  {
    id: "clean",
    title: "Clean vocals",
    description: "Clean vocals",
  },
  {
    id: "unclean",
    title: "Extreme vocals",
    description: "Growling, screaming, and such",
  },
];

function FiltersPage() {
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
        {filterItems.map((item) => (
          <Box>
            {item.title}
            <Slider
              valueLabelDisplay="off"
              marks
              step={1}
              min={-2}
              max={2}
              defaultValue={0}
              onChange={ (e, val) => console.log(`${e}: ${val}`) }  // TODO
            />
          </Box>
        ))}
      </FormControl>
    </>
  );
}

function ResultsPage() {
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
