import { useState } from "react";
import { Box } from "@mui/material";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { BUTTON } from "../components/button";

export default function LoginPage() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) {
      navigate("/trainers");
    }
  }, [user, navigate]);

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
        <BUTTON variant="contained" onClick={() => setMode("login")}>Login</BUTTON>

        <BUTTON variant="contained" onClick={() => setMode("signup")}>Sign Up</BUTTON>
      </Box>
    );
  }

  return <Form mode={mode} />;
}
