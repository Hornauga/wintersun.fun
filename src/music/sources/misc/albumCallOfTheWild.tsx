import { Album, Song } from "../../things";
import { Powerwolf } from "../../artists";

export const albumCallOfTheWild: Album = {
  title: "Call of the Wild",
  artist: Powerwolf,
  year: 2021,
  wiki: new URL(
    "https://en.wikipedia.org/wiki/Call_of_the_Wild_(Powerwolf_album)",
  ),
  src: { spotify: "6JhuNA7potIMg6r29IVULP" },
};

export default albumCallOfTheWild;

export const songSaturdaySatan: Song = {
  release: albumCallOfTheWild,
  title: "Saturday Satan",
  src: { spotify: "7Djt9wwqit8Ygyva3S0kLJ" },
  qualities: {
    // Done
    jari: 0,
    black: 0,
    death: 0,
    power: 2,
    thrash: 1,
    clean: 3,
    extreme: 0,
    choirs: 3,
    singalong: 2,
    riffs: 2,
    solos: 2,
    melodic: 1,
    energetic: 2,
    epic: 1,
    folk: 1,
    intense: 1,
    melancholic: 1,
  },
};
