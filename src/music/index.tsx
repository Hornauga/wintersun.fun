import { Preferences } from "./quantify";
import { Song } from "./things";

import * as albumEnsiferum from "./sources/ensiferum/albumEnsiferum";
import * as albumIron from "./sources/ensiferum/albumIron";
import * as albumWintersun from "./sources/wintersun/albumWintersun";

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
  ];
}
