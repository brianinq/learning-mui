import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function MuiLayout() {
  return (
    <Stack>
      <Box
        component={"main"}
        sx={{
          background: "#008",
          color: "white",
          height: "100px",
          padding: "16px",
          "&:hover": {
            background: "#00b",
          },
        }}
      >
        Box
      </Box>
    </Stack>
  );
}

export default MuiLayout;
