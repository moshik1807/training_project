import { getTrainerById } from "../api/apiFunctions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function TrainerPage() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    if (id) {
      getTrainerById(id).then(setTrainer);
    }
  }, [id]);

  if (!trainer) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        minHeight: "100vh",
        p: 5, // padding 40px
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box
        component="img"
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
          borderRadius: "50%",
          mb: 2,
          border: "3px solid #79e65b",
        }}
      />
      <Typography
        variant="h4"
        sx={{ color: "#00ff15", my: 1 }}
      >
        name: {trainer.name}
      </Typography>
      <Typography sx={{ my: 0.5 }}>city: {trainer.city}</Typography>
      <Typography sx={{ my: 0.5 }}>trainingType: {trainer.trainingType}</Typography>
      <Typography sx={{ my: 0.5 }}>education: {trainer.education}</Typography>
      <Typography sx={{ my: 0.5 }}>bio: {trainer.bio}</Typography>
    </Box>
  );
}
