import { Album, Song } from ".";

export const albumCallOfTheWild: Album = {
  title: "Call of the Wild",
  artist: "Powerwolf",
  year: 2021,
  src: { spotify: "6JhuNA7potIMg6r29IVULP" },
};

export const songSummer: Song = {
  album: albumCallOfTheWild,
  title: "Saturday Satan",
  src: { spotify: "7Djt9wwqit8Ygyva3S0kLJ" },
  qualityValues: {
    jari: 0,
    black: 0,
    death: 0,
    folk: 0,
    power: 2,
    thrash: 1,
    clean: 3,
    extreme: 0,
    melodic: 2,
    riffs: 2,
    solos: 0,
    energetic: 2,
    epic: 2,
    intense: 0,
    melancholic: 1,
  },
};
