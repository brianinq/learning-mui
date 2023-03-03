import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function MuiRadioButton() {
  return (
    <Box width={"250px"}>
      <FormControl>
        <FormLabel id="gender-label">Gender</FormLabel>
        <RadioGroup defaultValue={"female"} aria-labelledby="gender-label">
          <FormControlLabel
            label={"Female"}
            value="female"
            control={<Radio />}
          />
          <FormControlLabel label={"Male"} value="male" control={<Radio />} />
          <FormControlLabel label={"Other"} value="other" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
