import { Typography, Box, Tooltip, Slider } from "@mui/material";
import { useState } from "react";
import { loremIpsum } from "./misc";

function valueLabelFormat(value: number) {
  switch (value) {
    case -2:
      return "HATE";
    case -1:
      return "Dislike";
    case 0:
      return "Neutral";
    case 1:
      return "Like";
    case 2:
      return "LOVE";
  }
}

function FilterLabel({
  filterItem,
  preference,
}: {
  filterItem: FilterItem;
  preference: Preference;
}) {
  var tooltip = "";
  var emoji = "";
  var emoji2 = "";
  switch (preference) {
    case -2:
      tooltip += "I HATE";
      emoji = "😩";
      emoji2 = "💩";
      break;
    case -1:
      tooltip += "I dislike";
      // emoji = "🙁";
      // emoji = "😟";
      emoji = "😑";
      emoji2 = "👎";
      break;
    case 0:
      tooltip += "I am OK with";
      // emoji = "😗";
      emoji = "😐";
      emoji2 = "😐";
      break;
    case 1:
      tooltip += "I like";
      // emoji = "😊";
      emoji = "🙂";
      emoji2 = "👍";
      break;
    case 2:
      tooltip += "I LOVE";
      emoji = "😍";
      emoji2 = "⭐";
      break;
  }
  tooltip += " " + filterItem.longForm;
  return (
    <Tooltip title={tooltip} arrow>
      <Typography variant="h5" align="center">
        {emoji} {filterItem.label} {emoji2}
      </Typography>
    </Tooltip>
  );
}

function Filter({
  filterStates,
  filterItem,
}: {
  filterStates: Map<string, StateAndSetter>;
  filterItem: FilterItem;
}) {
  return (
    <Box flexDirection="column">
      <Box marginTop="32px">
        <FilterLabel
          filterItem={filterItem}
          preference={(filterStates.get(filterItem.id) ?? { state: 0 }).state}
        />
      </Box>
      <Slider
        sx={{ width: "80%", margin: "32px 10% 0 10%" }}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        color="secondary"
        marks
        step={1}
        min={-2}
        max={2}
        value={(filterStates.get(filterItem.id) ?? { state: 0 }).state}
        onChange={(_, val) =>
          (filterStates.get(filterItem.id) ?? { setState: (_) => {} }).setState(
            val as Preference,
          )
        }
      />
    </Box>
  );
}

export function FiltersPage() {
  const filterStates = new Map<string, StateAndSetter>();
  for (const filterItem of filterItems) {
    const [state, setState] = useState<Preference>(0);
    filterStates.set(filterItem.id, { state, setState });
  }
  return (
    <>
      <Typography variant="h4" align="center">
        Filtering
      </Typography>
      <Typography variant="body1" align="justify">
        Let's figure out how you can best enjoy Wintersun. {loremIpsum}
      </Typography>
      {filterItems.map((filterItem) => (
        <Filter filterStates={filterStates} filterItem={filterItem} />
      ))}
      <Typography variant="body1" align="justify">
        That's all of the available filters for now. {loremIpsum}
      </Typography>
    </>
  );
}

interface FilterItem {
  id: string;
  label: string;
  longForm: string;
}

var filterItems: FilterItem[] = [
  {
    id: "black",
    label: "Black metal",
    longForm: "the black metal genre",
  },
  {
    id: "death",
    label: "Death metal",
    longForm: "the death metal genre",
  },
  {
    id: "folk",
    label: "Folk metal",
    longForm: "the folk metal genre",
  },
  {
    id: "power",
    label: "Power metal",
    longForm: "the power metal genre",
  },
  {
    id: "thrash",
    label: "Thrash metal",
    longForm: "the thrash metal genre",
  },
  {
    id: "clean",
    label: "Clean vocals",
    longForm: "clean vocals",
  },
  {
    id: "unclean",
    label: "Extreme vocals",
    longForm: "growling, screaming, squealing, and such",
  },
  {
    id: "riff",
    label: "Riffs",
    longForm: "sick riffs",
  },
  {
    id: "melodies",
    label: "Melodies",
    longForm: "melodic music",
  },
  {
    id: "energy",
    label: "Energy",
    longForm: "energetic music",
  },
];

type Preference = -2 | -1 | 0 | 1 | 2;

interface StateAndSetter {
  state: Preference;
  setState: React.Dispatch<React.SetStateAction<Preference>>;
}
