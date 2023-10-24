"use client";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Box, FormGroup, Typography } from "@mui/material";
import { useState, useEffect } from "react";
type Props = {
  attendance: Number;
  participation: Number;
  progress1: Number;
  progress2: Number;
  progress3: Number;
  progress4: Number;
  progress5: Number;
  writing1: Number;
  writing2: Number;
  writing3: Number;
  speaking1: Number;
  speaking2: Number;
  speaking3: Number;
  result : () => Number
};
export default function Home() {
  const [mark, setMark] = useState<any>({
    attendance: 0,
    participation: 0,
    progress1: 0,
    progress2: 0,
    progress3: 0,
    progress4: 0,
    progress5: 0,
    writing1: 0,
    writing2: 0,
    writing3: 0,
    speaking1: 0,
    speaking2: 0,
    speaking3: 0,
    result: function() : Number {
      const result =
        Number(this?.attendance) * 0.2 +
        Number(this?.participation) * 0.2 +
        Number(this?.progress1) * 0.04 +
        Number(this?.progress2) * 0.04 +
        Number(this?.progress3) * 0.04 +
        Number(this?.progress4) * 0.04 +
        Number(this?.progress5) * 0.04 +
        Number(this?.writing1) / 15 +
        Number(this?.writing2) / 15 +
        Number(this?.writing3) / 15 +
        Number(this?.speaking1) / 15 +
        Number(this?.speaking2) / 15 +
        Number(this?.speaking3) / 15;
      return result;
    },
  });
  return (
    <main className="flex justify-center  h-full w-full items-center p-[10px]">
      <Box className="gap-[10px] flex flex-col">
        <FormGroup
          onChange={({ target }) => {
            const { name } = target as HTMLInputElement;
            const { value } = target as HTMLInputElement;
            setMark({ ...mark, [name]: Number(value) });
          }}
          className="gap-[10px] flex flex-col"
        >
          <Typography>Attendance</Typography>
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="outlined"
            label="Attendance"
            name="Attendance"
          ></TextField>
          <Typography>Participation</Typography>
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="outlined"
            label="Participation"
            name="Participation"
          ></TextField>
          <Typography>Progress test</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="progress 1"
              name="progress1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="progress 2"
              name="progress2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="progress 3"
              name="progress3"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="progress 4"
              name="progress4"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="progress 5"
              name="progress5"
            ></TextField>
          </div>
          <Typography>writing</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Writing 1"
              name="writing1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Writing 2"
              name="writing2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Writing 3"
              name="writing3"
            ></TextField>
          </div>
          <Typography>Speaking</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Speaking 1"
              name="speaking1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Speaking 2"
              name="speaking2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
              label="Speaking 3"
              name="speaking3"
            ></TextField>
          </div>
        </FormGroup>
        <div className="mt-[20px] mx-[auto]">
          Điểm trên lớp: {mark.result().toFixed(2)}
        </div>
        <div className="mt-[20px] mx-[auto]">
          Điểm tổng: {(mark.result() / 2).toFixed(2)}
        </div>
      </Box>
      <div className="absolute right-0 bottom-0 text-[#0098FF]">
        @byAnhphuong
      </div>
    </main>
  );
}
