import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../components/form"; // ודא שהנתיב נכון

export default function LoginPage() {
  const [mood, setMood] = useState("")
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/trainers");
  };

  if (!mood) {
    return (
      <>
        <Button onClick={() => setMood("login")} variant="contained" sx={{ m: 1 }}>
          Login
        </Button>
        <Button onClick={() => setMood("signup")} variant="contained" sx={{ m: 1 }}>
          Sign Up
        </Button>
      </>
    );
  }

  return <Form mood={mood} onSuccess={handleSuccess} />;
}


