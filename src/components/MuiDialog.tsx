import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

export default function MuiDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        aria-labelledby="title"
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="title">Confirm Deletion!</DialogTitle>
        <DialogContent aria-describedby="description">
          <DialogContentText id="description">
            Are you sure you want to delete the file? You will not be able to
            undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error">
            Delete
          </Button>
          <Button onClick={() => setOpen(false)} autoFocus color="success">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
