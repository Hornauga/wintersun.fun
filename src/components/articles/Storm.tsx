import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

var snippet = structuredClone(timePackageMusicClips);
snippet.src.youtube += "?start=79";

export default function WayOfTheFire() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this song, perhaps you'll really like "Storm" from Time II,
        included in{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>{" "}
        and featured at 1:19 in this video (two snippets):
      </Typography>
      <EmbedYouTube video={snippet} />
    </>
  );
}
