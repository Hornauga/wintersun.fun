import { Album, Song } from "../../things";
import albumTimeI from "./albumTimeI";

export const albumTimeIInstrumental: Album = {
  title: albumTimeI.title + " (Instrumental)",
  artist: albumTimeI.artist,
  wiki: albumTimeI.wiki,
  year: albumTimeI.year,
  src: {},
};

export default albumTimeIInstrumental;

export const songWhenTimeFadesAway: Song = {
  release: albumTimeIInstrumental,
  title: "When Time Fades Away",
  src: { youtube: "1Sc1LIYlzuQ" },
  qualities: {
    // Done (normal with vocal stuff at 0)
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
  release: albumTimeIInstrumental,
  title: "Sons of Winter and Stars (Instrumental)",
  src: { youtube: "1Sc1LIYlzuQ?start=257" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 3,
    black: 1,
    death: 1,
    power: 3,
    thrash: 2,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
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
  release: albumTimeIInstrumental,
  title: "Land of Snow and Sorrow (Instrumental)",
  src: { youtube: "k1WqOsBRTwo" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 3,
    black: 1,
    death: 1,
    power: 1,
    thrash: 1,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
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
  release: albumTimeIInstrumental,
  title: "Darkness and Frost",
  src: { youtube: "68B3fhunbsU" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 2,
    black: 0,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
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
  release: albumTimeIInstrumental,
  title: "Time (Instrumental)",
  src: { youtube: "68B3fhunbsU?start=147" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 3,
    black: 1,
    death: 1,
    power: 2,
    thrash: 1,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
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
