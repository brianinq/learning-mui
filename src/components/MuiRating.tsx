import { Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function MuiRating() {
  const [rating, setRating] = useState<number | null>(0);
  const handleRatingChange = (
    e: React.ChangeEvent<{}>,
    newRating: number | null
  ) => {
    setRating(newRating);
  };
  return (
    <Stack spacing={2} direction="row" textAlign="center">
      <Rating precision={0.5} value={rating} onChange={handleRatingChange} />
      <Typography variant="body1">{rating}</Typography>
    </Stack>
  );
}

export default MuiRating;
