import { CopyAll, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

export default function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="navigation speed dial/ fab"
      sx={{ position: "absolute", bottom: "16px", right: "16px" }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
}
