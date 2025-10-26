import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); 
  };

  return (
    <Box component="nav" sx={{ p: 1 }}>
      <Button
        sx={{
          px: 2,
          py: 1,
          mr: 1,
          backgroundColor: "#90ee90",
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#76c776" },
        }}
        onClick={() => navigate("/trainers")}
      >
        מאמנים
      </Button>

      <Button
        sx={{
          px: 2,
          py: 1,
          mr: 1,
          backgroundColor: "#90ee90",
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#76c776" },
        }}
        onClick={() => navigate("/trainings")}
      >
        אימונים
      </Button>

      
      <Button
        sx={{
          px: 2,
          py: 1,
          backgroundColor: "#90ee90",
          borderRadius: "20px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#76c776" },
        }}
        onClick={handleLogout}
      >
        exit
      </Button>
    </Box>
  );
}
