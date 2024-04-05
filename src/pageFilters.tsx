import { Typography, Box, FormControl, Slider } from "@mui/material";
import { useState } from "react";

function FilterLabel(filterItem: FilterItem, preference: Preference) {
  var result = `${filterItem.label}? `;
  switch (preference) {
    case -2:
      result += "😩 I HATE";
      break;
    case -1:
      //result += "🙁 I dislike";
      //result += "😟 I dislike";
      result += "😑 I dislike";
      break;
    case 0:
      //result += "😗 I am OK with";
      result += "😐 I am OK with";
      break;
    case 1:
      // result += "😊 I like";
      result += "🙂 I like";
      break;
    case 2:
      result += "😍 I LOVE";
      break;
  }
  result += " " + filterItem.longForm;
  return <Typography variant="body1">{result}</Typography>;
}

function Filter({
  filterStates,
  filterItem,
}: {
  filterStates: Map<string, StateAndSetter>;
  filterItem: FilterItem;
}) {
  return (
    <Box>
      <Typography>
        {FilterLabel(
          filterItem,
          (filterStates.get(filterItem.id) ?? { state: 0 }).state,
        )}
      </Typography>

      <Slider
        sx={{ width: "100%" }}
        valueLabelDisplay="off"
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
      <header>
        <Typography variant="h1" align="center">
          Filtering
        </Typography>
        <Typography variant="subtitle1" align="center">
          Let's figure out how you can best enjoy Wintersun
        </Typography>
      </header>
      <Typography variant="body1">
        Indicate your preferences for the following
      </Typography>
      <FormControl>
        {filterItems.map((filterItem) => (
          <Filter filterStates={filterStates} filterItem={filterItem} />
        ))}
      </FormControl>
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
