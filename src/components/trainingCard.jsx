import { useSelector, useDispatch } from "react-redux";
import { BUTTON } from "./button";
import { deleteTraining } from "../features/trainings/trainingsThunk";
import { userSelector } from "../features/user/userSlice";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

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
        <Typography variant="h3" sx={{ color: "white" }}>
          Trainer not found
        </Typography>
      </>
    );
  }

  return (
    <Card
      sx={{
        m: 1,
        p: 1,
        bgcolor: "rgba(179, 229, 252, 0.8)",
        borderRadius: "10px",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Avatar
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: 100,
          height: 100,
          margin: "10px auto",
        }}
      />
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
        <Typography variant="h6">
          <strong>trainer: </strong>
          {trainer.name}
        </Typography>
        <Typography variant="body2">
          <strong>training time :</strong> {training.date} {training.time}
        </Typography>
        <Typography variant="body2">
          <strong>trainingType : </strong>
          {trainer.trainingType}
        </Typography>
        <BUTTON onClick={handleDelete}>🗑️</BUTTON>
      </CardContent>
    </Card>
  );
}
