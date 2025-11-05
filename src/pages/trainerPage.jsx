import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography,Avatar } from "@mui/material";
import { DateTime } from "../components/dateTime";
import { useSelector } from "react-redux";
import { trainersSelector } from "../features/trainers/trainersSlice";
import Navbar from "../components/navbar";
export default function TrainerPage() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const trainers = useSelector(trainersSelector);

  useEffect(() => {
    if (trainers && id) {
      const trainer = trainers?.find((e) => e.id == id);
      setTrainer(trainer);
    }
  }, [trainers, id]);

  if (!trainer) {
    return <Typography>Trainer not found</Typography>;
  }
  return (
    <>
    <Navbar/>
      <Box
        sx={{
          backgroundColor: "rgba(179, 229, 252, 0.8)",
          minHeight: "100vh",
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <Avatar
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: 250,
          height: 250,
          margin: "10px auto",
        }}
      />
        <Typography variant="h4" sx={{ color: "rgba(37, 37, 216, 0.6)", my: 1 }}>
          NAME: {trainer.name}
        </Typography>
        <Typography sx={{ my: 0.5 }}>CITY: {trainer.city}</Typography>
        <Typography sx={{ my: 0.5 }}>
          trainingType: {trainer.trainingType}
        </Typography>
        <Typography sx={{ my: 0.5 }}>education: {trainer.education}</Typography>
        <Typography sx={{ my: 0.5 }}>bio: {trainer.bio}</Typography>
        <DateTime trainerId={id} />
      </Box>
      </>
  );
}
