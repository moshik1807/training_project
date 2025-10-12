import { useState } from "react";
import { Button } from "@mui/material";
import Form from "../components/form"; 

export default function LoginPage() {
  const [mood, setMood] = useState("")


  if (!mood) {
    return (
      <>
        <Button onClick={() => setMood("login")}>
          Login
        </Button>
        <Button onClick={() => setMood("signup")}>
          Sign Up
        </Button>
      </>
    );
  }

  return <Form mood={mood}/>;
}


