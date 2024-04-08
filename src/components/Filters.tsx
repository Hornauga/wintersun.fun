//import { Typography, Box, Tooltip, Slider } from "@mui/material";
import { Typography } from "@mui/material";
import { loremIpsum } from "../misc";
import { Quality, Preference, QualityPreferences } from "../music";

//function valueLabelFormat(value: Preference) {
//  // Slider tooltip label
//  switch (value) {
//    case Preference.HATE:
//      return "HATE";
//    case Preference.DISLIKE:
//      return "Dislike";
//    case Preference.NONE:
//      return "Neutral";
//    case Preference.LIKE:
//      return "Like";
//    case Preference.LOVE:
//      return "LOVE";
//  }
//}

//function FilterLabel({
//  filterItem,
//  preference,
//}: {
//  filterItem: FilterItem;
//  preference: Preference;
//}) {
//  var tooltip = "";
//  var emoji = "";
//  var emoji2 = "";
//  switch (preference) {
//    case -2:
//      tooltip += "I HATE";
//      emoji = "😩";
//      emoji2 = "💩";
//      break;
//    case -1:
//      tooltip += "I dislike";
//      // emoji = "🙁";
//      // emoji = "😟";
//      emoji = "😑";
//      emoji2 = "👎";
//      break;
//    case 0:
//      tooltip += "I am OK with";
//      // emoji = "😗";
//      emoji = "😐";
//      emoji2 = "😐";
//      break;
//    case 1:
//      tooltip += "I like";
//      // emoji = "😊";
//      emoji = "🙂";
//      emoji2 = "👍";
//      break;
//    case 2:
//      tooltip += "I LOVE";
//      emoji = "😍";
//      emoji2 = "⭐";
//      break;
//  }
//  tooltip += " " + filterItem.longForm;
//  return (
//    <Tooltip title={tooltip} arrow>
//      <Typography variant="h5" align="center">
//        {emoji} {filterItem.label} {emoji2}
//      </Typography>
//    </Tooltip>
//  );
//}

export default function Filters({
  preferences,
  setPreference,
}: {
  preferences: QualityPreferences;
  setPreference: (quality: Quality, preference: Preference) => void;
}) {
  console.log(setPreference);
  return (
    <>
      <Typography variant="h4" align="center">
        Filtering
      </Typography>
      <Typography variant="body1" align="justify">
        Let's figure out how you can best enjoy Wintersun. {loremIpsum}
      </Typography>
      {Object.entries(preferences).map(([key, value]) => {
        <Typography>
          {key}: {value}
        </Typography>;
      })}
      <Typography variant="body1" align="justify">
        That's all of the available filters for now. {loremIpsum}
      </Typography>
    </>
  );
}

//  return (
//    <Box flexDirection="column">
//      <Box marginTop="32px">
//        <FilterLabel
//          filterItem={filterItem}
//          preference={(filterStates.get(filterItem.id) ?? { state: 0 }).state}
//        />
//      </Box>
//      <Slider
//        sx={{ width: "80%", margin: "32px 10% 0 10%" }}
//        valueLabelDisplay="auto"
//        valueLabelFormat={valueLabelFormat}
//        color="secondary"
//        marks
//        step={1}
//        min={-2}
//        max={2}
//        value={(filterStates.get(filterItem.id) ?? { state: 0 }).state}
//        onChange={(_, val) =>
//          (filterStates.get(filterItem.id) ?? { setState: (_) => {} }).setState(
//            val as Preference,
//          )
//        }
//      />
//    </Box>
//  );
//}
//
//function Filter() {
//  var filters:  = [];
//  filters.concat()
//  for (const filterItem of filterItems) {
//    const [state, setState] = useState<Preference>(0);
//    filterStates.set(filterItem.id, { state, setState });
//  }
//  return (
//    <>
//      <Typography variant="h4" align="center">
//        Filtering
//      </Typography>
//      <Typography variant="body1" align="justify">
//        Let's figure out how you can best enjoy Wintersun. {loremIpsum}
//      </Typography>
//      {filterItems.map((filterItem) => (
//        <Filter filterStates={filterStates} filterItem={filterItem} />
//      ))}
//      <Typography variant="body1" align="justify">
//        That's all of the available filters for now. {loremIpsum}
//      </Typography>
//    </>
//  );
//}
