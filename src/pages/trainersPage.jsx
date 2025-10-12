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
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        All Trainers
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {trainers.map((trainer, i) => (
          <TrainerCard key={i} trainer={trainer} />
        ))}
      </Box>
    </Box>
  );
}
