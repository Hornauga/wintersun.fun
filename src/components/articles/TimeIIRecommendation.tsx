import Typography from "@mui/material/Typography";
import { Song } from "../../music/things";
import { Wintersun } from "../../music/artists";
import { albumTimeII } from "../../music/sources/wintersun/albumTimeII";
import EmbedYouTube from "../EmbedYouTube";

export default function TimeIIRecommendation({ song }: { song: Song }) {
  return (
    <>
      <Typography variant="body1" align="justify">
        If you enjoy this song, perhaps you'll really like {song.title}
        from{" "}
        <a href={Wintersun.wiki.toString()} target="_blank">
          {Wintersun.title}
        </a>
        's most recent album,
        <a href={albumTimeII.wiki.toString()} target="_blank">
          {albumTimeII.title}
        </a>
        .
      </Typography>
      <EmbedYouTube video={song} />
    </>
  );
}
