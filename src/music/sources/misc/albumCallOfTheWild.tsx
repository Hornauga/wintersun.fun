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

export const songSummer: Song = {
  release: albumCallOfTheWild,
  title: "Saturday Satan",
  src: { spotify: "7Djt9wwqit8Ygyva3S0kLJ" },
  qualities: {
    jari: 0,
    black: 0,
    death: 0,
    folk: 0,
    power: 2,
    thrash: 1,
    clean: 3,
    extreme: 0,
    singalong: 0,
    melodic: 2,
    riffs: 2,
    solos: 0,
    energetic: 2,
    epic: 2,
    intense: 0,
    melancholic: 1,
  },
};
