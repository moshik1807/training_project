import { useNavigate } from "react-router-dom";
import { Box,AppBar,Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { BUTTON } from "./button";
import { logout } from "../features/user/userSlice";
import { useLocation } from "react-router-dom";
import SearchTrainer from './searchTrainer'
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()

  const handleExit = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{borderRadius:'10px'}}>
    <Toolbar>
      <BUTTON onClick={() => navigate("/trainers")}>trainers</BUTTON>

      <BUTTON onClick={() => navigate("/trainings")}>trainings</BUTTON>

      <BUTTON onClick={handleExit}>exit</BUTTON>
    {location.pathname === "/trainers" && <SearchTrainer/>}
    </Toolbar>
    </AppBar>
  );
}
