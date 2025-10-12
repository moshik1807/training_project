import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TrainerCard({ trainer }) {
  return (
    <Card
      sx={{
        width: 250,
        m: 2,
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
        p: 2,
      }}
    >
      {/* תמונת פרופיל */}
      <Box
        component="img"
        src={trainer.profileImage}
        alt={trainer.name}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: 2,
          mx: "auto",
          mt: 1,
        }}
      />

      {/* שם ותחום */}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
          {trainer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trainer.trainingType}
        </Typography>
      </CardContent>
    </Card>
  );
}
