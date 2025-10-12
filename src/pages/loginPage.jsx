import { useState } from "react";
import { Button } from "@mui/material";
import Form from "../components/form"; 
import "../styles/loginPageStyle.css"

export default function LoginPage() {
  const [mode, setMode] = useState("")


  if (!mode) {
    return (
      <div className="login-container">
        <Button onClick={() => setMode("login")}>
          Login
        </Button>
        <Button onClick={() => setMode("signup")}>
          Sign Up
        </Button>
      </div>
    );
  }

  return <Form mode={mode}/>;
}


