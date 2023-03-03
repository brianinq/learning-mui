import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

function MuiCheckBox() {
  const [accept, setaccept] = useState<Boolean>(false);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Accept terms and  coditions"
          checked={accept}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setaccept(e.target.checked)
          }
          control={<Checkbox />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setaccept(e.target.checked)
          }
          checked={accept}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="html"
              label="HTML"
              control={<Checkbox />}
            />
            <FormControlLabel value="css" label="Css" control={<Checkbox />} />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
