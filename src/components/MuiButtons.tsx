import {
  Button,
  ButtonGroup,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import {
  AddAPhoto,
  DonutLarge,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Send,
} from "@mui/icons-material";

function MuiButtons() {
  const [formats, setFormats] = useState<String | null>();
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button href="https://google.com" variant="text">
            Click Me
          </Button>
          <Button variant="contained">Click Me</Button>
          <Button variant="outlined">Click Me</Button>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Button variant="contained">Primary</Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack display={"block"} spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button
            disableElevation
            variant="contained"
            size="large"
            endIcon={<DonutLarge />}
          >
            Large
          </Button>
          <Button
            variant="contained"
            disableElevation
            size="medium"
            startIcon={<Send />}
          >
            Medium
          </Button>
          <IconButton aria-label="photo" color="error">
            <AddAPhoto />
          </IconButton>
        </Stack>
        <Stack direction={"row"}>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            color="warning"
          >
            <Button>LEFT</Button>
            <Button>CENTER</Button>
            <Button>RIGHT</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction={"row"}>
          <ToggleButtonGroup
            value={formats}
            onChange={(
              e: React.MouseEvent<HTMLElement>,
              updated: String | null
            ) => {
              setFormats(updated);
            }}
            color="secondary"
            exclusive
          >
            <ToggleButton value={"bold"}>
              <FormatBold></FormatBold>
            </ToggleButton>
            <ToggleButton value={"underlined"}>
              <FormatUnderlined></FormatUnderlined>
            </ToggleButton>
            <ToggleButton value={"italic"}>
              <FormatItalic></FormatItalic>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiButtons;
