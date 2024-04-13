import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";

import { SongArticle } from "./articles";
import { Song } from "../music/things";

export default function Results({
  songs,
  currentResult,
  setCurrentResult,
}: {
  songs: Song[];
  currentResult: number;
  setCurrentResult: React.Dispatch<React.SetStateAction<number>>;
}) {
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
          disabled={currentResult === 0}
          onClick={() => setCurrentResult(0)}
        >
          <FirstPage />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === 0}
          onClick={() => setCurrentResult(currentResult - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button variant="text" disabled sx={{ width: "16%" }}>
          {/* TODO: Is this a hack? Yes it is */}
          {currentResult + 1}/{songs.length}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === songs.length - 1}
          onClick={() => setCurrentResult(currentResult + 1)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "16%" }}
          disabled={currentResult === songs.length - 1}
          onClick={() => setCurrentResult(songs.length - 1)}
        >
          <LastPage />
        </Button>
      </Box>
      <SongArticle song={songs[currentResult]} />
    </Box>
  );
}
