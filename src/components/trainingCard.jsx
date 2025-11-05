import { useSelector, useDispatch } from "react-redux";
import { BUTTON } from "./button";
import { deleteTraining } from "../features/trainings/trainingsThunk";
import { userSelector } from "../features/user/userSlice";
import { Box, Card, CardContent, Typography } from "@mui/material";

export function Training({ training }) {
  const trainers = useSelector((state) => state.trainers.trainers);
  const trainer = trainers?.find((e) => e.id == training.coachId);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleDelete = () => {
    dispatch(deleteTraining({ trainingId: training.id, userId: user.id }));
  };

  if (!trainer) {
    return (
      <>
        <h1>Trainer not found</h1>
      </>
    );
  }

  return (
    <Card
      sx={{
        m: 1,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        width: 250,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h6">trainer: {trainer.name}</Typography>
        <Typography variant="body2">
          training time : {training.date} {training.time}
        </Typography>
        <BUTTON onClick={handleDelete}>🗑️</BUTTON>
      </CardContent>
    </Card>
  );
}
