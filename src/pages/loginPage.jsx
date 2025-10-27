import { useState } from "react";
import { Button, Box } from "@mui/material";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BUTTON } from "../components/button";
import { useSelector} from "react-redux";

export default function LoginPage() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate()

  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    if (user) {
      navigate("/trainers");
    }
  }, [user,navigate]);



  if (!mode) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 2,
        }}
      >
        
        <BUTTON onClick={() => setMode("login")}>Login</BUTTON>

        <BUTTON onClick={() => setMode("signup")}>Sign Up</BUTTON>

      </Box>
    );
  }

  return <Form mode={mode} />;
}
