import { Typography, Box, Tooltip, Slider } from "@mui/material";

import {
  qualityInfos,
  QualityName,
  QualityCategory,
  QualityInfo,
  Preferences,
  Preference,
} from "../music/quantify";

export default function Filters({
  preferences,
  setPreference,
}: {
  preferences: Preferences;
  setPreference: (qualityName: QualityName, preference: Preference) => void;
}) {
  var categoryLast: QualityCategory | null = null;
  return (
    <Box>
      <Typography variant="h4" align="center">
        Filter by preference
      </Typography>
      <Typography variant="body1" align="justify">
        Let's figure out how you can best enjoy Wintersun! Simply adjust any or
        all of the filters below to your preference;{" "}
        <strong>left if you dislike</strong> the thing, or{" "}
        <strong>right if you like</strong> the thing. Then press{" "}
        <strong>GO!</strong> (top right) to see the results.
      </Typography>
      {Object.entries(preferences).map(([qualityName, preference]) => {
        if ((qualityName as QualityName) === "jari") return;
        const qualityInfo = qualityInfos[qualityName as QualityName];
        var categoryHeader;
        if (qualityInfo.category !== categoryLast) {
          categoryLast = qualityInfo.category;
          categoryHeader = (
            <Typography variant="h4" align="center">
              {qualityInfo.category.toUpperCase()}
            </Typography>
          );
        }
        return (
          <>
            {categoryHeader}
            <Filter
              key={qualityName} // I don't know why I suddenly need this
              qualityInfo={qualityInfo}
              preference={preference}
              setPreference={(newPreference: Preference) =>
                setPreference(qualityName as QualityName, newPreference)
              }
            />
          </>
        );
      })}
      <Typography variant="body1" align="center">
        That's all of the available filters for now!
      </Typography>
    </Box>
  );
}

function Filter({
  qualityInfo,
  preference,
  setPreference,
}: {
  qualityInfo: QualityInfo;
  preference: Preference;
  setPreference: (preference: Preference) => void;
}) {
  return (
    <Box flexDirection="column">
      <Box marginTop="32px" display="flex" justifyContent="center">
        <FilterLabel qualityInfo={qualityInfo} preference={preference} />
      </Box>
      <Slider
        sx={{ width: "80%", margin: "0 10% 0 10%" }}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        color="secondary"
        marks
        track={false}
        step={1}
        min={-2}
        max={2}
        value={preference}
        onChange={(_, val) => setPreference(val as Preference)}
      />
    </Box>
  );
}

function valueLabelFormat(value: Preference) {
  // Slider tooltip label
  switch (value) {
    case Preference.HATE:
      return "HATE";
    case Preference.DISLIKE:
      return "Dislike";
    case Preference.NONE:
      return "Neutral";
    case Preference.LIKE:
      return "Like";
    case Preference.LOVE:
      return "LOVE";
  }
}

function FilterLabel({
  qualityInfo,
  preference,
}: {
  qualityInfo: QualityInfo;
  preference: Preference;
}) {
  var tooltip = "";
  var emoji = "";
  //var emoji2 = ""; // Emoji we could use in future
  switch (preference) {
    case Preference.HATE:
      tooltip += "I HATE";
      emoji = "😩";
      //emoji2 = "💩";
      break;
    case Preference.DISLIKE:
      tooltip += "I dislike";
      // emoji = "🙁";
      // emoji = "😟";
      emoji = "😑";
      //emoji2 = "👎";
      break;
    case Preference.NONE:
      tooltip += "I am OK with";
      // emoji = "😗";
      emoji = "😐";
      //emoji2 = "😐";
      break;
    case Preference.LIKE:
      tooltip += "I like";
      // emoji = "😊";
      emoji = "🙂";
      //emoji2 = "👍";
      break;
    case Preference.LOVE:
      tooltip += "I LOVE";
      emoji = "😍";
      //emoji2 = "⭐";
      break;
  }
  tooltip += " " + qualityInfo.long;
  return (
    <Tooltip title={tooltip} placement="top" arrow>
      <Box display="flex" justifyContent="space-between" width="65%">
        <Box alignContent="center" fontSize="32px">
          {emoji}
        </Box>
        <Typography variant="h6" align="center" display="block">
          {qualityInfo.label}
        </Typography>
        <Box alignContent="center" fontSize="32px">
          {emoji}
        </Box>
      </Box>
    </Tooltip>
  );
}
