import { Song } from "../../music/things";

import SongDisplay from "./SongDisplay";
import Ensiferum from "./Ensiferum";
import TimeI from "./TimeI";
import Vocals from "./Vocals";
import WayOfTheFire from "./WayOfTheFire";
import Storm from "./Storm";
import OneWithTheShadows from "./OneWithTheShadows";
import DefaultTimePackage from "./DefaultTimePackage";
import LegendaryEarlyDemo from "./LegendaryEarlyDemo";

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
import {
  songFountainOfLife,
  songRedHorizon,
  songSteelOfTheGods,
  songTheDragonSong,
} from "../../music/sources/wintersun";

const articleVocals = <Vocals />;
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
  [songDevotion.title, articleVocals],
  [songSaturdaySatan.title, articleVocals],
  [songSteelOfTheGods.title, <LegendaryEarlyDemo song={songSteelOfTheGods} />],
  [songTheDragonSong.title, <LegendaryEarlyDemo song={songTheDragonSong} />],
  [songRedHorizon.title, <LegendaryEarlyDemo song={songRedHorizon} />],
  [songFountainOfLife.title, <LegendaryEarlyDemo song={songFountainOfLife} />],
]);

function songArticleHelper(song: Song) {
  if ("title" in song.release) {
    if (["Ensiferum", "Iron"].includes(song.release.title))
      return <Ensiferum />;
    if (song.release.title.startsWith("Time I")) return <TimeI />;
  }
  return articles.get(song.title) ?? <DefaultTimePackage />;
}
