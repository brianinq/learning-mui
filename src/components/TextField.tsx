import { RemoveRedEye } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

function MTextField() {
  return (
    <Stack direction={"column"} spacing={2}>
      <TextField color="success" required label="name"></TextField>
      <TextField color="error" size="small" label="name"></TextField>
      <TextField
        size="small"
        variant="filled"
        color="success"
        error
        required
        helperText="this field is required"
        label="name"
      ></TextField>
      <TextField variant="standard" color="success" label="name"></TextField>
      <TextField
        helperText="Enter password"
        label="password"
        type={"password"}
      ></TextField>
      <TextField
        helperText="Enter password"
        label="password"
        type={"password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
  );
}

export default MTextField;
