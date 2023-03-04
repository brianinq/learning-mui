import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function MuiCard() {
  return (
    <Box width={"70%"} marginX="auto" marginTop={"50px"}>
      <Card elevation={4} sx={{ marginBottom: "30px" }}>
        <CardMedia
          component="img"
          height={"300px"}
          image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            React
          </Typography>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.secondary.dark}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptatem laudantium excepturi veniam maiores ut vero consectetur
            praesentium et possimus in, tempore quasi ab voluptates animi
            nesciunt beatae dolores perspiciatis.
          </Typography>
          <CardActions sx={{ margin: "0px" }}>
            <Button>Share</Button>
            <Button>Learn More</Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card elevation={4}>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          height={"300px"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Happy Places
          </Typography>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.secondary.dark}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptatem laudantium excepturi veniam maiores ut vero consectetur
            praesentium et possimus in, tempore quasi ab voluptates animi
            nesciunt beatae dolores perspiciatis.
          </Typography>
          <CardActions sx={{ margin: "0px" }}>
            <Button>Share</Button>
            <Button>Learn More</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MuiCard;
