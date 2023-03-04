import { CloseRounded, Menu } from "@mui/icons-material";
import { Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function MuiDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="success"
        onClick={() => setDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign={"center"} role="presentation">
          <IconButton
            size="large"
            edge="start"
            color="success"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseRounded />
          </IconButton>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
