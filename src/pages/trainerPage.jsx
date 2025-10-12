import { getTrainerById } from "../api/x";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/trainerPageStyle.css"

export default function TrainerPage() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [date, setDate] = useState("");
  const [showDate, setShowDate] = useState(false);
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

      <button onClick={() => setShowDate(true)}>קבע אימון</button>

      {showDate && (
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      )}
    </div>
  );
}
