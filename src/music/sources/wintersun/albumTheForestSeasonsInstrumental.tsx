import { Album, Song } from "../../things";
import { albumTheForestSeasons } from "./albumTheForestSeasons";

export const albumTheForestSeasonsInstrumental: Album = {
  title: albumTheForestSeasons.title + " (Instrumental)",
  artist: albumTheForestSeasons.artist,
  year: albumTheForestSeasons.year,
  wiki: albumTheForestSeasons.wiki,
  src: albumTheForestSeasons.src,
};

export const songSpringInstrumental: Song = {
  release: albumTheForestSeasonsInstrumental,
  title: "Awaken from the Dark Slumber (Spring) (Instrumental)",
  src: { youtube: "wbq72xgsdwo", spotify: "479BAqWRmIPnzXWp4cbeH4" },
  qualities: {
    // Done (copy of non-instrumental with vocals 0)
    jari: 0,
    black: 3,
    death: 0,
    folk: 2,
    power: 1,
    thrash: 0,
    clean: 0,
    extreme: 0,
    singalong: 0,
    melodic: 1,
    riffs: 2,
    solos: 0,
    energetic: 2,
    epic: 2,
    intense: 2,
    melancholic: 2,
  },
};

export const songSummerInstrumental: Song = {
  release: albumTheForestSeasonsInstrumental,
  title: "The Forest That Weeps (Summer) (Instrumental)",
  src: { youtube: "kAZpX88stks", spotify: "4bqmtsRT4aU0vekZTspAUq" },
  qualities: {
    jari: 0,
    black: 0,
    death: 0,
    folk: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    singalong: 0,
    melodic: 0,
    riffs: 0,
    solos: 0,
    energetic: 0,
    epic: 0,
    intense: 0,
    melancholic: 0,
  },
};

export const songAutumnInstrumental: Song = {
  release: albumTheForestSeasonsInstrumental,
  title: "Eternall Darkness (Autumn) (Instrumental)",
  src: { youtube: "G6oRbo2YDXM", spotify: "3HBFFlGOxz4eSQ719VBarS" },
  qualities: {
    jari: 0,
    black: 0,
    death: 0,
    folk: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    singalong: 0,
    melodic: 0,
    riffs: 0,
    solos: 0,
    energetic: 0,
    epic: 0,
    intense: 0,
    melancholic: 0,
  },
};

export const songWinterInstrumental: Song = {
  release: albumTheForestSeasonsInstrumental,
  title: "Loneliness (Winter) (Instrumental)",
  src: { youtube: "z34CxDbywFE", spotify: "1MWR66elh7xBvrONTuqoun" },
  qualities: {
    jari: 0,
    black: 0,
    death: 0,
    folk: 0,
    power: 0,
    thrash: 0,
    clean: 0,
    extreme: 0,
    singalong: 0,
    melodic: 0,
    riffs: 0,
    solos: 0,
    energetic: 0,
    epic: 0,
    intense: 0,
    melancholic: 0,
  },
};
