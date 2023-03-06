import { Stack, TextField, TextFieldProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import { DateTimePicker, TimeClock } from "@mui/x-date-pickers";

export default function MuiDatePicker() {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={4} width={250}>
          <DateTimePicker label="Date of birth" value={date} />
        </Stack>
      </LocalizationProvider>
    </>
  );
}
