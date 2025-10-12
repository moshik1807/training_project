import { useNavigate } from "react-router-dom";
import SearchTrainer from "./searchTrainer";
import "../styles/navbarStyle.css"

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/trainers")}>
        מאמנים
      </button>

      <button onClick={() => navigate("/trainings")}>
        אימונים
      </button>
    </nav>
  );
}
