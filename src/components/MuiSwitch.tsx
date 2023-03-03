import { DarkMode } from "@mui/icons-material";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  const [DarkMode, setDarkMode] = useState(false);
  const sytles = DarkMode ? { backGround: "black" } : {};
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={DarkMode}
            color="success"
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
