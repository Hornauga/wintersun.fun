import Typography from "@mui/material/Typography";
import { timePackage } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";
import {
  songRedHorizon,
  songSteelOfTheGods,
} from "../../music/sources/wintersun";

export default function Ensiferum() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this music, you'll probably enjoy the{" "}
        <a href={timePackage.toString()} target="_blank">
          Legendary Early Demos from the Time Package
        </a>
        ! It includes tons of similar and previously unreleased music such as
        these two:
      </Typography>
      <EmbedYouTube video={songSteelOfTheGods} />
      <EmbedYouTube video={songRedHorizon} />
      <Typography variant="body1" align="justify">
        Please consider purchasing it so Wintersun can continue making music for
        you to enjoy!
      </Typography>
    </>
  );
}
