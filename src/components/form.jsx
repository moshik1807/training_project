import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import { login, signup } from "../api/apiFunctions";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (props.mode === "signup") {
        user = await signup({ name, email });
      } else {
        user = await login({ name, email });
      }
      if (user.id) navigate("/trainers");
      else alert("Incorrect name or email.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          margin: "50px auto",
          marginBlock:"300px",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          backgroundColor: "#fff7f7ff",
      }}>
      <TextField 
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
      <TextField 
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      <Button type="submit">Submit</Button>
    </Box>
  );
}
