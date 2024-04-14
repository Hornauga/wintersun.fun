import Typography from "@mui/material/Typography";

import EmbedYouTube from "../EmbedYouTube";
import EmbedSpotify from "../EmbedSpotify";

import { Song } from "../../music/things";

export default function SongDisplay({ song }: { song: Song }) {
  const albumOnYouTube: boolean = "youtube" in song.release.src;
  const albumOnSpotify: boolean = "spotify" in song.release.src;
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
      <Typography variant="body1" align="justify">
        {(albumOnSpotify || albumOnYouTube) &&
          "This album is available to listen on "}
        {albumOnSpotify && (
          <a
            href={`https://open.spotify.com/album/${song.release.src.spotify}`}
            target="_blank"
          >
            Spotify
          </a>
        )}
        {albumOnSpotify ? (albumOnYouTube ? " and " : "") : ""}
        {albumOnYouTube && (
          <a
            href={`https://www.youtube.com/watch?v=${song.release.src.youtube}`}
            target="_blank"
          >
            YouTube
          </a>
        )}
        {(albumOnSpotify || albumOnYouTube) && "."}
      </Typography>
    </>
  );
}
