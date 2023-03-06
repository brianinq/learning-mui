import { Check } from "@mui/icons-material";
import { Alert, AlertTitle } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={() => {}}>
        Error
      </Alert>
      <Alert severity="warning">Warning</Alert>
      <Alert severity="info">Info</Alert>
      <Alert severity="success">Success</Alert>
      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        Error
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Error</AlertTitle>
        Warning
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Error</AlertTitle>
        Info
      </Alert>
      <Alert
        variant="outlined"
        onClose={() => {}}
        severity="success"
        icon={<Check fontSize="inherit" />}
      >
        <AlertTitle>Error</AlertTitle>
        Success
      </Alert>
      <Alert variant="filled" severity="error">
        Error
      </Alert>
      <Alert variant="filled" severity="warning">
        Warning
      </Alert>
      <Alert variant="filled" severity="info">
        Info
      </Alert>
      <Alert variant="filled" severity="success">
        Success
      </Alert>
    </Stack>
  );
}
