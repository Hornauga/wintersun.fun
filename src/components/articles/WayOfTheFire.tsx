import Typography from "@mui/material/Typography";
import { timePackage, timePackageMusicClips } from "../../music/misc";
import EmbedYouTube from "../EmbedYouTube";

var fireSnippet = structuredClone(timePackageMusicClips);
fireSnippet.src.youtube += "?start=289";

export default function WayOfTheFire() {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this song, perhaps you'll really like "The Way of the Fire"
        from Time II, included in{" "}
        <a href={timePackage.toString()} target="_blank">
          The Time Package
        </a>{" "}
        and featured at 4:49 in this video:
      </Typography>
      <EmbedYouTube video={fireSnippet} />
    </>
  );
}
