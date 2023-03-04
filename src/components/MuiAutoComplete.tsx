import { Autocomplete, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function MuiAutoComplete() {
  const skills = ["Html", "css", "Js"];
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField label="Skills" {...params} />}
      ></Autocomplete>
      <Autocomplete
        options={skills}
        freeSolo
        renderInput={(params) => <TextField {...params} />}
      ></Autocomplete>
    </Stack>
  );
}

export default MuiAutoComplete;
