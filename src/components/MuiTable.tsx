import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((k) => (
              <TableCell key={k}>{k}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((k) => (
                <TableCell key={k}>{row[k]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const data = [
  {
    id: 1,
    first_name: "Cointon",
    last_name: "Sewley",
    email: "csewley0@a8.net",
    gender: "Male",
    ip_address: "164.83.25.106",
  },
  {
    id: 2,
    first_name: "Gualterio",
    last_name: "Digginson",
    email: "gdigginson1@hao123.com",
    gender: "Male",
    ip_address: "32.118.237.79",
  },
  {
    id: 3,
    first_name: "Aurthur",
    last_name: "Tenwick",
    email: "atenwick2@a8.net",
    gender: "Male",
    ip_address: "40.198.103.112",
  },
  {
    id: 4,
    first_name: "Eddie",
    last_name: "Gantley",
    email: "egantley3@desdev.cn",
    gender: "Female",
    ip_address: "204.208.30.119",
  },
  {
    id: 5,
    first_name: "Seamus",
    last_name: "Prestidge",
    email: "sprestidge4@chicagotribune.com",
    gender: "Male",
    ip_address: "27.18.12.38",
  },
  {
    id: 6,
    first_name: "Tarra",
    last_name: "Itter",
    email: "titter5@wix.com",
    gender: "Female",
    ip_address: "37.1.216.244",
  },
  {
    id: 7,
    first_name: "Dominik",
    last_name: "Stiddard",
    email: "dstiddard6@state.gov",
    gender: "Male",
    ip_address: "132.5.224.253",
  },
  {
    id: 8,
    first_name: "Honoria",
    last_name: "Hupka",
    email: "hhupka7@home.pl",
    gender: "Female",
    ip_address: "139.174.196.228",
  },
  {
    id: 9,
    first_name: "Gipsy",
    last_name: "McKintosh",
    email: "gmckintosh8@amazonaws.com",
    gender: "Female",
    ip_address: "86.163.63.45",
  },
  {
    id: 10,
    first_name: "Erich",
    last_name: "Innwood",
    email: "einnwood9@xrea.com",
    gender: "Male",
    ip_address: "30.204.69.247",
  },
  {
    id: 8,
    first_name: "Honoria",
    last_name: "Hupka",
    email: "hhupka7@home.pl",
    gender: "Female",
    ip_address: "139.174.196.228",
  },
  {
    id: 9,
    first_name: "Gipsy",
    last_name: "McKintosh",
    email: "gmckintosh8@amazonaws.com",
    gender: "Female",
    ip_address: "86.163.63.45",
  },
  {
    id: 10,
    first_name: "Erich",
    last_name: "Innwood",
    email: "einnwood9@xrea.com",
    gender: "Male",
    ip_address: "30.204.69.247",
  },
  {
    id: 8,
    first_name: "Honoria",
    last_name: "Hupka",
    email: "hhupka7@home.pl",
    gender: "Female",
    ip_address: "139.174.196.228",
  },
  {
    id: 9,
    first_name: "Gipsy",
    last_name: "McKintosh",
    email: "gmckintosh8@amazonaws.com",
    gender: "Female",
    ip_address: "86.163.63.45",
  },
  {
    id: 10,
    first_name: "Erich",
    last_name: "Innwood",
    email: "einnwood9@xrea.com",
    gender: "Male",
    ip_address: "30.204.69.247",
  },
];
