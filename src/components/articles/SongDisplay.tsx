import Typography from "@mui/material/Typography";

import { EmbedYouTube } from "../EmbedYouTube";
import { EmbedSpotify } from "../EmbedSpotify";

import { Song } from "../../music/things";

export default function SongDisplay({ song }: { song: Song }) {
  return (
    <>
      <Typography variant="h4" align="center" marginBottom="0">
        {song.title}
      </Typography>
      {"title" in song.release && (
        <Typography variant="subtitle2" align="center" marginTop="0">
          <a href={song.release.artist.wiki.toString()} target="_blank">
            {song.release.artist.title}
          </a>{" "}
          -{" "}
          <a href={song.release.wiki.toString()} target="_blank">
            {song.release.title}
          </a>
        </Typography>
      )}
      {!("title" in song.release) && (
        <Typography variant="subtitle2" align="center" marginTop="0">
          by{" "}
          <a href={song.release.artist.wiki.toString()} target="_blank">
            {song.release.artist.title}
          </a>
        </Typography>
      )}
      <EmbedYouTube video={song} />
      <EmbedSpotify song={song} />
    </>
  );
}
