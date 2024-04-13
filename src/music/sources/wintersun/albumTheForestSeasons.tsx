import { Album, Song } from "../../things";
import { Wintersun } from "../../artists";

export const albumTheForestSeasons: Album = {
  title: "The Forest Seasons",
  artist: Wintersun,
  year: 2017,
  wiki: new URL("https://en.wikipedia.org/wiki/The_Forest_Seasons"),
  src: { youtube: "ZFfN3G2vjqM", spotify: "7ql5kbq4iJKLT2lpiaiZSr" },
};

export default albumTheForestSeasons;

export const songSpring: Song = {
  release: albumTheForestSeasons,
  title: "Awaken from the Dark Slumber (Spring)",
  src: { youtube: "9pQvOyo1nfQ", spotify: "46f36Ds9aJhDhbQsZajbih" },
  qualities: {
    // Done
    jari: 2,
    black: 3,
    death: 1,
    power: 1,
    thrash: 1,
    clean: 1,
    extreme: 3,
    choirs: 2,
    singalong: 2,
    riffs: 2,
    solos: 1,
    melodic: 2,
    energetic: 1,
    epic: 2,
    folk: 2,
    intense: 2,
    melancholic: 2,
  },
};

export const songSummer: Song = {
  release: albumTheForestSeasons,
  title: "The Forest That Weeps (Summer)",
  src: { youtube: "ffQ2B5qegRg", spotify: "22mbGl4jUbr7bhqWOzejjt" },
  qualities: {
    // Done
    jari: 2,
    black: 3,
    death: 1,
    power: 0,
    thrash: 0,
    clean: 2,
    extreme: 3,
    choirs: 3,
    singalong: 2,
    riffs: 2,
    solos: 0,
    melodic: 1,
    energetic: 1,
    epic: 2,
    folk: 2,
    intense: 1,
    melancholic: 2,
  },
};

export const songAutumn: Song = {
  release: albumTheForestSeasons,
  title: "Eternall Darkness (Autumn)",
  src: { youtube: "cwB3BQ0zWOw", spotify: "6NVJrvr7jKmdV04xhGG4TH" },
  qualities: {
    // Done
    jari: 2,
    black: 3,
    death: 2,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 3,
    choirs: 3,
    singalong: 0,
    riffs: 1,
    solos: 2,
    melodic: 1,
    energetic: 1,
    epic: 2,
    folk: 1,
    intense: 3,
    melancholic: 2,
  },
};

export const songWinter: Song = {
  release: albumTheForestSeasons,
  title: "Loneliness (Winter)",
  src: { youtube: "qIiZFpOQnd8", spotify: "6Qb4UHym7uBDGHRU0LYNjk" },
  qualities: {
    // Done
    jari: 2,
    black: 2,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 3,
    extreme: 1,
    choirs: 2,
    singalong: 2,
    riffs: 0,
    solos: 0,
    melodic: 2,
    energetic: 0,
    epic: 2,
    folk: 2,
    intense: 1,
    melancholic: 3,
  },
};
