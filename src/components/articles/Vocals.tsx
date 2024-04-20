import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

var vocalSnippets = structuredClone(timePackageMusicClips);
vocalSnippets.src.youtube += "?start=34";

export default function Vocals() {
  return (
    <>
      <Typography variant="body1" align="justify">
        Jari is only featured as a vocalist here, but if you enjoy his vocals on
        this track, just wait until you hear them on Time II! This video
        features them between 0:50 and 2:00; check it out!
      </Typography>
      <EmbedYouTube video={vocalSnippets} />
      <Typography variant="body1" align="justify">
        Please consider purchasing{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>{" "}
        so Jari can continue caressing your cochlear canals!
      </Typography>
    </>
  );
}
