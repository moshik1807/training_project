import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/trainerCardStyle.css"
export default function TrainerCard({ trainer }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/trainer/${trainer.id}`);
    console.log(trainer.id)
  }
  return (
    <Card className="trainer-card" onClick={handleClick}>
      <Box
        component="img"
        src={trainer.profileImage}
        alt={trainer.name}
      />
      <CardContent className="trainer-card-content">
        <Typography variant="h6">
          {trainer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trainer.trainingType}
        </Typography>
      </CardContent>
    </Card>
  );
}
