import Typography from "@mui/material/Typography";
import { timePackage } from "../../music/misc";
import { Song } from "../../music/things";
import EmbedYouTube from "../EmbedYouTube";
import {
  songFountainOfLife,
  songRedHorizon,
  songSteelOfTheGods,
} from "../../music/sources/wintersun";

export default function LegendaryEarlyDemo({ song }: { song: Song }) {
  return (
    <>
      <Typography variant="body1" align="justify">
        This song is a previously unreleased demo that is available with{" "}
        <a href={timePackage.toString()} target="_blank">
          The Legendary Early Demos from the Time Package
        </a>
        , which includes tons of similar and previously unreleased music such as
        these:
      </Typography>
      {song !== songSteelOfTheGods && (
        <EmbedYouTube video={songSteelOfTheGods} />
      )}
      {song !== songRedHorizon && <EmbedYouTube video={songRedHorizon} />}
      {song !== songFountainOfLife && (
        <EmbedYouTube video={songFountainOfLife} />
      )}
      <Typography variant="body1" align="justify">
        So if you enjoy this music, you'll probably love{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>
        . Please consider purchasing it so Wintersun can continue making music
        for you to enjoy!
      </Typography>
    </>
  );
}
