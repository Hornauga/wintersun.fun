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
  songFountainOfLife,
  songTheDragonSong,
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
  | "power"
  | "thrash"
  // Vocals
  | "clean"
  | "extreme"
  | "choirs"
  | "singalong"
  // Other
  | "riffs"
  | "solos"
  | "melodic"
  | "energetic"
  | "epic"
  | "folk"
  | "intense"
  | "melancholic";
// Rejected (for now) qualities
//   neoclassical
//   symphonic
//   folk
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

export type QualityCategory = "jari" | "genre" | "vocals" | "other";

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
  choirs: {
    category: "vocals",
    label: "Choirs or chanting",
    long: "choirs/chanting",
  },
  singalong: {
    category: "vocals",
    label: "Singalong songs",
    long: "singalong vibes",
  },
  // Other
  riffs: { category: "other", label: "Riffs", long: "sick riffs" },
  solos: { category: "other", label: "Solos", long: "amazing tasty solos" },
  melodic: { category: "other", label: "Melodic music", long: "melodic music" },
  energetic: {
    category: "other",
    label: "Energetic music",
    long: "energetic music",
  },
  epic: { category: "other", label: "Epic music", long: "epic music" },
  folk: {
    category: "other",
    label: "Folky music",
    long: "folky music",
  },
  intense: { category: "other", label: "Intense music", long: "intense music" },
  melancholic: {
    category: "other",
    label: "Melancholic music",
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
    power: initialPreference,
    thrash: initialPreference,
    clean: initialPreference,
    extreme: initialPreference,
    choirs: initialPreference,
    singalong: initialPreference,
    riffs: initialPreference,
    solos: initialPreference,
    melodic: initialPreference,
    energetic: initialPreference,
    epic: initialPreference,
    folk: initialPreference,
    intense: initialPreference,
    melancholic: initialPreference,
  };
}

//
// Song sources
//

const allSongs: Song[] = [
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
  //albumTimeIInstrumental.songWhenTimeFadesAway,
  albumTimeIInstrumental.songSonsOfWinterAndStars,
  albumTimeIInstrumental.songLandOfSnowAndSorrow,
  //albumTimeIInstrumental.songDarknessAndFrost,
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
  songFountainOfLife,
  songTheDragonSong,
  songSaturdaySatan,
  songMemory,
  songDevotion,
];

// TODO: This isn't exactly science,
//       but maybe we can improve our recommendation
function score(preferences: Preferences, song: Song): number {
  var score = 0;
  var qualityName: QualityName, preference: Preference, quality: Quality;
  for (qualityName in preferences) {
    preference = preferences[qualityName];
    quality = song.qualities[qualityName];
    if (preference === Preference.NONE || quality === Quality.NONE) continue; // Does nothing
    if (qualityName === "jari") {
      score += quality; // Only nudge
      continue;
    }
    switch (preference) {
      case Preference.HATE:
        switch (quality) {
          case Quality.SOME:
            score -= 5;
            break;
          case Quality.MORE:
            score -= 8;
            break;
          case Quality.MOST:
            score -= 13;
            break;
        }
        break;
      case Preference.DISLIKE:
        switch (quality) {
          case Quality.SOME:
            score -= 3;
            break;
          case Quality.MORE:
            score -= 5;
            break;
          case Quality.MOST:
            score -= 8;
            break;
        }
        break;
      case Preference.LIKE:
        switch (quality) {
          case Quality.SOME:
            score += 4;
            break;
          case Quality.MORE:
            score += 6;
            break;
          case Quality.MOST:
            score += 9;
            break;
        }
        break;
      case Preference.LOVE:
        switch (quality) {
          case Quality.SOME:
            score += 6;
            break;
          case Quality.MORE:
            score += 9;
            break;
          case Quality.MOST:
            score += 14;
            break;
        }
        break;
    }
  }
  return score;
}

// TODO: we will pass some information on to users
//export function recommendation(preferences: Preferences): {song: Song, score: number}[] {
export function recommendation(preferences: Preferences): Song[] {
  const result = allSongs.map((song) => ({
    song: song,
    score: score(preferences, song),
  }));
  result.sort((a, b) => b.score - a.score);
  return result.map((e) => e.song);
}
