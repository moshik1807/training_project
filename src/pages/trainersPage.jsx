import { useEffect } from "react";
import Navbar from "../components/navbar";
import SearchTrainer from "../components/searchTrainer";
import TrainerCard from "../components/trainerCard";
import { Box } from "@mui/material";
import {getAllTrainers} from '../features/trainers/trainersThunk'
import { useSelector,useDispatch } from "react-redux";

export default function TrainersPage() {
  const Dispatch = useDispatch()
  const trainers = useSelector((state)=> state.trainers.trainers)



  // להוסיף סטייט של חיפוש עם כפתור לניקוי וברגע שלוחץ על חיפוש אז הפונקציה של חיפוש תכתוב לשם את הפרמטרים הנכונים ונעשה בנב בר כפתור לניקוי 
  // const trainersSerch = useSelector((state)=> state.trainersSerch.trainersSerch)

  useEffect(() => {
    if (!trainers || trainers.length === 0) {
      Dispatch(getAllTrainers());
    }
  }, [Dispatch, trainers]);


  // const handleSearch = ({ city, trainingType }) => {
  //   const filtered = trainers.filter(
  //     (t) => t.city === city && t.trainingType === trainingType
  //   );
  //   setTrainers(filtered);
  // };


  //הוסיף פה סטייט שיקבל בהתאם או את מאמנים או את מאמנים ממויינים אם יש ובקמפוננטה נשתמש בזה
  // if(trainersSerch){
  //   SetX(trainersSerch)
  // }else{SetX(trainers)}

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
        p={2} 
      >
        <Navbar />
        {/* <SearchTrainer onSearch={handleSearch} /> */}
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        p={2} 
      >
        {trainers.map((trainer, i) => (
          <Box
            key={i}
            flex="1 1 calc(33.33% - 20px)"
            maxWidth="300px"
            boxSizing="border-box"
          >
            <TrainerCard trainer={trainer} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
