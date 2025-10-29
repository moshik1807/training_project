import { useNavigate } from "react-router-dom";
import {  Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {BUTTON} from "./button"
import { logout } from "../features/user/userSlice";
import { cleanSearch } from "../features/SearchTrainers/SearchTrainersSlice";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleExit = () => {
    dispatch(logout())
    dispatch(cleanSearch())
    navigate("/")
  };

  return (
    <Box component="nav" sx={{ p: 1 }}>
      <BUTTON onClick={()=>navigate("/trainers")}>trainers</BUTTON>

      <BUTTON onClick={()=>navigate("/trainings")}>trainings</BUTTON>

      <BUTTON onClick={handleExit}>exit</BUTTON>
    </Box>
  );
}
