import { Album, Song } from "../../things";
import { albumTheForestSeasons } from "./albumTheForestSeasons";

export const albumTheForestSeasonsInstrumental: Album = {
  title: albumTheForestSeasons.title + " (Instrumental)",
  artist: albumTheForestSeasons.artist,
  year: albumTheForestSeasons.year,
  wiki: albumTheForestSeasons.wiki,
  src: albumTheForestSeasons.src,
};

export default albumTheForestSeasonsInstrumental;

export const songSpring: Song = {
  release: albumTheForestSeasonsInstrumental,
  title: "Awaken from the Dark Slumber (Spring) (Instrumental)",
  src: { youtube: "wbq72xgsdwo", spotify: "479BAqWRmIPnzXWp4cbeH4" },
  qualities: {
    // Done (normal with vocal stuff at 0)
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
  release: albumTheForestSeasonsInstrumental,
  title: "The Forest That Weeps (Summer) (Instrumental)",
  src: { youtube: "kAZpX88stks", spotify: "4bqmtsRT4aU0vekZTspAUq" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 2,
    black: 3,
    death: 1,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
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
  release: albumTheForestSeasonsInstrumental,
  title: "Eternall Darkness (Autumn) (Instrumental)",
  src: { youtube: "G6oRbo2YDXM", spotify: "3HBFFlGOxz4eSQ719VBarS" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 2,
    black: 3,
    death: 2,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
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
  release: albumTheForestSeasonsInstrumental,
  title: "Loneliness (Winter) (Instrumental)",
  src: { youtube: "z34CxDbywFE", spotify: "1MWR66elh7xBvrONTuqoun" },
  qualities: {
    // Done (normal with vocal stuff at 0)
    jari: 2,
    black: 2,
    death: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    choirs: 0,
    singalong: 0,
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
