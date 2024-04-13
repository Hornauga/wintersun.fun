import { Album, Song } from "../../things";
import { Wintersun } from "../../artists";

export const albumTimeI: Album = {
  title: "Time I",
  artist: Wintersun,
  wiki: new URL("https://en.wikipedia.org/wiki/Time_I"),
  year: 2012,
  src: { spotify: "0V32xSGyy0TyOzbc5ufoWX" },
};

export default albumTimeI;

export const songWhenTimeFadesAway: Song = {
  release: albumTimeI,
  title: "When Time Fades Away",
  src: { youtube: "mzEv-4xcYig", spotify: "3e4hga1m26s0WqeIodSIH3" },
  qualities: {
    // Done
    jari: 2,
    black: 0,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
    riffs: 0,
    solos: 1,
    melodic: 3,
    energetic: 1,
    epic: 2,
    folk: 3,
    intense: 1,
    melancholic: 2,
  },
};

export const songSonsOfWinterAndStars: Song = {
  release: albumTimeI,
  title: "Sons of Winter and Stars",
  src: { youtube: "6RJnBUbAeMk", spotify: "6EJfuLTl01JoGXt8rtM1rd" },
  qualities: {
    // Done
    jari: 3,
    black: 1,
    death: 1,
    power: 3,
    thrash: 2,
    clean: 3,
    extreme: 3,
    choirs: 3,
    singalong: 3,
    riffs: 3,
    solos: 2,
    melodic: 3,
    energetic: 2,
    epic: 3,
    folk: 3,
    intense: 2,
    melancholic: 2,
  },
};

export const songLandOfSnowAndSorrow: Song = {
  release: albumTimeI,
  title: "Land of Snow and Sorrow",
  src: { youtube: "4cdT5u7-BV0", spotify: "3WpmO13nUtLDRZujMgu4ss" },
  qualities: {
    // Done
    jari: 3,
    black: 1,
    death: 1,
    power: 1,
    thrash: 1,
    clean: 3,
    extreme: 0,
    choirs: 2,
    singalong: 3,
    riffs: 1,
    solos: 1,
    melodic: 3,
    energetic: 0,
    epic: 2,
    folk: 3,
    intense: 1,
    melancholic: 3,
  },
};

export const songDarknessAndFrost: Song = {
  release: albumTimeI,
  title: "Darkness and Frost",
  src: { youtube: "SXwku4hxqhY", spotify: "0QvkDPezujrAC8PhnAoAQY" },
  qualities: {
    // Done
    jari: 2,
    black: 0,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 1,
    singalong: 0,
    riffs: 1,
    solos: 1,
    melodic: 2,
    energetic: 2,
    epic: 1,
    folk: 3,
    intense: 1,
    melancholic: 1,
  },
};

export const songTime: Song = {
  release: albumTimeI,
  title: "Time",
  src: { youtube: "SXwku4hxqhY?start=147", spotify: "2Egr3daQL5BbHHN1z75ArW" },
  qualities: {
    // Done
    jari: 3,
    black: 1,
    death: 1,
    power: 2,
    thrash: 1,
    clean: 3,
    extreme: 3,
    choirs: 2,
    singalong: 3,
    riffs: 1,
    solos: 2,
    melodic: 2,
    energetic: 0,
    epic: 2,
    folk: 2,
    intense: 1,
    melancholic: 3,
  },
};
