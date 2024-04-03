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
