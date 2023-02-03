import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectItem({ item, setItem, items, label }) {
  // console.log(items);
  // console.log(item);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          value={item ? item : "Select"}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        >
          {items &&
            items.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>;
            })}
          {/* <MenuItem value={10}>{"Hello"}</MenuItem>
          <MenuItem value={10}>{"Hello"}</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
