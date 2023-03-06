import { Mail } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent="5" color="error">
        <Mail />
      </Badge>
      <Badge badgeContent="0" showZero color="success">
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary">
        <Mail />
      </Badge>
    </Stack>
  );
}
