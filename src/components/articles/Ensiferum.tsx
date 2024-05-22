import Typography from "@mui/material/Typography";
import { timePackage } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";
import {
  songFountainOfLife,
  songRedHorizon,
  songSteelOfTheGods,
  songTheDragonSong,
} from "../../music/sources/wintersun";

export default function Ensiferum() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this music, you'll probably enjoy the{" "}
        <a href={timePackage.toString()} target="_blank">
          Legendary Early Demos from the Time Package
        </a>
        ! They include tons of similar and previously unreleased demos such as
        these:
      </Typography>
      <EmbedYouTube video={songSteelOfTheGods} />
      <EmbedYouTube video={songTheDragonSong} />
      <EmbedYouTube video={songRedHorizon} />
      <EmbedYouTube video={songFountainOfLife} />
    </>
  );
}
