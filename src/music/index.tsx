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

export type QualityInfo = { category: QualityCategory };

export const qualities: Record<Quality, QualityInfo> = {
  // Tiebreaker
  jari: { category: "jari" },
  // Genre
  black: { category: "genre" },
  death: { category: "genre" },
  folk: { category: "genre" },
  power: { category: "genre" },
  thrash: { category: "genre" },
  // Vocals
  clean: { category: "vocals" },
  extreme: { category: "vocals" },
  // Musical
  melodic: { category: "musical" },
  riffs: { category: "musical" },
  solos: { category: "musical" },
  // Characteristic
  energetic: { category: "character" },
  epic: { category: "character" },
  intense: { category: "character" },
  melancholic: { category: "character" },
};

export enum QualityValue {
  NONE = 0,
  SOME = 1,
  MORE = 2,
  MOST = 3,
}

export type QualityValues = Record<Quality, QualityValue>;

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
 