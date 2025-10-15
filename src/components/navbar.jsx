import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SearchTrainer from "./searchTrainer";
import "../styles/navbarStyle.css"

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <Button onClick={() => navigate("/trainers")}>
        מאמנים
      </Button>

      <Button onClick={() => navigate("/trainings")}>
        אימונים
      </Button>
    </nav>
  );
}
