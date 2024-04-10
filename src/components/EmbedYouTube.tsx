import { Song } from "../music/things";

export function EmbedYouTube({ song }: { song: Song }) {
  if (song.src?.youtube === undefined) return;
  const src = `https://www.youtube.com/embed/${song.src.youtube}`;
  return (
    <iframe
      src={src}
      width="100%"
      height="315px"
      style={{ border: 0 }}
      allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
}
