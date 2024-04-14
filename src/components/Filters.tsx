import { Button, Typography, Box, Tooltip, Slider } from "@mui/material";

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
  showResults,
}: {
  preferences: Preferences;
  setPreference: (qualityName: QualityName, preference: Preference) => void;
  showResults: () => void;
}) {
  var categoryLast: QualityCategory | null = null;
  return (
    <Box>
      <Typography variant="body1" align="center">
        Let's figure out how you can best enjoy Wintersun!
      </Typography>
      <Typography variant="body1" align="justify">
        Below you will find sliders you can adjust to indicate your musical
        preferences. Once you've done that, you can press this button (also at
        the bottom of the page) to receive song recommendations:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained" onClick={showResults}>
          See song recommendations
        </Button>
      </Box>
      <Typography variant="body1" align="justify">
        Perhaps start by picking three things you love (for example: power
        metal, singalong songs, and folk music), move their respective sliders
        all the way to the right to indicate your love, and press the button to
        see some song recommendations.
      </Typography>
      <Typography variant="body1" align="justify">
        Next you could try tuning in your likes and dislikes for every single
        genre, vocal type, and so on, and see what happens! After that I have
        some fun suggestions: go <strong>beyond genre</strong> by leaving the
        GENRE sliders untouched, be <strong>positive</strong> by only moving
        sliders to the right, show off your <strong>negativity</strong> by only
        moving sliders to the left, or be a <strong>vocal elitist</strong> by
        only adjusting the vocal sliders.
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
        That's all of the available preferences for now!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained" onClick={showResults}>
          See song recommendations
        </Button>
      </Box>
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
      <FilterLabel qualityInfo={qualityInfo} preference={preference} />
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
    <Box
      marginTop="16px"
      marginBottom="0"
      display="flex"
      justifyContent="center"
    >
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
    </Box>
  );
}
