import { Album, Song } from "../../things";
import { NuclearBlastAllstars } from "../../artists";

export const albumOutOfTheDark: Album = {
  title: "Out of the Dark (20 Years Nuclear Blast)",
  artist: NuclearBlastAllstars,
  year: 2007,
  wiki: new URL(
    "https://en.wikipedia.org/wiki/Nuclear_Blast_All-Stars:_Out_of_the_Dark",
  ),
  src: { spotify: "4PEnW1fIBggqj61st6aWb7" },
};

export default albumOutOfTheDark;

export const songDevotion: Song = {
  release: albumOutOfTheDark,
  title: "Devotion",
  src: { youtube: "tyglXinWWh4", spotify: "1uVe9mdXb05kneHWJ5pJZt" },
  qualities: {
    // Done
    jari: 0,
    black: 3,
    death: 1,
    power: 0,
    thrash: 1,
    clean: 2,
    extreme: 3,
    choirs: 2,
    singalong: 0,
    riffs: 1,
    solos: 0,
    melodic: 1,
    energetic: 1,
    epic: 1,
    folk: 0,
    intense: 2,
    melancholic: 1,
  },
};
