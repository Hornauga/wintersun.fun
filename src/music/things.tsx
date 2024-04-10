// "things.tsx" is the best I could come up with
// I can't remember the word I actually want

import { Qualities } from "./quantify";

type Year = number;

interface HasWiki {
  wiki: URL;
}

interface HasTitle {
  title: string;
}

export interface Artist extends HasTitle, HasWiki {}

interface AudioMedia extends HasTitle {
  src: {
    youtube?: string;
    spotify?: string;
  };
}

export interface Album extends AudioMedia, HasWiki {
  artist: Artist;
  year: Year;
}

type Release = Album | { artist: Artist; year: Year };

export interface Song extends AudioMedia {
  release: Release;
  qualities: Qualities;
}
