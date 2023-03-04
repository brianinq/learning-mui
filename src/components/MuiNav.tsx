import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiNav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" size="large">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          DeckSTream
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Featured</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Register</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
