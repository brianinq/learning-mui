import { ArrowBack, Check, Person } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function MuiList() {
  return (
    <Box width={"400px"} bgcolor="#e8e8e8">
      <List>
        <ListItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          <ListItemText
            primary="List Item primary text"
            secondary="Aditional information on the seconsary text"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          <ListItemText
            primary="List Item primary text"
            secondary="Aditional information on the seconsary text"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>

          <ListItemText
            primary="List Item primary text"
            secondary="Aditional information on the seconsary text"
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ArrowBack />
            </ListItemIcon>
            <ListItemText primary="Back" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
