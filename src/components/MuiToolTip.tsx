import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiToolTip() {
  return (
    <Tooltip title="remove element" placement="right" arrow enterDelay={300}>
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
}
