import { Box, Grid, Paper } from "@mui/material";
import React from "react";

function MuiGrids() {
  return (
    <Paper elevation={10} sx={{ padding: "20px" }}>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4}>
          <Box bgcolor="blue" p={3} color="white">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor="blue" p={3} color="white">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor="blue" p={3} color="white">
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor="blue" p={3} color="white">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiGrids;
