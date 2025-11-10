import Navbar from "../components/navbar";
import { Training } from "../components/trainingCard";
import { useSelector, useDispatch } from "react-redux";
import { getTrainingsById } from "../features/trainings/trainingsThunk";
import { useEffect } from "react";
import { userSelector } from "../features/user/userSlice";
import { trainingsSelector } from "../features/trainings/trainingsSlice";
import { Typography, Box, Container, Grid } from "@mui/material";
export default function TrainingsPage() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const trainings = useSelector(trainingsSelector);

  useEffect(() => {
    if (!user) {
      return;
    }
    if(!trainings.length){
    dispatch(getTrainingsById(user.id));}
  }, [user, dispatch,trainings]);

  if (!trainings.length) {
    return (
      <>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            No training sessions have been scheduled yet.
          </Typography>
        </Container>
      </>
    );
  }
  return (
    <Box>
      <Navbar />
      <Grid container spacing={4} justifyContent="center" sx={{ p: 2 }}>
        {trainings.map((training, i) => (
          <Grid size={3} key={i}>
            <Training training={training} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
