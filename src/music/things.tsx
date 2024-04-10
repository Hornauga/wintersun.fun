// "things.tsx" is the best I could come up with
// I can't remember the word I actually want

import { Qualities } from "./quantify";

export interface Artist {
  title: string;
  wikipedia: URL;
}

export interface Media {
  title: string;
  artist?: Artist;
  src?: {
    youtube?: string;
    spotify?: string;
  };
}

export interface Album extends Media {
  year: number;
  wikipedia: URL;
}

export interface Song extends Media {
  album?: Album;
  qualities: Qualities;
}
