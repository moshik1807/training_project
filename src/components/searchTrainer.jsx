import { useState } from "react";
import "../styles/searchTrainerStyle.css"

export default function SearchTrainer({ onSearch }) {
  const [city, setCity] = useState("");
  const [trainingType, setTrainingType] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ city, trainingType });
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
      <button onClick={handleSearch}>search</button>
    </div>
  );
}
