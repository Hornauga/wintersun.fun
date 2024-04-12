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
