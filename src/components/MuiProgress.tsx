import { CircularProgress, LinearProgress } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={70} />
      <LinearProgress />
      <LinearProgress color="error" />
    </Stack>
  );
}
