import Typography from "@mui/material/Typography";
import EmbedYouTube from "../EmbedYouTube";
import { timePackage, timePackageVideo } from "../../music/misc";

export default function DefaultTimePackage() {
  return (
    <>
      <Typography variant="h5" align="center">
        Time Package Crowdfunding
      </Typography>
      <Typography variant="body1" align="justify">
        If you enjoy this song, you'll probably enjoy the{" "}
        <a href={timePackage.toString()} target="_blank">
          Time Package
        </a>
        ! Please consider purchasing it so Wintersun can make even more music
        for you to enjoy!
      </Typography>
      <EmbedYouTube video={timePackageVideo} />
    </>
  );
}
