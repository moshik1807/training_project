import Navbar from "../components/navbar";
import { Training } from "../components/trainingCard";
import { useSelector, useDispatch } from "react-redux";
import { getTrainingsById } from "../features/trainings/trainingsThunk";
import { useEffect } from "react";
import { userSelector } from "../features/user/userSlice";
import { trainingsSelector } from "../features/trainings/trainingsSlice";
import { Typography } from "@mui/material";
export default function TrainingsPage() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const trainings = useSelector(trainingsSelector);

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(getTrainingsById(user.id));
  }, [user, dispatch]);

  if(!trainings.length){
    return(
      <>
        <Navbar />
        <Typography sx={{color:"white"}}>No training sessions have been scheduled yet.</Typography>
      </>
    )
  }
  return (
    <>
      <Navbar />
      {trainings.map((training, i) => (
        <div key={i}>
          <Training training={training} />
        </div>
      ))}
    </>
  );
}
