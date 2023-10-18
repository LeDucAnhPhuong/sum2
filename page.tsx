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
};
export default function Home() {
  const [mark, setMark] = useState<Props>({
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
  });
  const [result, setResult] = useState<number>(0);
  useEffect(() => {
    const result =
      Number(mark.attendance) * 0.2 +
      Number(mark.participation) * 0.2 +
      Number(mark.progress1) * 0.04 +
      Number(mark.progress2) * 0.04 +
      Number(mark.progress3) * 0.04 +
      Number(mark.progress4) * 0.04 +
      Number(mark.progress5) * 0.04 +
      Number(mark.writing1) / 15 +
      Number(mark.writing2) / 15 +
      Number(mark.writing3) / 15 +
      Number(mark.speaking1) / 15 +
      Number(mark.speaking2) / 15 +
      Number(mark.speaking3) / 15;

    console.log("result", result);
    setResult(result);
  }, [mark]);
  return (
    <main className="flex justify-center  h-full w-full items-center p-[10px]">
      <Box className="gap-[10px] flex flex-col">
        <FormGroup
          onChange={({ target }) => {
            const { name } = target as HTMLInputElement;
            const { value } = target as HTMLInputElement;
            switch (name) {
              case "Attendance":
                setMark({ ...mark, attendance: Number(value) });
                break;
              case "Participation":
                setMark({ ...mark, participation: Number(value) });
                break;
              case "progress1":
                setMark({ ...mark, progress1: Number(value) });
                break;
              case "progress2":
                setMark({ ...mark, progress2: Number(value) });
                break;
              case "progress3":
                setMark({ ...mark, progress3: Number(value) });
                break;
              case "progress4":
                setMark({ ...mark, progress4: Number(value) });
                break;
              case "progress5":
                setMark({ ...mark, progress5: Number(value) });
                break;
              case "writing1":
                setMark({ ...mark, writing1: Number(value) });
                break;
              case "writing2":
                setMark({ ...mark, writing2: Number(value) });
                break;
              case "writing3":
                setMark({ ...mark, writing3: Number(value) });
                break;
              case "speaking1":
                setMark({ ...mark, speaking1: Number(value) });
                break;
              case "speaking2":
                setMark({ ...mark, speaking1: Number(value) });
                break;
              case "speaking3":
                setMark({ ...mark, speaking3: Number(value) });
                break;
            }
          }}
          className="gap-[10px] flex flex-col"
        >
          <Typography>Attendance</Typography>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            variant="outlined"
            label="Attendance"
            name="Attendance"
          ></TextField>
          <Typography>Participation</Typography>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            variant="outlined"
            label="Participation"
            name="Participation"
          ></TextField>
          <Typography>Progress test</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="progress 1"
              name="progress1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="progress 2"
              name="progress2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="progress 3"
              name="progress3"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="progress 4"
              name="progress4"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="progress 5"
              name="progress5"
            ></TextField>
          </div>
          <Typography>writing</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Writing 1"
              name="writing1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Writing 2"
              name="writing2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Writing 3"
              name="writing3"
            ></TextField>
          </div>
          <Typography>Speaking</Typography>
          <div className="flex flex-wrap gap-[10px] w-full">
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Speaking 1"
              name="speaking1"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Speaking 2"
              name="speaking2"
            ></TextField>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              variant="outlined"
              label="Speaking 3"
              name="speaking3"
            ></TextField>
          </div>
        </FormGroup>
        <div className="mt-[20px] mx-[auto]">Điểm trên lớp: {result.toFixed(2)}</div>
        <div className="mt-[20px] mx-[auto]">Điểm tổng: {(result / 2).toFixed(2)}</div>
      </Box>
    </main>
  );
}
