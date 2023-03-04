import { Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";

export default function MuiBreadCrumbs() {
  return (
    <Box>
      <Breadcrumbs>
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Categories
        </Link>
        <Link underline="hover" href="#">
          Technology
        </Link>
        <Link underline="hover" href="#">
          Computers
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
