import { useEffect, useState } from "react";
import { getAllTrainers } from "../api/x";
import Navbar from "../components/navbar";
import SearchTrainer from "../components/searchTrainer";
import TrainerCard from "../components/trainerCard";
import "../styles/trainersPageStyle.css";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getAllTrainers().then(setTrainers);
  }, []);

  const handleSearch = ({ city, trainingType }) => {
    const filtered = trainers.filter(
      (t) => t.city === city && t.trainingType === trainingType
    );
    setTrainers(filtered);
  };

  return (
    <div>
      <div className="header-row">
        <Navbar />
        <SearchTrainer onSearch={handleSearch} />
      </div>

      <div className="trainers-list">
        {trainers.map((trainer, i) => (
          <TrainerCard key={i} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}
