import { useEffect } from "react";
import Navbar from "../components/navbar";
import SearchTrainer from "../components/searchTrainer";
import TrainerCard from "../components/trainerCard";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrainers } from "../features/trainers/trainersThunk";
import { trainersSelector } from "../features/trainers/trainersSlice";
import {
  searchTrainersSelector,
  searchTrainersErrorSelector,
} from "../features/SearchTrainers/SearchTrainersSlice";

export default function TrainersPage() {
  const dispatch = useDispatch();
  const trainers = useSelector(trainersSelector);
  const searchTrainers = useSelector(searchTrainersSelector);
  const searchTrainersError = useSelector(searchTrainersErrorSelector);

  useEffect(() => {
      dispatch(getAllTrainers());
  }, [dispatch]);

  if (searchTrainersError) {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          p={2}
        >
          <Navbar />
          <SearchTrainer />
          <Box
            flex="1 1 calc(33.33% - 20px)"
            maxWidth="300px"
            boxSizing="border-box"
          >
            <h1 style={{ color: "white" }}>No trainers found</h1>
          </Box>
        </Box>
      </>
    );
  }
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
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
        {(searchTrainers.length > 0 ? searchTrainers : trainers || []).map(
          (trainer, i) => (
            <Box
              key={i}
              flex="1 1 calc(33.33% - 20px)"
              maxWidth="300px"
              boxSizing="border-box"
            >
              <TrainerCard trainer={trainer} />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
