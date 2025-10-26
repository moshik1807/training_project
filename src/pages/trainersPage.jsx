import { useEffect, useState } from "react";
import { getAllTrainers } from "../api/apiFunctions";
import Navbar from "../components/navbar";
import SearchTrainer from "../components/searchTrainer";
import TrainerCard from "../components/trainerCard";
import { Box } from "@mui/material";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getAllTrainers().then((data) => setTrainers(data));
  }, []);

  const handleSearch = ({ city, trainingType }) => {
    const filtered = trainers.filter(
      (t) => t.city === city && t.trainingType === trainingType
    );
    setTrainers(filtered);
  };

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
        <SearchTrainer onSearch={handleSearch} />
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
