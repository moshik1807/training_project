import { Button } from "@mui/material";
import { useState } from "react";
import { login, signup } from "../api/x";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.mood === "signup") {
      signup({ name, email });
    } else {
      login({ email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.mood === "signup" && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
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
