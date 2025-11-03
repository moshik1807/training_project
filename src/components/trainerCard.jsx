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
        width: 250,
        m: 1,
        bgcolor: "#fff",
        border: "2px solid #00ff11",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        color: "#161515",
        p: 1,
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
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #00ff2a",
          backgroundColor: "#000",
        }}
      />

      <CardContent
        sx={{
          p: 1,
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#00ff15", m: "5px 0" }}
        >
          {trainer.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#161313", fontSize: 14 }}>
          {trainer.trainingType}
        </Typography>
      </CardContent>
    </Card>
  );
}
