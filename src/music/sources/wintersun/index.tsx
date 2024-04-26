import { Album, Song } from "../../things";
import { Wintersun } from "../../artists";
import { timePackage } from "../../misc";

// Could consider having Immemorial here as well

export const songWinterAcoustic: Song = {
  title: "Loneliness (Winter) (Acoustic Version)",
  release: { artist: Wintersun, year: 2017, src: {} },
  src: { youtube: "YJqjdyjg6w4" },
  qualities: {
    // Done
    jari: 2,
    black: 1,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 3,
    extreme: 0,
    choirs: 2,
    singalong: 2,
    riffs: 0,
    solos: 1,
    melodic: 3,
    energetic: 0,
    epic: 2,
    folk: 3,
    intense: 1,
    melancholic: 3,
  },
};

export const songWarning: Song = {
  title: "Warning",
  release: { artist: Wintersun, year: 2023, src: {} },
  src: { youtube: "HxSHqSK-EFE" },
  qualities: {
    // Done
    jari: 2,
    black: 2,
    death: 2,
    power: 2,
    thrash: 2,
    clean: 0,
    extreme: 0,
    choirs: 1,
    singalong: 0,
    riffs: 3,
    solos: 0,
    melodic: 1,
    energetic: 2,
    epic: 1,
    folk: 0,
    intense: 2,
    melancholic: 1,
  },
};

export const albumSongsOfJariIII: Album = {
  title: "The Songs of Jari Mäenpää III",
  artist: Wintersun,
  year: 2024,
  wiki: timePackage,
  src: {},
};

export const songRedHorizon: Song = {
  title: "Red Horizon (The Pirate Song)",
  release: albumSongsOfJariIII,
  src: { youtube: "hYKIONR-abc" },
  qualities: {
    // Done
    jari: 2,
    black: 2,
    death: 0,
    power: 1,
    thrash: 2,
    clean: 1,
    extreme: 3,
    choirs: 3,
    singalong: 2,
    riffs: 2,
    solos: 2,
    melodic: 2,
    energetic: 2,
    epic: 0,
    folk: 2,
    intense: 1,
    melancholic: 1,
  },
};

export const albumFantasyMetalProject: Album = {
  title: "Fantasy Metal Project",
  artist: Wintersun,
  year: 2024,
  wiki: timePackage,
  src: {},
};

export const songSteelOfTheGods: Song = {
  title: "Steel of the Gods",
  release: albumFantasyMetalProject,
  src: { youtube: "4x36OoFYGyE" },
  qualities: {
    // Done
    jari: 2,
    black: 1,
    death: 0,
    power: 2,
    thrash: 1,
    clean: 0,
    extreme: 3,
    choirs: 2,
    singalong: 2,
    riffs: 3,
    solos: 1,
    melodic: 2,
    energetic: 3,
    epic: 2,
    folk: 2,
    intense: 3,
    melancholic: 1,
  },
};

export const songFountainOfLife: Song = {
  title: "Fountain of Life",
  release: albumFantasyMetalProject,
  src: { youtube: "W6cys6aMZX0" },
  qualities: {
    // Done
    jari: 2,
    black: 0,
    death: 0,
    power: 1,
    thrash: 1,
    clean: 0,
    extreme: 2,
    choirs: 1,
    singalong: 0,
    riffs: 1,
    solos: 1,
    melodic: 1,
    energetic: 1,
    epic: 1,
    folk: 1,
    intense: 1,
    melancholic: 2,
  },
};

export const songTheDragonSong: Song = {
  title: "The Dragon Song",
  release: albumFantasyMetalProject,
  src: { youtube: "mwL5PVR8ODs" },
  qualities: {
    jari: 2,
    black: 2,
    death: 0,
    power: 2,
    thrash: 0,
    clean: 0,
    extreme: 3,
    choirs: 3,
    singalong: 2,
    riffs: 2,
    solos: 3,
    melodic: 3,
    energetic: 1,
    epic: 2,
    folk: 2,
    intense: 1,
    melancholic: 2,
  },
};
