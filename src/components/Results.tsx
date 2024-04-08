import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";

import { SongArticle } from "./articles";
import { Song } from "../music";

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
      <SongArticle song={songs[currentResult]} />
    </Box>
  );
}
