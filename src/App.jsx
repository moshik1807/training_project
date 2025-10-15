import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import TrainersPage from "./pages/trainersPage";
import TrainerPage from "./pages/trainerPage";
import TrainingsPage from "./pages/trainings";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import counterSlice from "./rty"
// import Counter from "./rty";
// const mystor =configureStore({
//   reducer:{
//     counterSlice
//   }
// })


export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/trainer" element={<TrainerPage />} />
          <Route path="/trainer/:id" element={<TrainerPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
        </Routes>
      </Router>
  );
}
