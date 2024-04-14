import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

var snippet = structuredClone(timePackageMusicClips);
snippet.src.youtube += "?start=34";

export default function OneWithTheShadows() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this song, perhaps you'll really like "One With The
        Shadows" from Time II, included in{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>{" "}
        and featured at 0:34 in this video:
      </Typography>
      <EmbedYouTube video={snippet} />
    </>
  );
}
