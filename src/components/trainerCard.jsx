import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TrainerCard({ trainer }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trainer/${trainer.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        m: 1,
        p: 1,
        borderRadius: "10px"
      }}
    >
      <Box
        component="img"
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: "80%",
          display: "block",
          m: "10px auto",
        }}
      />

      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">{trainer.name}</Typography>
        <Typography variant="body2">trainingType: {trainer.trainingType}</Typography>
      </CardContent>
    </Card>
  );
}
