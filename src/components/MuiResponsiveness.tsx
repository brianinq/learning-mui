import { Box } from "@mui/material";
import React from "react";

export default function MuiResponsiveness() {
  return (
    <Box
      sx={{
        height: "300px",
        width: { xs: "100px", sm: "200px", md: "300px", lg: 400 },
        bgcolor: "#00d400",
      }}
    >
      MuiResponsiveness
    </Box>
  );
}
