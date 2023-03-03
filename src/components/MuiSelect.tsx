import { MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function MuiSelect() {
  const [country, setCountry] = useState<String>("");
  const [countries, setCountries] = useState<String[]>([]);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as String);
  };
  const MultiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCountries(typeof val === "string" ? val.split(",") : val);
  };
  return (
    <Stack direction={"column"} spacing={10}>
      <Box width={"250px"}>
        <TextField
          label="Select Coutry"
          select
          onChange={handler}
          value={country}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="Uk">United Kingdom</MenuItem>
          <MenuItem value="KE">Kenya</MenuItem>
        </TextField>
      </Box>
      <Box width={"250px"}>
        <Typography variant="h4" gutterBottom>
          MulTiSelect
        </Typography>
        <TextField
          label="Select Coutry"
          select
          onChange={MultiHandler}
          value={countries}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="Uk">United Kingdom</MenuItem>
          <MenuItem value="KE">Kenya</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default MuiSelect;
