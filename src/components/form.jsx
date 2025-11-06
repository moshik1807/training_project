import { Button, TextField, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, signup } from "../features/user/userThunk";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (props.mode === "signup") {
        await dispatch(signup({ name, email })).unwrap();
      } else {
        await dispatch(login({ name, email })).unwrap();
      }
      navigate("/trainers");
    } catch (error) {
      console.error(error);
      setError("Incorrect name or email.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "50px auto",
        marginBlock: "300px",
        padding: "20px",
        backgroundColor: "rgba(179, 229, 252, 0.8)",
        borderRadius: "10px",
      }}
    >
      {error && (
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
}
