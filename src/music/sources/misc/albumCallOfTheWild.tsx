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
    jari: 0,
    black: 0,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
    riffs: 0,
    solos: 0,
    melodic: 0,
    energetic: 0,
    epic: 0,
    folk: 0,
    intense: 0,
    melancholic: 0,
  },
};
