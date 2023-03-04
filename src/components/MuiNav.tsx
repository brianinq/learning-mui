import {
  ArrowDownward,
  CatchingPokemon,
  ExpandMore,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export default function MuiNav() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" size="large">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          DeckSTream
        </Typography>
        <Stack
          textAlign={"center"}
          alignItems="center"
          direction={"row"}
          spacing={2}
        >
          <Link underline="none" variant="button" href="#" color="inherit">
            Pricing
          </Link>
          <Link underline="none" variant="button" href="#" color="inherit">
            About
          </Link>
          <Link underline="none" variant="button" href="#" color="inherit">
            Register
          </Link>
          <Button
            color="inherit"
            onClick={(e) => {
              setAnchor(e.currentTarget);
              setOpen(true);
            }}
            endIcon={<ExpandMore />}
          >
            Featured
          </Button>
        </Stack>
        <Menu
          open={open}
          id="menu"
          anchorEl={anchor}
          onClick={(e) => {
            setOpen(false);
            setAnchor(e.currentTarget);
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={(e) => {
              setOpen(false);
              setAnchor(e.currentTarget);
            }}
          >
            Blog
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setAnchor(e.currentTarget);
              setOpen(false);
            }}
          >
            Podcast
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
