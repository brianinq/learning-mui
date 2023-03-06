import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React from "react";

export default function MuiLoadingButton() {
  return (
    <Stack direction={"row"} spacing={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
        Get Data
      </LoadingButton>
      <LoadingButton loading variant="contained">
        Submit
      </LoadingButton>
      <LoadingButton startIcon={<Save />} variant="contained">
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="contained"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
}
