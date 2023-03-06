import { Avatar, AvatarGroup } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function MuiAvatar() {
  return (
    <Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          sx={{
            background: (theme) => theme.palette.primary.light,
          }}
        >
          BK
        </Avatar>
        <Avatar
          sx={{
            background: (theme) => theme.palette.success.light,
          }}
        >
          BR
        </Avatar>
        <Avatar
          sx={{
            background: (theme) => theme.palette.success.light,
          }}
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
        />
        <Avatar
          sx={{
            background: (theme) => theme.palette.success.light,
          }}
          src="https://randomuser.me/api/portraits/women/7.jpg"
          alt="Jane Doe"
        />
      </Stack>
      <Stack direction={"row"}>
        <AvatarGroup max={3}>
          <Avatar
            sx={{
              background: (theme) => theme.palette.success.light,
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            sx={{
              background: (theme) => theme.palette.success.light,
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            sx={{
              background: (theme) => theme.palette.success.light,
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            sx={{
              background: (theme) => theme.palette.success.light,
            }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}
