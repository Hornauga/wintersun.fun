export interface Album {
  title: string;
  artist: string;
  src: {
    youtube?: string;
    spotify?: string;
  };
}

export interface Song {
  title: string;
  album?: Album;
  src: {
    youtube?: string;
    spotify?: string;
  };
}

export const albumWintersunWintersun: Album = {
  title: "Wintersun",
  artist: "Wintersun",
  src: { youtube: "XfMrC0dvvmw", spotify: "5vlG5D2TCZzvWYAevPVYCI" },
};
export const albumWintersunWintersunSongs: Song[] = [
  {
    title: "Winter Madness Intro",
    album: albumWintersunWintersun,
    src: { youtube: "GUXpbnT5eBE" },
  },
  {
    title: "Winter Madness",
    album: albumWintersunWintersun,
    src: {
      youtube: "GUXpbnT5eBE?start=155",
      spotify: "2N1SFSnHMIdHY0waUbjEnv",
    },
  },
  {
    title: "Beyond The Dark Sun",
    album: albumWintersunWintersun,
    src: { youtube: "KuG6lJ6xbKk", spotify: "1L3S5vFgsVzweUJnAIfSGM" },
  },
  {
    title: "Sleeping Stars",
    album: albumWintersunWintersun,
    src: { youtube: "hDsTtJXdMZo", spotify: "5MqVSSinDohOuMjNhO6PU6" },
  },
  {
    title: "Battle Against Time",
    album: albumWintersunWintersun,
    src: { youtube: "b4E0qN4_xQI", spotify: "0tEA8vx1V2mJoxSIqapi0H" },
  },
  {
    title: "Death and the Healing",
    album: albumWintersunWintersun,
    src: { youtube: "wX-X7oX5Abc", spotify: "6EAsLKCDMQV3BRRb9OdaMJ" },
  },
  {
    title: "Starchild",
    album: albumWintersunWintersun,
    src: { youtube: "oyuOjCfCsm4", spotify: "3LPVfzrc9G8EOQ00nTgvKL" },
  },
  {
    title: "Beautiful Death",
    album: albumWintersunWintersun,
    src: { youtube: "TNg-mfVnCWk", spotify: "6S83nQwA0aPHKB86vAqgl5" },
  },
  {
    title: "Sadness and Hate",
    album: albumWintersunWintersun,
    src: { youtube: "x3s19wDvyeU", spotify: "4cN0IBNbFkq0srzoyNOC4C" },
  },
];

export const allSongs: Song[] = [...albumWintersunWintersunSongs];
export function YouTubeEmbed({ song }: { song: Song }) {
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
export function SpotifyEmbed({ song }: { song: Song }) {
  const src = `https://open.spotify.com/embed/track/${song.src.spotify}`;
  // https://stackoverflow.com/q/1234127
  // https://stackoverflow.com/a/76903187
  // You're not supposed to style the background, you're supposed to use one of the supported heights and then the player has it's own colour for the embed.
  // In your case, do all of these:
  // Change the height to 80 (152 and 352 are larger options).
  // Add frameBorder="0" to get rid of the surrounding white lines.
  // Add style="border-radius:12px" to get rid of the white corners.
  return (
    <iframe
      src={src}
      width="100%"
      height="80px"
      allow="fullscreen; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      style={{
        border: 0,
        borderRadius: 13,
      }}
    ></iframe>
  );
}
