import { Song } from "./things";

import * as albumEnsiferum from "./sources/ensiferum/albumEnsiferum";
import * as albumIron from "./sources/ensiferum/albumIron";
import * as albumWintersun from "./sources/wintersun/albumWintersun";
import * as albumTheForestSeasons from "./sources/wintersun/albumTheForestSeasons";
import * as albumTheForestSeasonsInstrumental from "./sources/wintersun/albumTheForestSeasonsInstrumental";
import * as albumTimeI from "./sources/wintersun/albumTimeI";
import * as albumTimeIInstrumental from "./sources/wintersun/albumTimeIInstrumental";
import {
  songWinterAcoustic,
  songWarning,
  songRedHorizon,
  songSteelOfTheGods,
} from "./sources/wintersun";
import { songMemory } from "./sources/misc";
import { songDevotion } from "./sources/misc/albumNuclearBlastAllstars";
import { songSaturdaySatan } from "./sources/misc/albumCallOfTheWild";

//
// Qualities
//

export type QualityName =
  // Tiebreaker
  | "jari"
  // Genre
  | "black"
  | "death"
  | "folk"
  | "power"
  | "thrash"
  // Vocals
  | "clean"
  | "extreme"
  | "singalong"
  // Musical
  | "melodic"
  | "riffs"
  | "solos"
  // Character
  | "energetic"
  | "epic"
  | "intense"
  | "melancholic";
// Rejected (for now) qualities
//   neoclassical
//   symphonic
//   choirs
//   chanting
//   churning
//   swelling
//   trumpeting
//   soothing
//   disturbing
//   fast
//   slow
//   uplifting
//   relentless
//   fullon
//   triumphant
//   powerful
//   rhythmic
//   dynamic

export enum Quality {
  NONE = 0,
  SOME = 1,
  MORE = 2,
  MOST = 3,
}

export type Qualities = Record<QualityName, Quality>;

export type QualityCategory =
  | "jari"
  | "genre"
  | "vocals"
  | "musical"
  | "character";

export type QualityInfo = {
  category: QualityCategory;
  label: string;
  long: string;
};

export const qualityInfos: Record<QualityName, QualityInfo> = {
  // Tiebreaker
  jari: {
    category: "jari",
    label: "Jari factor",
    long: 'the fact Jari\'s... "so good"',
  },
  // Genre
  black: {
    category: "genre",
    label: "Black metal",
    long: "the black metal genre",
  },
  death: {
    category: "genre",
    label: "Death metal",
    long: "the death metal genre",
  },
  folk: {
    category: "genre",
    label: "Folk metal",
    long: "the folk metal genre",
  },
  power: {
    category: "genre",
    label: "Power metal",
    long: "the power metal genre",
  },
  thrash: {
    category: "genre",
    label: "Thrash metal",
    long: "the thrash metal genre",
  },
  // Vocals
  clean: { category: "vocals", label: "Clean vocals", long: "clean vocals" },
  extreme: {
    category: "vocals",
    label: "Extreme vocals",
    long: "growling, screaming, squealing, and such",
  },
  singalong: {
    category: "vocals",
    label: "Singalong songs",
    long: "singalong vibes",
  },
  // Musical
  melodic: { category: "musical", label: "Melodies", long: "melodic music" },
  riffs: { category: "musical", label: "Riffs", long: "sick riffs" },
  solos: { category: "musical", label: "Solos", long: "amazing tasty solos" },
  // Characteristic
  energetic: {
    category: "character",
    label: "Energetic",
    long: "energetic music",
  },
  epic: { category: "character", label: "Epic", long: "epic music" },
  intense: { category: "character", label: "Intense", long: "intense music" },
  melancholic: {
    category: "character",
    label: "Melancholic",
    long: "melancholic music",
  },
};

//
// Preferences
//

export enum Preference {
  HATE = -2,
  DISLIKE = -1,
  NONE = 0,
  LIKE = 1,
  LOVE = 2,
}

export type Preferences = Record<QualityName, Preference>;

export function makePreferences(
  initialPreference: Preference = Preference.NONE,
): Preferences {
  return {
    jari: Preference.LIKE,
    black: initialPreference,
    death: initialPreference,
    folk: initialPreference,
    power: initialPreference,
    thrash: initialPreference,
    clean: initialPreference,
    extreme: initialPreference,
    singalong: initialPreference,
    melodic: initialPreference,
    riffs: initialPreference,
    solos: initialPreference,
    energetic: initialPreference,
    epic: initialPreference,
    intense: initialPreference,
    melancholic: initialPreference,
  };
}

export function recommendation(preferences: Preferences): Song[] {
  console.log(preferences); // TODO REMOVE
  return [
    albumWintersun.songWinterMadnessIntro,
    albumWintersun.songWinterMadness,
    albumWintersun.songBeyondTheDarkSun,
    albumWintersun.songSleepingStars,
    albumWintersun.songBattleAgainstTime,
    albumWintersun.songDeathAndTheHealing,
    albumWintersun.songStarchild,
    albumWintersun.songBeautifulDeath,
    albumWintersun.songSadnessAndHate,
    albumTimeI.songWhenTimeFadesAway,
    albumTimeI.songSonsOfWinterAndStars,
    albumTimeI.songLandOfSnowAndSorrow,
    albumTimeI.songDarknessAndFrost,
    albumTimeI.songTime,
    albumTimeIInstrumental.songWhenTimeFadesAway,
    albumTimeIInstrumental.songSonsOfWinterAndStars,
    albumTimeIInstrumental.songLandOfSnowAndSorrow,
    albumTimeIInstrumental.songDarknessAndFrost,
    albumTimeIInstrumental.songTime,
    albumIron.songFerrumAeternum,
    albumIron.songIron,
    albumIron.songSwordChant,
    albumIron.songMourningHeartInterlude,
    albumIron.songTaleOfRevenge,
    albumIron.songLostInDespair,
    albumIron.songSlayerOfLight,
    albumIron.songIntoBattle,
    albumIron.songLaiLaiHei,
    albumIron.songTears,
    albumIron.songBattery,
    albumEnsiferum.songIntro,
    albumEnsiferum.songHeroInADream,
    albumEnsiferum.songTokenOfTime,
    albumEnsiferum.songGuardiansOfFate,
    albumEnsiferum.songOldMan,
    albumEnsiferum.songLittleDreamer,
    albumEnsiferum.songAbandoned,
    albumEnsiferum.songWindrider,
    albumEnsiferum.songTreacherousGods,
    albumEnsiferum.songEternalWait,
    albumEnsiferum.songBattleSong,
    albumEnsiferum.songGoblinsDance,
    albumTheForestSeasons.songSpring,
    albumTheForestSeasons.songSummer,
    albumTheForestSeasons.songAutumn,
    albumTheForestSeasons.songWinter,
    albumTheForestSeasonsInstrumental.songSpring,
    albumTheForestSeasonsInstrumental.songSummer,
    albumTheForestSeasonsInstrumental.songAutumn,
    albumTheForestSeasonsInstrumental.songWinter,
    songWinterAcoustic,
    songWarning,
    songRedHorizon,
    songSteelOfTheGods,
    songSaturdaySatan,
    songMemory,
    songDevotion,
  ];
}
