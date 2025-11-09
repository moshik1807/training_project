import { useState } from "react";
import { BUTTON } from "./button";
import { useSelector, useDispatch } from "react-redux";
import { createTraining } from "../features/trainings/trainingsThunk";
import { Snackbar, Box, TextField, Typography, Alert } from "@mui/material";
import { userIdSelector } from "../features/user/userSlice";
import { CleanError } from "../features/trainings/trainingsSlice";

export function DateTime({ trainerId }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.trainings.error);
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);

  const handleSubmit = () => {
    const training = {
      coachId: trainerId,
      traineeId: userId,
      date: date,
      time: time,
    };
    dispatch(createTraining(training));
    setOpen(true);
    setDate("");
    setTime("");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{
        bgcolor: "rgba(179, 229, 252, 0.3)",
        p: 3,
        borderRadius: 3,
        width: "300px",
        mx: "auto",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "rgba(2, 119, 189, 0.9)" }}>
        Schedule a Training
      </Typography>
      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
      />

      <TextField
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
      />

      <BUTTON onClick={handleSubmit}>Send</BUTTON>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
          dispatch(CleanError());
        }}
      >
        <Alert severity={error ? "error" : "success"}>
          {error ? error : "Training added successfully!"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
