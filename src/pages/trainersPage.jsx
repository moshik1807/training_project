import { useEffect, useState } from "react";
import { getAllTrainers } from "../api/x";
import TrainerCard from "../components/trainerCard";
import { Box, Typography } from "@mui/material";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getAllTrainers().then(setTrainers);
  }, []);

  return (
    <Box className="trainers-page">
      <Typography variant="h4">
        All Trainers
      </Typography>
      <Box className="trainers-list">
        {trainers.map((trainer, i) => (
          <TrainerCard key={i} trainer={trainer} />
        ))}
      </Box>
    </Box>
  );
}
