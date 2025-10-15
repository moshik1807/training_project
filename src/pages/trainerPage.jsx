import { getTrainerById } from "../api/apiFunctions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/trainerPageStyle.css"

export default function TrainerPage() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  useEffect(() => {
    if (id) {
      getTrainerById(id)
        .then(setTrainer);
    }
  }, [id]);

  if (!trainer) {
    return <p>Loading...</p>;
  }

  return (
    <div className="trainer-page">
      <img src={trainer.profileImage} alt={trainer.name} />
      <h1>name: {trainer.name}</h1>
      <p>city: {trainer.city}</p>
      <p>trainingType: {trainer.trainingType}</p>
      <p>education: {trainer.education}</p>
      <p>bio: {trainer.bio}</p>
    </div>
  );
}
