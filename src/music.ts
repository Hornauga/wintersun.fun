export interface Album {
  name: string;
  artist: string;
  src: {
    youtube?: string;
    spotify?: string;
  };
}

export interface Song {
  name: string;
  album?: Album;
  src: {
    youtube?: string;
    spotify?: string;
  };
}

export const albumWintersunWintersun: Album = {
  name: "Wintersun",
  artist: "Wintersun",
  src: { youtube: "XfMrC0dvvmw" },
};
export const albumWintersunWintersunSongs: Song[] = [
  {
    name: "Winter Madness Intro & Winter Madness",
    album: albumWintersunWintersun,
    src: { youtube: "GUXpbnT5eBE" },
  },
  {
    name: "Beyond The Dark Sun",
    album: albumWintersunWintersun,
    src: { youtube: "KuG6lJ6xbKk" },
  },
  {
    name: "Sleeping Stars",
    album: albumWintersunWintersun,
    src: { youtube: "hDsTtJXdMZo" },
  },
  {
    name: "Battle Against Time",
    album: albumWintersunWintersun,
    src: { youtube: "b4E0qN4_xQI" },
  },
  {
    name: "Death and the Healing",
    album: albumWintersunWintersun,
    src: { youtube: "wX-X7oX5Abc" },
  },
  {
    name: "Starchild",
    album: albumWintersunWintersun,
    src: { youtube: "oyuOjCfCsm4" },
  },
  {
    name: "Sadness and Hate",
    album: albumWintersunWintersun,
    src: { youtube: "x3s19wDvyeU" },
  },
  {
    name: "Beautiful Death",
    album: albumWintersunWintersun,
    src: { youtube: "TNg-mfVnCWk" },
  },
];

export const allSongs: Song[] = [...albumWintersunWintersunSongs];
