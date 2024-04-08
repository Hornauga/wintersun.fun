export type Quality =
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
//neoclassical
//symphonic
//choirs
//chanting
//churning
//swelling
//trumpeting
//soothing
//disturbing
//fast
//slow
//uplifting
//relentless
//fullon
//triumphant
//powerful
//rhythmic
//dynamic

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

export const qualities: Record<Quality, QualityInfo> = {
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

export enum QualityValue {
  NONE = 0,
  SOME = 1,
  MORE = 2,
  MOST = 3,
}

export type QualityValues = Record<Quality, QualityValue>;
export type QualityPreferences = Record<Quality, Preference>;
export function makePreferences(
  initialPreference: Preference = Preference.NONE,
): QualityPreferences {
  return {
    jari: Preference.LIKE,
    black: initialPreference,
    death: initialPreference,
    folk: initialPreference,
    power: initialPreference,
    thrash: initialPreference,
    clean: initialPreference,
    extreme: initialPreference,
    melodic: initialPreference,
    riffs: initialPreference,
    solos: initialPreference,
    energetic: initialPreference,
    epic: initialPreference,
    intense: initialPreference,
    melancholic: initialPreference,
  };
}

export type Artist = string;

export interface Media {
  title: string;
  artist?: Artist;
  src?: {
    youtube?: string;
    spotify?: string;
  };
}

export interface Album extends Media {}

export interface Song extends Media {
  album?: Album;
  qualityValues: QualityValues;
}

export enum Preference {
  HATE = -2,
  DISLIKE = -1,
  NONE = 0,
  LIKE = 1,
  LOVE = 2,
}
