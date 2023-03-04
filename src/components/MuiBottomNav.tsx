import { Favorite, Home, Person, Settings } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

export default function MuiBottomNav() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      showLabels
      onChange={(e, newVal) => setValue(newVal)}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favourites" icon={<Favorite />} />
      <BottomNavigationAction label="Account" icon={<Person />} />
      <BottomNavigationAction label="Settings" icon={<Settings />} />
    </BottomNavigation>
  );
}
