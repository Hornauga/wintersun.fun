import { Song } from "../../music/things";

import SongDisplay from "./SongDisplay";
import Ensiferum from "./Ensiferum";
import TimeI from "./TimeI";
import Vocals from "./Vocals";
import WayOfTheFire from "./WayOfTheFire";
import Storm from "./Storm";
import OneWithTheShadows from "./OneWithTheShadows";
import DefaultTimePackage from "./DefaultTimePackage";

import { songDevotion } from "../../music/sources/misc/albumNuclearBlastAllstars";
import { songSaturdaySatan } from "../../music/sources/misc/albumCallOfTheWild";
import {
  songBattleAgainstTime,
  songBeautifulDeath,
  songBeyondTheDarkSun,
  songDeathAndTheHealing,
  songSadnessAndHate,
  songSleepingStars,
  songStarchild,
  songWinterMadness,
} from "../../music/sources/wintersun/albumWintersun";

const articleWayOfTheFire = <WayOfTheFire />;
const articleOneWithTheShadows = <OneWithTheShadows />;
const articleStorm = <Storm />;

export function SongArticle({ song }: { song: Song }): JSX.Element {
  return (
    <>
      <SongDisplay song={song}></SongDisplay>
      {songArticleHelper(song)}
    </>
  );
}

const articles: Map<string, JSX.Element> = new Map([
  [songWinterMadness.title, articleWayOfTheFire],
  [songBeyondTheDarkSun.title, articleWayOfTheFire],
  [songBattleAgainstTime.title, articleWayOfTheFire],
  [songStarchild.title, articleWayOfTheFire],
  [songSleepingStars.title, articleOneWithTheShadows],
  [songDeathAndTheHealing.title, articleOneWithTheShadows],
  [songSadnessAndHate.title, articleOneWithTheShadows],
  [songBeautifulDeath.title, articleStorm],
]);

function songArticleHelper(song: Song) {
  if ("title" in song.release) {
    if (["Ensiferum", "Iron"].includes(song.release.title))
      return <Ensiferum />;
    if (song.release.title.startsWith("Time I")) return <TimeI />;
  }
  if (song === songDevotion || song === songSaturdaySatan) return <Vocals />;
  return articles.get(song.title) ?? <DefaultTimePackage />;
}
