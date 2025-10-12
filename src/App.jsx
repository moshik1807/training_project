import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import TrainersPage from "./pages/trainersPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
      </Routes>
    </Router>
  );
}
