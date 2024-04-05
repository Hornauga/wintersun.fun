import { Typography, Box, FormControl, Slider } from "@mui/material";
import { useState } from "react";

function FilterLabel(filterItem: FilterItem, preference: Preference) {
  var result = `${filterItem.label}? `;
  switch (preference) {
    case -2:
      result += "😭 I HATE";
      break;
    case -1:
      result += "🙁 I dislike";
      break;
    case 0:
      result += "😐 I am OK with";
      break;
    case 1:
      result += "🙂 I like";
      break;
    case 2:
      result += "🤩 I LOVE";
      break;
  }
  result += " " + filterItem.longForm;
  return <Typography variant="body1">{result}</Typography>;
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
        <Typography variant="subtitle1" align="center" gutterBottom>
          Let's figure out how you can best enjoy Wintersun
        </Typography>
        {/* <Typography variant="h4">
              &#x1F62D;&#x1F621;&#x1F641;&#x1F642;&#x1F610;&#x1F600;&#x1F60D;&#x1F929;
            </Typography> */}
      </header>
      <Typography variant="body1">
        Indicate your preferences for the following
      </Typography>
      <FormControl>
        {filterItems.map((item) => (
          <Box>
            {FilterLabel(
              item,
              (filterStates.get(item.id) ?? { state: 0 }).state,
            )}
            <Slider
              valueLabelDisplay="off"
              color="secondary"
              marks
              step={1}
              min={-2}
              max={2}
              value={(filterStates.get(item.id) ?? { state: 0 }).state}
              onChange={(_, val) =>
                (filterStates.get(item.id) ?? { setState: (_) => {} }).setState(
                  val as Preference,
                )
              }
            />
          </Box>
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
];

type Preference = -2 | -1 | 0 | 1 | 2;

interface StateAndSetter {
  state: Preference;
  setState: React.Dispatch<React.SetStateAction<Preference>>;
}
