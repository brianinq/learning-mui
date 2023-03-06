import { Face } from "@mui/icons-material";
import { Avatar, Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiChip() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" onDelete={() => {}} />
      <Chip label="Chip" size="small" />
      <Chip label="Chip outlined" variant="outlined" />
      <Chip
        label="Chip outlined"
        color="primary"
        variant="outlined"
        avatar={<Avatar>BK</Avatar>}
      />
      <Chip
        label="Chip outlined"
        color="primary"
        variant="outlined"
        icon={<Face />}
      />
    </Stack>
  );
}
