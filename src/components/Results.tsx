import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DraftsIcon from "@mui/icons-material/Drafts";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";

import { SongArticle } from "./articles";
import { Song } from "../music/things";
import { Typography } from "@mui/material";

const firstResult = -1;
const lastResult = 8;

export default function Results({
  songs,
  currentResult,
  setCurrentResult,
}: {
  songs: Song[];
  currentResult: number;
  setCurrentResult: React.Dispatch<React.SetStateAction<number>>;
}) {
  const article =
    currentResult === firstResult ? (
      <OverviewArticle songs={songs} />
    ) : (
      <SongArticle song={songs[currentResult]} />
    );
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "auto",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === firstResult}
          onClick={() => setCurrentResult(firstResult)}
        >
          <FirstPage />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === firstResult}
          onClick={() => setCurrentResult(currentResult - 1)}
        >
          <ChevronLeft />
        </Button>
        <Typography align="center" color="secondary" sx={{ width: "16%" }}>
          {currentResult === firstResult && <DraftsIcon color="secondary" />}
          <strong>
            {currentResult > firstResult &&
              `${currentResult + 1}/${lastResult + 1}`}
          </strong>
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === lastResult}
          onClick={() => setCurrentResult(currentResult + 1)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === lastResult}
          onClick={() => setCurrentResult(lastResult)}
        >
          <LastPage />
        </Button>
      </Box>
      {article}
    </Box>
  );
}

function OverviewArticle({ songs }: { songs: Song[] }) {
  const topSongs = songs.slice(0, lastResult + 1);
  return (
    <>
      <Typography variant="h4" align="center">
        Your Top Songs
      </Typography>
      {topSongs.map((song, index) => {
        return (
          <Typography variant="body1" align="center" key={index}>
            {index + 1}. {song.title} by{" "}
            <a href={song.release.artist.wiki.toString()} target="_blank">
              {song.release.artist.title}
            </a>{" "}
          </Typography>
        );
      })}
    </>
  );
}
