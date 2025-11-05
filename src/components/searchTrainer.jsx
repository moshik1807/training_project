import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTrainersBySearch } from "../features/SearchTrainers/SearchTrainersThunk";
import "../styles/searchTrainerStyle.css";
import { cleanSearch } from "../features/SearchTrainers/SearchTrainersSlice";
import { BUTTON } from "./button";
import { Box, TextField } from "@mui/material";

export default function SearchTrainer() {
  const [city, setCity] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city && trainingType) {
      dispatch(getTrainersBySearch({ city, trainingType }));
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      marginLeft={'400px'}
      borderRadius={'10px'}
      gap={1}
    >
      <TextField sx={{bgcolor:"rgba(179, 229, 252, 0.8)"}}
        label="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <TextField sx={{bgcolor:"rgba(179, 229, 252, 0.8)"}}
        label="trainingType"
        value={trainingType}
        onChange={(e) => setTrainingType(e.target.value)}
        required
      />
      <BUTTON onClick={handleSearch}>🔍</BUTTON>

      <BUTTON
        onClick={() => {
          dispatch(cleanSearch());
          setCity("");
          setTrainingType("");
        }}
      >
        clear search
      </BUTTON>
    </Box>
  );
}
