import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login,signup } from "../features/user/userThunk";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.user);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (props.mode === "signup") {
        user =  dispatch(signup({ name, email }));
        
        if (status === 'succeeded') {
          navigate("/trainers");
        }else{
          alert("11")
        }

      } else {
        user =  dispatch(login({ name, email }));
      }
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
