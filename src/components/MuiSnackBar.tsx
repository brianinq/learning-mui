import {
  Alert,
  AlertProps,
  Box,
  Button,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { forwardRef, useState } from "react";

export default function MuiSnackBar() {
  const [open, setOpen] = useState(false);
  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
      return <Alert elevation={4} ref={ref} {...props} />;
    }
  );
  const closeHandler = (e: React.SyntheticEvent | Event, reason?: String) => {
    if (reason !== "clickaway") setOpen(false);
  };
  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      {/* <Snackbar
        message="The operation was successful"
        autoHideDuration={3000}
        open={open}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
      <Box sx={{ width: 300 }}>
        <Skeleton
          variant="rectangular"
          width={300}
          height={170}
          animation="wave"
        />
        <Skeleton />
        <Skeleton animation={false} />
        <Skeleton width={"50%"} />
      </Box>
      <Snackbar onClose={closeHandler} autoHideDuration={4000} open={open}>
        <SnackbarAlert onClose={closeHandler} severity="success">
          Submited succesfuly
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
}
