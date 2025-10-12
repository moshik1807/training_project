import { getTrainerById } from "../api/x";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TrainerPage() {
  const { id } = useParams(); // לוקח את ה-id מה־URL
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    if (id) {
      getTrainerById(id).then((data) => {
        setTrainer(data);
      });
    }
  }, [id]);

  if (!trainer) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{trainer.name}</h1>
      <p>{trainer.trainingType}</p>
      <img src={trainer.profileImage} alt={trainer.name} />
    </>
  );
}
