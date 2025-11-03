import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTrainersBySearch } from "../features/SearchTrainers/SearchTrainersThunk";
import "../styles/searchTrainerStyle.css";
import { cleanSearch } from "../features/SearchTrainers/SearchTrainersSlice";
import { BUTTON } from "./button";

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
    <div className="search-trainer">
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="trainingType"
        value={trainingType}
        onChange={(e) => setTrainingType(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>

      <BUTTON
        onClick={() => {
          dispatch(cleanSearch());
        }}
      >
        clear search
      </BUTTON>
    </div>
  );
}
