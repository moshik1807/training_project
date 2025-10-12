import { Button } from "@mui/material";
import { useState } from "react";
import { login, signup } from "../api/x";
import { useNavigate } from "react-router-dom";
import "../styles/formStyle.css";

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
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
