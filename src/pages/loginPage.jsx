import { useState } from "react";
import { Button, Box } from "@mui/material";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useSelector} from "react-redux";

export default function LoginPage() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate()

  const user = useSelector((state) => state.user);


  useEffect(() => {
    if (user.user) {
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
        <Button
          sx={{
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#7ccd7c" },
          }}
          onClick={() => setMode("login")}
        >
          Login
        </Button>

        <Button
          sx={{
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#7ccd7c" },
          }}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </Button>
      </Box>
    );
  }

  return <Form mode={mode} />;
}
