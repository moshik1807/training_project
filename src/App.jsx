import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import TrainersPage from "./pages/trainersPage";
import TrainerPage from "./pages/trainerPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/trainer" element={<TrainerPage />} />
        <Route path="/trainer/:id" element={<TrainerPage />} />
      </Routes>
    </Router>
  );
}
