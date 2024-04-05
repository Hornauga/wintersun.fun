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
import { useState } from "react";

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
                disabled={pageName === "welcome"}
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
                onClick={() =>
                  navigate(pageName === "filters" ? "results" : "filters")
                }
              >
                {pageName === "filters" ? "Go!" : "Filters"}
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
  label: string;
  longForm: string;
}

var filterItems: FilterItem[] = [
  {
    id: "black",
    label: "Black metal",
    longForm: "the black metal genre",
  },
  {
    id: "death",
    label: "Death metal",
    longForm: "the death metal genre",
  },
  {
    id: "folk",
    label: "Folk metal",
    longForm: "the folk metal genre",
  },
  {
    id: "power",
    label: "Power metal",
    longForm: "the power metal genre",
  },
  {
    id: "thrash",
    label: "Thrash metal",
    longForm: "the thrash metal genre",
  },
  {
    id: "clean",
    label: "Clean vocals",
    longForm: "clean vocals",
  },
  {
    id: "unclean",
    label: "Extreme vocals",
    longForm: "growling, screaming, squealing, and such",
  },
];

type Preference = -2 | -1 | 0 | 1 | 2;

function FilterLabel(filterItem: FilterItem, preference: Preference) {
  var result = `${filterItem.label}? `;
  switch (preference) {
    case -2:
      result += "😭 I HATE";
      break;
    case -1:
      result += "🙁 I dislike";
      break;
    case 0:
      result += "😐 I am OK with";
      break;
    case 1:
      result += "🙂 I like";
      break;
    case 2:
      result += "🤩 I LOVE";
      break;
  }
  result += " " + filterItem.longForm;
  return <Typography variant="body1">{result}</Typography>;
}

interface StateAndSetter {
  state: Preference;
  setState: React.Dispatch<React.SetStateAction<Preference>>;
}

function FiltersPage() {
  const filterStates = new Map<string, StateAndSetter>();
  for (const filterItem of filterItems) {
    const [state, setState] = useState<Preference>(0);
    filterStates.set(filterItem.id, { state, setState });
  }
  return (
    <>
      <header>
        <Typography variant="h1" align="center">
          Filtering
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Let's figure out how you can best enjoy Wintersun
        </Typography>
        {/* <Typography variant="h4">
          &#x1F62D;&#x1F621;&#x1F641;&#x1F642;&#x1F610;&#x1F600;&#x1F60D;&#x1F929;
        </Typography> */}
      </header>
      <Typography variant="body1">
        Indicate your preferences for the following
      </Typography>
      <FormControl>
        {filterItems.map((item) => (
          <Box>
            {FilterLabel(
              item,
              (filterStates.get(item.id) ?? { state: 0 }).state,
            )}
            <Slider
              valueLabelDisplay="off"
              color="secondary"
              marks
              step={1}
              min={-2}
              max={2}
              value={(filterStates.get(item.id) ?? { state: 0 }).state}
              onChange={(_, val) =>
                (filterStates.get(item.id) ?? { setState: (_) => {} }).setState(
                  val as Preference,
                )
              }
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
