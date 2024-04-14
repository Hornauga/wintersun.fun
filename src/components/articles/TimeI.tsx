import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

export default function TimeI() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this music, you'll probably enjoy the sequel to this album,
        Time II, which is included in{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>
        ! The first half of this short video shows off some Time II snippets.
        Check it out!
      </Typography>
      <EmbedYouTube video={timePackageMusicClips} />
      <Typography variant="body1" align="justify">
        Please consider purchasing the package so Wintersun can continue making
        music for you to enjoy!
      </Typography>
    </>
  );
}
