import { Favorite } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab } from "@mui/material";
import React, { useState } from "react";

export default function MuiTabs() {
  const [value, setValue] = useState("1");
  return (
    <Box>
      <TabContext value={value}>
        <Paper elevation={1}>
          <TabList
            onChange={(e, newVal) => setValue(newVal)}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab 1"
              value={"1"}
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab 2" value={"2"} disabled />
            <Tab label="Tab 3" value={"3"} />
            <Tab label="Tab 4" value={"4"} />
            <Tab label="Tab 5" value={"5"} />
          </TabList>
        </Paper>
        <TabPanel value="1">Tab one</TabPanel>
        <TabPanel value="2">Tab Two</TabPanel>
        <TabPanel value="3">Tab Three</TabPanel>
      </TabContext>
    </Box>
  );
}
