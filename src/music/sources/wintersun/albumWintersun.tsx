import { Album, Song } from "../../things";
import { Wintersun } from "../../artists";

export const albumWintersun: Album = {
  title: "Wintersun",
  artist: Wintersun,
  year: 2004,
  wiki: new URL("https://en.wikipedia.org/wiki/Wintersun_(album)"),
  src: { youtube: "XfMrC0dvvmw", spotify: "5vlG5D2TCZzvWYAevPVYCI" },
};

export default albumWintersun;

export const songWinterMadnessIntro: Song = {
  release: albumWintersun,
  title: "Winter Madness Intro",
  src: { youtube: "GUXpbnT5eBE" },
  qualities: {
    // Done
    jari: 0,
    black: 0,
    death: 0,
    folk: 1,
    power: 1,
    thrash: 0,
    clean: 0,
    extreme: 0,
    singalong: 0,
    melodic: 1,
    riffs: 0,
    solos: 1,
    energetic: 0,
    epic: 2,
    intense: 0,
    melancholic: 2,
  },
};

export const songWinterMadness: Song = {
  release: albumWintersun,
  title: "Winter Madness",
  src: {
    youtube: "GUXpbnT5eBE?start=155",
    spotify: "2N1SFSnHMIdHY0waUbjEnv",
  },
  qualities: {
    // Done
    jari: 3,
    black: 2,
    death: 2,
    folk: 1,
    power: 2,
    thrash: 1,
    clean: 1,
    extreme: 3,
    singalong: 0,
    melodic: 3,
    riffs: 3,
    solos: 3,
    energetic: 3,
    epic: 2,
    intense: 3,
    melancholic: 1,
  },
};

export const songBeyondTheDarkSun: Song = {
  release: albumWintersun,
  title: "Beyond The Dark Sun",
  src: { youtube: "KuG6lJ6xbKk", spotify: "1L3S5vFgsVzweUJnAIfSGM" },
  qualities: {
    // Done
    jari: 3,
    black: 2,
    death: 2,
    folk: 1,
    power: 2,
    thrash: 1,
    clean: 2,
    extreme: 3,
    singalong: 0,
    melodic: 3,
    riffs: 3,
    solos: 1,
    energetic: 3,
    epic: 2,
    intense: 3,
    melancholic: 2,
  },
};

export const songSleepingStars: Song = {
  release: albumWintersun,
  title: "Sleeping Stars",
  src: { youtube: "hDsTtJXdMZo", spotify: "5MqVSSinDohOuMjNhO6PU6" },
  qualities: {
    // Done
    jari: 1,
    black: 3,
    death: 0,
    folk: 1,
    power: 0,
    thrash: 0,
    clean: 1,
    extreme: 3,
    singalong: 0,
    melodic: 2,
    riffs: 1,
    solos: 1,
    energetic: 1,
    epic: 3,
    intense: 1,
    melancholic: 3,
  },
};

export const songBattleAgainstTime: Song = {
  release: albumWintersun,
  title: "Battle Against Time",
  src: { youtube: "b4E0qN4_xQI", spotify: "0tEA8vx1V2mJoxSIqapi0H" },
  qualities: {
    // Done
    jari: 3,
    black: 2,
    death: 2,
    folk: 1,
    power: 2,
    thrash: 2,
    clean: 2,
    extreme: 2,
    singalong: 0,
    melodic: 3,
    riffs: 3,
    solos: 2,
    energetic: 3,
    epic: 3,
    intense: 3,
    melancholic: 2,
  },
};

export const songDeathAndTheHealing: Song = {
  release: albumWintersun,
  title: "Death and the Healing",
  src: { youtube: "wX-X7oX5Abc", spotify: "6EAsLKCDMQV3BRRb9OdaMJ" },
  qualities: {
    // Done
    jari: 1,
    black: 1,
    death: 0,
    folk: 1,
    power: 0,
    thrash: 0,
    clean: 3,
    extreme: 0,
    singalong: 0,
    melodic: 3,
    riffs: 1,
    solos: 3,
    energetic: 0,
    epic: 3,
    intense: 1,
    melancholic: 3,
  },
};

export const songStarchild: Song = {
  release: albumWintersun,
  title: "Starchild",
  src: { youtube: "oyuOjCfCsm4", spotify: "3LPVfzrc9G8EOQ00nTgvKL" },
  qualities: {
    // Done
    jari: 3,
    black: 2,
    death: 1,
    folk: 2,
    power: 2,
    thrash: 2,
    clean: 2,
    extreme: 2,
    singalong: 0,
    melodic: 3,
    riffs: 2,
    solos: 0,
    energetic: 3,
    epic: 3,
    intense: 3,
    melancholic: 1,
  },
};

export const songBeautifulDeath: Song = {
  release: albumWintersun,
  title: "Beautiful Death",
  src: { youtube: "TNg-mfVnCWk", spotify: "6S83nQwA0aPHKB86vAqgl5" },
  qualities: {
    // Done
    jari: 3,
    black: 3,
    death: 1,
    folk: 1,
    power: 0,
    thrash: 1,
    clean: 1,
    extreme: 3,
    singalong: 0,
    melodic: 2,
    riffs: 2,
    solos: 2,
    energetic: 2,
    epic: 3,
    intense: 3,
    melancholic: 3,
  },
};

export const songSadnessAndHate: Song = {
  release: albumWintersun,
  title: "Sadness and Hate",
  src: { youtube: "x3s19wDvyeU", spotify: "4cN0IBNbFkq0srzoyNOC4C" },
  qualities: {
    // Done
    jari: 3,
    black: 1,
    death: 1,
    folk: 2,
    power: 0,
    thrash: 0,
    clean: 2,
    extreme: 3,
    singalong: 0,
    melodic: 2,
    riffs: 2,
    solos: 1,
    energetic: 0,
    epic: 3,
    intense: 2,
    melancholic: 3,
  },
};
