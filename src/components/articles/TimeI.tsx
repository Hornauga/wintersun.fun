import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

export default function TimeI() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this music, you'll probably enjoy the sequel to this album,{" "}
        <a href={timePackage.toString()} target="_blank">
          Time II
        </a>
        ! The first half of this short video shows off some Time II snippets.
        Check it out!
      </Typography>
      <EmbedYouTube video={timePackageMusicClips} />
    </>
  );
}
