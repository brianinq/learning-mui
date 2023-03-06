import { Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function MuiSkeleton() {
  return (
    <Stack spacing={1} width="250px">
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Skeleton variant="circular" width={50} height={50} />
        <Box flexGrow={1}>
          <Skeleton variant="text" animation="wave" width={"70%"} />
          <Skeleton variant="text" animation="wave" width={"40%"} />
        </Box>
      </Stack>
      <Skeleton variant="rectangular" width={250} height={150} />
      <Skeleton />
      <Skeleton animation="wave" width={"70%"} />
      <Skeleton animation="wave" width={"30%"} />
    </Stack>
  );
}
