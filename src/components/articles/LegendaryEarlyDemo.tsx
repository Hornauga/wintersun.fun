import Typography from "@mui/material/Typography";
import { timePackage } from "../../music/misc";
import { Song } from "../../music/things";
import EmbedYouTube from "../EmbedYouTube";
import {
  songFountainOfLife,
  songRedHorizon,
  songSteelOfTheGods,
  songTheDragonSong,
} from "../../music/sources/wintersun";

export default function LegendaryEarlyDemo({ song }: { song: Song }) {
  return (
    <>
      <Typography variant="body1" align="justify">
        This song is a previously unreleased demo that will become available
        with{" "}
        <a href={timePackage.toString()} target="_blank">
          The Legendary Early Demos from the Time Package
        </a>
        , which included tons of similar and previously unreleased music such as
        these:
      </Typography>
      {song !== songSteelOfTheGods && (
        <EmbedYouTube video={songSteelOfTheGods} />
      )}
      {song !== songTheDragonSong && <EmbedYouTube video={songTheDragonSong} />}
      {song !== songRedHorizon && <EmbedYouTube video={songRedHorizon} />}
      {song !== songFountainOfLife && (
        <EmbedYouTube video={songFountainOfLife} />
      )}
    </>
  );
}
